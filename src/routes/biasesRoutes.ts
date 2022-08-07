import { Router } from "express";
import { BiasesController } from "../controllers/BiasesController";

const router = Router();

router.get("/:id", BiasesController.getBiasesForCountry);

export default router;
