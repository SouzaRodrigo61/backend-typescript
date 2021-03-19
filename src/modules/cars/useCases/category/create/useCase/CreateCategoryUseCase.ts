import { CategoriesRepository } from "../../../../repositories/Categories/CategoriesRepository";
import { ICategoryRepository } from "../../../../repositories/Categories/utils/ICategoryRepository";

interface ICreateCategoryService {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoryRepository) {}

    execute({ name, description }: ICreateCategoryService) {
        const categoryAlreadyExists = this.categoriesRepository.findByName(
            name
        );

        if (categoryAlreadyExists) throw new Error("Category already exists!");

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
