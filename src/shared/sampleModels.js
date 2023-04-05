const SampleText = (textResponse, number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    type: "text",
    text: {
      body: textResponse
    }
  });
  return data;
};
const SampleImage = (number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    type: "image",
    image: {
      link: "https://images.unsplash.com/photo-1620843437920-ead942b3abd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
  });
  return data;
};
const SampleButton = (number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: "Please provide your choice"
      },
      action: {
        buttons: [
          {
            type: "reply",
            reply: {
              id: "001",
              title: "🥗Veg"
            }
          },
          {
            type: "reply",
            reply: {
              id: "002",
              title: "🍗Non-Veg"
            }
          }
        ]
      }
    }
  });
  return data;
};
const SamplePDF = (number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    type: "document",
    document: {
      link: "https://images.unsplash.com/photo-1620843437920-ead942b3abd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
  });
  return data;
};
const SampleVideo = (number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    text: {
      preview_url: true,
      body: "Please visit https://youtu.be/hpltvTEiRrY to inspire your day!"
    }
  });
  return data;
};
const SampleTemplate = (textResponse, number) => {
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
              text: textResponse
            }
          ]
        }
      ]
    }
  });
  return data;
};

module.exports = { SampleText, SampleButton, SampleImage, SampleTemplate };
