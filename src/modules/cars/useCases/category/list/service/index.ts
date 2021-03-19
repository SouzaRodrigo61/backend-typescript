import { CategoriesRepository } from "../../../../repositories/Categories/CategoriesRepository";
import { ListCategoryUseCase } from "../useCase/ListCategoryUseCase";
import { ListCategoryController } from "../controller/ListCategoryController";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };
