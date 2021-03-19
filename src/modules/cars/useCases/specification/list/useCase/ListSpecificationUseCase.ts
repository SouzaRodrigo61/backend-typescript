import { ISpecificationsRepository } from "../../../../repositories/Specification/utils/ISpecificationsRepository";
import { Specification } from "../../../../models/Specification";

class ListSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}

    execute(): Specification[] {
        return this.specificationsRepository.list();
    }
}

export { ListSpecificationUseCase };
