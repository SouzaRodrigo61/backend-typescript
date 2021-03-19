import { SpecificationsRepository } from "../../../../repositories/Specification/SpecificationsRepository";
import { CreateSpecificationUseCase } from "../useCase/CreateSpecificationUseCase";
import { CreateCategoryController } from "../../../category/create/controller/CreateCategoryController";
import { CreateSpecificationController } from "../controller/CreateSpecificationController";

const specificationsRepository = SpecificationsRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository
);

const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase
);

export { createSpecificationController };
