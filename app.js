const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(`/assets`, express.static(__dirname + `/public`));
app.set(`view engine`, `ejs`);

app.use(`/`, function (req, res, next) {
  console.log(`Request Url:` + req.url);
  next();
});

// app.get(`/`, function (req, res) {
//   res.send(
//     `<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World! </h1></body></html>`
//   );
// });

app.get(`/`, function (req, res) {
  res.render(`index`);
});

// app.get(`/person/id:`, function (req, res) {
//   res.send(
//     `<html><head></head><bofy><h1>Person: ` +
//       req.params.id +
//       `</h1></body></html>`
//   );
// });

app.get(`/person/:id`, function (req, res) {
  res.render(`person`, { ID: req.params.id });
});

app.get(`/api`, function (req, res) {
  res.json({ firstName: `John`, lastname: `Cena` });
});

app.listen(port);
