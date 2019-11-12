
function app() {

  pjs.defineDisplay("display", "form.json");
  display.form.execute();

  pjs.query("INSERT INTO requests SET ?", { name, email, type, details });
  let credentials = pjs.sendRequest({
    method: "get", 
    uri: "https://noderun.com/run/profound-logic/plus-gmail/credentials",
    json: true
  });
  let gmail = require('gmail-send');
  let send = gmail(credentials);

  send({
    to: 'smiller@cretecarrier.com',
    subject: 'IT Service Request',
    text: ` 
      Name: ${name}
      Email: ${email}
      Type: ${type}

      ${details}
    `
  })
  pjs.messageBox("Thank you! Your request was added to our system!");
}

exports.default = app;