import { Router } from "express";
import { CompanyController } from "../controllers/CompanyController";

const router = Router();

router.get("/:name", CompanyController.getCompanyPhone);

export default router;
