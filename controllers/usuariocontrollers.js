const fs = require('fs');
data= {};

exports.post = (req, res, next) => {
  let nome = req.body.nome;
  let email = req.body.email;
  
  indice={};
  indice.nome=nome;
  indice.email=email;
  
  armazenarR();
  armazenarW(indice);
  
  res.status(201).send('Rota POST!');
 };
  
 exports.put = (req, res, next) => {
  let id = req.params.id;
  let nome = req.body.nome;
  let email = req.body.email;
   
  armazenarR();
   
  data[id].nome = nome;
  data[id].email = email;
  
  armazenarPut();

  res.status(201).send(`Rota PUT com ID! --> ${id}`);
 };
  
 exports.delete = (req, res, next) => {
  let id = req.params.id;
   
  armazenarR();
  data.splice(id,1);
  armazenarPut();
  
  res.status(200).send(`Rota DELETE com ID! --> ${id}`);
 };
  
 exports.get = (req, res, next) => {
  armazenarR();
  res.status(200).send(data);
 };
function armazenarW(indice){
  data[data.length]=indice;
  data = JSON.stringify(data);
  fs.writeFileSync('users.json', data);
}

function armazenarPut(){
  data = JSON.stringify(data);
  fs.writeFileSync('users.json', data);
}

function armazenarR(){
  let rawdata = fs.readFileSync('users.json');
  
  if(rawdata==""){
    data=[];
    return;
  }
  data= JSON.parse(rawdata);
}