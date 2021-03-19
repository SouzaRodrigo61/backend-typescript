import { Category } from "../../models/Category";
import { ICreateCategoryDTO } from "./utils/ICreateCategoryDTO";
import { ICategoryRepository } from "./utils/ICategoryRepository";

// Singleton - Design Pattern

class CategoriesRepository implements ICategoryRepository {
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE)
            CategoriesRepository.INSTANCE = new CategoriesRepository();

        return CategoriesRepository.INSTANCE;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
        });

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        return this.categories.find((category) => category.name === name);
    }
}

export { CategoriesRepository };
