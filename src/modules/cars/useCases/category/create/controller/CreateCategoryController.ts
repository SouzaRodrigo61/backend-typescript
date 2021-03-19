import { Request, Response } from "express";
import { CreateCategoryUseCase } from "../useCase/CreateCategoryUseCase";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

    handle(request: Request, response: Response) {
        const { name, description } = request.body;

        this.createCategoryUseCase.execute({ name, description });

        return response.status(StatusCodes.CREATED).send(ReasonPhrases.CREATED);
    }
}

export { CreateCategoryController };
