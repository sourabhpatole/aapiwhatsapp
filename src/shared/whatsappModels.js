const MessageText = (textResponse, number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    text: {
      body: textResponse
    },
    type: "text"
  });
  return data;
};
const MessageTemplate = (text, number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    type: "template",
    template: {
      name: "food_dept",
      language: {
        code: "en_US"
      },
      components: [
        {
          type: "header",
          parameters: [
            {
              type: "text",
              text: text
            }
          ]
        }
      ]
    }
  });
  return data;
};

module.exports = { MessageText, MessageTemplate };
