import { CreateCategoryUseCase } from "../useCase/CreateCategoryUseCase";
import { CategoriesRepository } from "../../../../repositories/Categories/CategoriesRepository";
import { CreateCategoryController } from "../controller/CreateCategoryController";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategorryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
    createCategorryUseCase
);

export { createCategoryController };
