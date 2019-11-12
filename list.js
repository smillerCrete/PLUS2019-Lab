
function app() {
  pjs.defineDisplay("display", "list.json");

  while (true) {
  var records = pjs.query("SELECT * FROM requests");
  display.grid.replaceRecords(records);
  display.list.execute();

    display.grid.readChanged();
    if (!pjs.endOfData()) {
      pjs.query("UPDATE requests SET ? WHERE id = ?", [{ complete }, id]);
    }
  }
}

exports.default = app;