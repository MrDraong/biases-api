import app from "./config/app";
import { sequelize } from "./config/dbconfig";
const PORT = process.env.API_PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log("Listening on port " + PORT));
});
