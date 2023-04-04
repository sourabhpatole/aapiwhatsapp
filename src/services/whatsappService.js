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
        "Bearer EAAbTC4AlIGgBAPeZB5TrLxFMUt7SGgYRFtBtiaZBu7LeEMMCm8SwwrEoWVv2KNWdTq1AZBwQParUZCP1Qw1cxpyRDfc8tXADuvp4eZB254pMNuEv8wjMJ0soL97lU1m1uWGKK3ZCnZAyUHfVMnvBU4KmqFTqf6cteEBZCjig5AEI1c5f2ZAOqC8lXhAM7K2VYgzCOqvReBWScSQZDZD"
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
