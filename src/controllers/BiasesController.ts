import { sequelize } from "~/config/dbconfig";
import { Biases } from "~/databases/models/biases";

export class BiasesController {
  /**
   * Méthode qui
   * @param req
   * @param res
   * @returns
   */
  static async getBiasesForCountry(req: any, res: any) {
    try {
      return res.status(200).json(
        await Biases.findAll({
          where: { id_country: req.params.id },
          order: sequelize.random(),
          limit: 2,
        })
      );
    } catch (error) {
      console.log(error);

      res.status(404).send("Biases not found");
    }
  }
}
