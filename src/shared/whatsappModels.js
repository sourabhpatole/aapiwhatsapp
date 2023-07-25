const MessageText = (textResponse, number) => {
  // const data = JSON.stringify({
  //   messaging_product: "whatsapp",
  //   to: number,
  //   replay: {
  //     body: textResponse,
  //   },
  //   type: "replay",
  // });
  // return data;

  const data = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    type: "text",
    text: {
      body: textResponse,
    },
  });
  return data;
};
const MessageTemplate = (text, number, textUser) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: `Hi *${textUser}*, `,
      },
    },
  });
  return data;
};
// const MessageTemplateDinner = (text, number) => {
//   const data = JSON.stringify({
//     messaging_product: "whatsapp",
//     recipient_type: "individual",
//     to: number,
//     type: "interactive",
//     interactive: {
//       type: "button",
//       body: {
//         text: `Please select the type of dish would you like to add to your menu for tomorrow's _*Dinner*_?
//         If you would like to cancel, please *Ignore* the message`,
//       },
//       action: {
//         buttons: [
//           {
//             type: "reply",
//             reply: {
//               id: "002",
//               title: "Veg",
//             },
//           },
//           {
//             type: "reply",
//             reply: {
//               id: "003",
//               title: "Non-veg",
//             },
//           },
//         ],
//       },
//     },
//   });
//   return data;
// };
const MessageTemplateForFood = (text, number) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    type: "text",
    text: {
      body: text,
    },
  });
  return data;
};
// const MessageTemplateForNonVegL = (text, number) => {
//   const data = JSON.stringify({
//     messaging_product: "whatsapp",
//     recipient_type: "individual",
//     to: number,
//     type: "text",
//     text: {
//       body: text,
//     },
//   });
//   return data;
// };
// const MessageTemplateForVegD = (text, number) => {
//   const data = JSON.stringify({
//     messaging_product: "whatsapp",
//     recipient_type: "individual",
//     to: number,
//     type: "text",
//     text: {
//       body: text,
//     },
//   });
//   return data;
// };
// const MessageTemplateForNonVegD = (text, number) => {
//   const data = JSON.stringify({
//     messaging_product: "whatsapp",
//     recipient_type: "individual",
//     to: number,
//     type: "text",
//     text: {
//       body: text,
//     },
//   });
//   return data;
// };

module.exports = {
  MessageText,
  MessageTemplate,
  MessageTemplateForFood,
};
