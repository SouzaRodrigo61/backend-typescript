import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { CreateSpecificationUseCase } from "../useCase/CreateSpecificationUseCase";

class CreateSpecificationController {
    constructor(
        private createSpecificationUseCase: CreateSpecificationUseCase
    ) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createSpecificationUseCase.execute({ name, description });

        return response.status(StatusCodes.CREATED).send(ReasonPhrases.CREATED);
    }
}

export { CreateSpecificationController };
