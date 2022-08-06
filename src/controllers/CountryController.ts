import { Country } from "~/databases/models/country";

export class CountryController {
  /**
   * Méthode qui
   * @param req
   * @param res
   * @returns
   */
  static async getCountry(req: any, res: any) {
    try {
      return res.status(200).json(await Country.findAll());
    } catch (error) {
      console.log(error);

      res.status(404).send("Country not found");
    }
  }
}
