
function app(req, res) {
  var records = pjs.query("SELECT * FROM requests WHERE id = ?", req.params.id);
  if (records.length > 0) res.send({ found: true, record: records[0] });
  else res.send({ found: false });
}

exports.default = app;