import app from "./app.js";
import { sequelize } from "./database/database.js";
import { PORT } from "./config.js";
//import "./models/Users.js"
//import "./models/Contacts.js"

async function main() {
  try {
    await sequelize.sync({ force: false });

    app.listen(PORT);
    console.log("listening on http://localhost:"+PORT);
  } catch (error) {
    console.log("Unable to connect to the database: ", error);
  }
}

main();
