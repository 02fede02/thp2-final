class Sonda {
  constructor(id, temperatura) {
    if (typeof id !== "number" || id < 1 || id > 5) {
      throw new Error("El id de la sonda debe ser un número entre 1 y 5.");
    }

    if (
      typeof temperatura !== "number" ||
      temperatura < -20 ||
      temperatura > 100
    ) {
      throw new Error("La temperatura debe estar entre -20°C y 100°C.");
    }

    this.id = id;
    this.temperatura = temperatura;
    this.fecha = new Date();
  }
}

const sondas = [];

export { Sonda, sondas };
