import { Router } from "express";
import { CountryController } from "../controllers/CountryController";

const router = Router();

router.get("/random", CountryController.getRandomCountry);

export default router;
