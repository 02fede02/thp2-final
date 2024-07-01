import { Sonda, sondas } from "../models/Sonda.js";

class SondaController {
  addSonda = (req, res) => {
    try {
      const { id, temperatura } = req.body;
      const newSonda = new Sonda(id, temperatura);
      sondas.push(newSonda);

      res.status(201).send({ success: true, message: newSonda });
    } catch (error) {
      res.status(400).send({ success: false, errorMsg: error.message });
    }
  };

  getAllSondas = (req, res) => {
    try {
      const groupedSondas = sondas.reduce((acc, sonda) => {
        if (!acc[sonda.id]) {
          acc[sonda.id] = [];
        }
        acc[sonda.id].push(sonda);
        return acc;
      }, {});
      res.status(200).send({ success: true, message: groupedSondas });
    } catch {
      res
        .status(500)
        .send({ success: false, errorMsg: "Error interno del servidor." });
    }
  };

  getSondasById = (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);

      if (id < 1 || id > 5) {
        return res
          .status(400)
          .send({ success: false, errorMsg: "Número de sonda incorrecto." });
      }
      const sondaFound = sondas.filter((sonda) => sonda.id === id);

      res.status(200).send({ success: true, message: sondaFound });
    } catch {
      res
        .status(500)
        .send({ success: false, errorMsg: "Error interno del servidor." });
    }
  };

  getStatistics = (req, res) => {
    try {
      const statistics = {
        cantidadTotalMuestras: sondas.length,
        temperaturaSondas: {},
      };

      sondas.forEach((sonda) => {
        if (!statistics.temperaturaSondas[sonda.id]) {
          statistics.temperaturaSondas[sonda.id] = {
            cantidad: 0,
            promedio: 0,
          };
        }
        const sondaStats = statistics.temperaturaSondas[sonda.id];
        sondaStats.cantidad += 1;
        sondaStats.promedio +=
          (sonda.temperatura - sondaStats.promedio) / sondaStats.cantidad;
        sondaStats.promedio = parseFloat(sondaStats.promedio.toFixed(2));
      });

      res.status(200).send({ success: true, estadisticas: statistics });
    } catch {
      res
        .status(500)
        .send({ success: false, errorMsg: "Error interno del servidor." });
    }
  };
}

export default SondaController;
