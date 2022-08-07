require("dotenv").config();
import cors from "cors";
import express from "express";

import countryRoutes from "~/routes/countryRoutes";
import biasesRoutes from "~/routes/biasesRoutes";
import { errorHandler } from "~/middlewares/errorHandler";

const app = express();

/**
 * Le body de nos requêtes sera parsé en JSON
 */
app.use(express.json());

/**
 * Autorise les requêtes provenant de tous les domaines
 */
app.use(cors());

/**
 * Entrypoints de l'API
 */
app.use("/country", countryRoutes);
app.use("/biases", biasesRoutes);
app.get("/", (req, res) => res.send("Bienvenu sur l'API"));

/**
 * Gestion des erreurs
 */
app.use(errorHandler);

export default app;
