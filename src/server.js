import express from "express";
import context from "express-http-context";
import cors from "cors";
import routes from "./modules";
import config from "./config";
import { errorHandler, resourceNotFoundHandler } from "./middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(context.middleware);

app.use("/api", routes);

app.use(resourceNotFoundHandler);

app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server is listening on port ${config.PORT}`);
});
