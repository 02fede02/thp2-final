import { Router } from "express";
import SondaController from "../controller/SondaController.js";

const routes = Router();
const sondaController = new SondaController();

routes.get("/sondas", sondaController.getAllSondas);
routes.get("/sondas/:id", sondaController.getSondasById);
routes.post("/sondas", sondaController.addSonda);
routes.get("/estadisticas", sondaController.getStatistics);

export default routes;
