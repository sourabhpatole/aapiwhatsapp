const express = require("express");
const app = express();
const apiRoute = require("./routes/routes");
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/whatsapp", apiRoute);

app.listen(PORT, () => {
  console.log(`Starting Server on port ${PORT}`);
});
