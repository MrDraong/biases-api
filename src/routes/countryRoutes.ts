import { Router } from "express";
import { CountryController } from "../controllers/CountryController";

const router = Router();

router.get("/", CountryController.getCountry);

export default router;
