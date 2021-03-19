import { Specification } from "../../../../models/Specification";
import { ListSpecificationUseCase } from "../useCase/ListSpecificationUseCase";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

class ListSpecificationController {
    constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

    handle(request: Request, response: Response) {
        const all = this.listSpecificationUseCase.execute();

        return response.status(StatusCodes.OK).json({ specification: all });
    }
}

export { ListSpecificationController };
