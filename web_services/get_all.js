
function app(req, res) {
  
  var records = pjs.query("SELECT * FROM requests");
  res.send(records);
}

exports.default = app;