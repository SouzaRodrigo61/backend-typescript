import { Category } from "../../../models/Category";
import { ICreateCategoryDTO } from "./ICreateCategoryDTO";

interface ICategoryRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoryRepository };
