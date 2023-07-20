const express = require("express");
const apiRoute = require("./routes/routes");
const app = express();
require("./db/conn");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/whatsapp", apiRoute);

app.listen(PORT, () => {
  console.log("listening on port" + PORT);
});
