import { SpecificationsRepository } from "../../../../repositories/Specification/SpecificationsRepository";
import { ListSpecificationUseCase } from "../useCase/ListSpecificationUseCase";
import { ListSpecificationController } from "../controller/ListSpecificationController";

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationUseCase(
    specificationsRepository
);

const listSpecificationController = new ListSpecificationController(
    listSpecificationUseCase
);

export { listSpecificationController };
