export class CountryController {
  /**
   * Méthode qui
   * @param req
   * @param res
   * @returns
   */
  static getCountry(req: any, res: any) {
    try {
      return res.status(200).json("Hello !");
    } catch (error) {
      console.log(error);

      res.status(404).send("Entreprise non trouvée");
    }
  }
}
