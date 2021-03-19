/**
 *
 * Importações
 */
import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/category/create/service";
import { listCategoryController } from "../modules/cars/useCases/category/list/service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { importCategoryController } from "../modules/cars/useCases/category/import/service";

/**
 *
 * Processamneto logico das rotas
 */

const upload = multer({
    dest: "./tmp/uploads",
});

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoryController.handle(request, response);
});

export { categoriesRoutes };
