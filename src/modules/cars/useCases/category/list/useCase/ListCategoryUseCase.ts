import { ICategoryRepository } from "../../../../repositories/Categories/utils/ICategoryRepository";
import { Category } from "../../../../models/Category";

class ListCategoryUseCase {
    constructor(private categoriesRepository: ICategoryRepository) {}

    execute(): Category[] {
        return this.categoriesRepository.list();
    }
}

export { ListCategoryUseCase };
