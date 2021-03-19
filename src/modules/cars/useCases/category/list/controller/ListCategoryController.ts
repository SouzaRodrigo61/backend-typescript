import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ListCategoryUseCase } from "../useCase/ListCategoryUseCase";

class ListCategoryController {
    constructor(private listCategoryUseCase: ListCategoryUseCase) {}

    handle(request: Request, response: Response) {
        const all = this.listCategoryUseCase.execute();

        return response.status(StatusCodes.OK).json({ categories: all });
    }
}

export { ListCategoryController };
