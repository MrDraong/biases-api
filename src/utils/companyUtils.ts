const axios = require("axios");

/**
 * Méthode qui prend en paramètre le nom d'une entreprise et retourne ses informations
 * en utilisant l'API de SocieteInfo.com
 * @param name le nom de l'entreprise
 * @returns les informations de l'entreprise
 */
async function fetchCompanyInfos(name: string) {
  try {
    const { data } = await axios.get(
      `https://societeinfo.com/app/rest/api/v2/companies.json?query=${name}`,
      {
        headers: {
          "x-api-key": process.env.SOCIETE_API_KEY,
        },
      }
    );
    const { data: phoneData } = await axios.get(
      `https://societeinfo.com/app/rest/api/v2/company.json/${data.result[0].registration_number}`,
      {
        headers: {
          "x-api-key": process.env.SOCIETE_API_KEY,
        },
      }
    );

    return phoneData.result;
  } catch (error) {
    console.log(error);
  }
}
export { fetchCompanyInfos };
