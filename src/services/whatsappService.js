// const axios = require("axios");

const https = require("https");
const sendMessageWhatsapp = (data) => {
  const options = {
    host: "graph.facebook.com",
    path: "/v15.0/121276014242914/messages",
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.WHATSAPP_TOKEN,
    },
  };
  console.log(options.headers.Authorization);
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
const sendMessageWhatsapp1 = (data) => {
  const options = {
    host: "graph.facebook.com",
    path: "/v15.0/121276014242914/messages",
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.WHATSAPP_TOKEN,
    },
  };
  console.log(options.headers.Authorization);
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
  sendMessageWhatsapp,
  sendMessageWhatsapp1,
};
