const fs = require('fs');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', './view');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {

        res.render('./index');
 });
app.get('/img/:file', function(req, res) {
        res.sendFile(path.join(__dirname, 'view', 'img', req.params.file))
 });
const UsuarioRoute = require('./routes/usuarioroute');

UsuarioRoute(app);



app.use(cors());
app.use(express.json());

app.listen(80, () => {
  console.log("operando na porta 80");
});