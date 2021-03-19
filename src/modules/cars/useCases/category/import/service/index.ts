import { ImportCategoryUseCase } from "../useCase/ImportCategoryUseCase";
import { ImportCategoryController } from "../controller/ImportCategoryController";
import { CategoriesRepository } from "../../../../repositories/Categories/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);

const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
);

export { importCategoryController };
