
function app() {
  pjs.defineDisplay("display", "menu.json");

  display.menu.execute();
  if (form) pjs.call("form.js");
  if (list) pjs.call("list.js")
}

exports.default = app;