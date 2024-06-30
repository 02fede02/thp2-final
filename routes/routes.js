import { Router } from "express";
import Controller from "../controller/Controller.js";

const routes = Router();
const controller = new Controller();

routes.post("/", controller.ingresarPalabra);
routes.get("/", controller.listarPalabras);
routes.delete("/:palabra", controller.borrarPalabras);
routes.get("/all", controller.listarCountPalabras);
routes.get("/:cantidad", controller.allApiPalabras);

export default routes;
