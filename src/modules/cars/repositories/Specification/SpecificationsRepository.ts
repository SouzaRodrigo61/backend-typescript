import { ICreateSpecificationDTO } from "./utils/ICreateSpecificationDTO";
import { ISpecificationsRepository } from "./utils/ISpecificationsRepository";
import { Specification } from "../../models/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    private static INSTANCE: SpecificationsRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository {
        if (!SpecificationsRepository.INSTANCE)
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();

        return SpecificationsRepository.INSTANCE;
    }

    findByName(name: string): Specification {
        return this.specifications.find((category) => category.name === name);
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
        });

        this.specifications.push(specification);
    }

    list(): Specification[] {
        return this.specifications;
    }
}

export { SpecificationsRepository };
