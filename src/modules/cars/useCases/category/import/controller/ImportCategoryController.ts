import { ImportCategoryUseCase } from "../useCase/ImportCategoryUseCase";
import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

    handle(request: Request, response: Response): Response {
        const { file } = request;

        this.importCategoryUseCase.execute(file);

        return response.status(StatusCodes.CREATED).send(ReasonPhrases.CREATED);
    }
}

export { ImportCategoryController };
