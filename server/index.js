const bodyParser = require("body-parser");
const express = require("express");
const userRoute = require("./routes/userRoute");
const app = express();
const db = require("./util/db");
const sec_user = require('./model/User')

const PORT_NUMBER = 8080;

app.use(bodyParser.json());


app.use("/v1", userRoute);

async function dbSync() {
  await db.sync({ force: true });
  console.log("Todos os modelos foram sincronizados com sucesso!");
}

app.listen(PORT_NUMBER, () => {
    // dbSync();
  console.log(`Server is running on port ${PORT_NUMBER}`);
});
