import { ICreateSpecificationDTO } from "./ICreateSpecificationDTO";
import { Specification } from "../../../models/Specification";

interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): void;
    findByName(name: string): Specification;
    list(): Specification[];
}

export { ISpecificationsRepository };
