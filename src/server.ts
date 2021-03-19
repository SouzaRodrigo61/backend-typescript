import express from "express";

import swaggerUI from "swagger-ui-express";

import { router } from "./middleware/router";

import swaggerDocument from "./swagger.json";

const app = express();

app.use(express.json());

app.use(router);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(3333, () => console.log("Server is Running!"));
