import app from "./app.js";
import { sequelize } from "./database/database.js";
//import "./models/Users.js"
//import "./models/Contacts.js"

async function main() {
  try {
    await sequelize.sync({ force: false });

    app.listen(4000);
    console.log("listening on http://localhost:4000");
  } catch (error) {
    console.log("Unable to connect to the database: ", error);
  }
}

main();
