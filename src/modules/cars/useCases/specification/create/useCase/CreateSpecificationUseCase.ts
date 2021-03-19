import { ISpecificationsRepository } from "../../../../repositories/Specification/utils/ISpecificationsRepository";

interface ICreateSpecificationUseCase {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}

    execute({ name, description }: ICreateSpecificationUseCase) {
        const specificationAlreadyExists = this.specificationsRepository.findByName(
            name
        );

        if (specificationAlreadyExists)
            throw new Error("Specification already exists!");

        this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
