const usuarioControl = require('../controllers/usuariocontrollers');
module.exports = (app) => {
   app.post('/usuarios', usuarioControl.post);
   app.put('/usuarios/:id', usuarioControl.put);
   app.delete('/usuarios/:id', usuarioControl.delete);
   app.get('/usuarios', usuarioControl.get);
   
 
}