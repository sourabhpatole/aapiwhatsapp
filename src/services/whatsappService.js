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
        "Bearer EAAbTC4AlIGgBAGryMGPAvqMhwZBsG4sahNLWobGvWsWZAuHk5DNkWZBLRftLn7OjbmNbIJuONCjFRhmQBZAwfmcX0YvG4fR5CXwHZC0SE71cm5ij6q3pJxE3xbJuaOupnq4h5ZBlyHYBopdw1ET8723srbiDbe9XnTVMsegMJOsZBzsXVKMU07rlO7uwWaLUZADCmQZCnStYxwwZDZD"
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
