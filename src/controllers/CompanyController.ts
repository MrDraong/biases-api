import { fetchCompanyInfos } from "../utils/companyUtils";
export class CompanyController {
  /**
   * Méthode qui récupère les informations d'une entreprise et retourne le numéro de téléphone
   * @param req
   * @param res
   * @returns le numéro de téléphone au format json
   */
  static async getCompanyPhone(req: any, res: any) {
    try {
      const companyData = await fetchCompanyInfos(req.params.name);
      let phone: string = companyData?.contacts.phones[0].value;

      phone = phone?.replace(/ /g, "");
      if (phone?.length === 10) {
        phone = phone.replace("0", "+33 ");
      }
      return res.status(200).json({ phone });
    } catch (error) {
      console.log(error);

      res.status(404).send("Entreprise non trouvée");
    }
  }
}
