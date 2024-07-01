import express from "express";
import routes from "./routes/routes.js";
import { notFound } from "./middleware/notFound.js";
import { PORT } from "./config/config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`app.listen ~ ${PORT}`);
});
