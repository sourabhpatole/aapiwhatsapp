// const axios = require("axios");
const https = require("https");
const sendMessageWhatsapp = (data) => {
  const options = {
    host: "graph.facebook.com",
    path: "/v16.0/121276014242914/messages",
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer EAAbTC4AlIGgBAPU967ZCnjxRRIQdl39C2hlds9xuVtjfLh5qcZAYozNeAt3uZCtvBCqPVz7XyvPwOUsPAjGsGi32P44LPsevkmmUdkk0qRRdZCnHmB3Sbo7jZA15FUWAeiwFqRlnNu7ZBAyddSyvFtdvosqdCC3wEccqbtqCTsM0mP2WfIZA0FKsW0z1IzRNjcR6XawCvlDxQZDZD"
    }
  };
  const req = https.request(options, (res) => {
    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });
  req.on("error", (error) => {
    console.error(error);
  });
  req.write(data);
  req.end();
};
module.exports = {
  sendMessageWhatsapp
};
