var express = require("express");
var app = express.Router();


var guantes = {"guantes":[
  { id: 1, nombre: "F150", talla: "10", costo: "300", Descripcion: "PRUEBA 2"},
  { id: 2, nombre: "F150", talla: "10", costo: "300", Descripcion: "PRUEBA 2"},
  { id: 3, nombre: "F130", talla: "2", costo: "200", Descripcion: "PRUBEA 3" },
  { id: 4, nombre: "F120", talla: "11", costo: "350", Descripcion: "PRUEBA 4" },
  { id: 5, nombre: "RINAT FF", talla: "10", costo: "400", Descripcion: "PRUEBA 5" }
]};

app.get('/', function(req, res, next) {
  res.send(guantes);
});

//------------ Inicia servicios del API -------------

// GET
app.get("/v1/guantes/:id?", (req, res) => {
  var id = req.params.id;
  if (id===undefined)
  {
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write(JSON.stringify(guantes));
      res.end();
  }
  else
  {
      var filtro_guantes = guantes.guantes.filter(x => x.id==id)
      if( filtro_guantes.length>0 )
      {
          res.writeHead(200, {"Content-Type": "application/json"});
          res.write(JSON.stringify(filtro_guantes));
          res.end();  
          
      }
      else
      {
          res.writeHead(404, {"Content-Type": "text/plain"});
          res.write("404 Dato no econtrado");
          res.end();
      }
      
  }
 });
 
 // POST
app.post('/v1/guantes', function (req, res) {
    var guante = {
        id: req.body.id,
        nombre: req.body.nombre,
        talla: req.body.talla,
        costo: req.body.costo,
        Descripcion: req.body.Descripcion
    };
    if (req.body.nombre.length < 2) {
        res.writeHead(488, { "Content-Type": "text/plain" });
        res.write("488 Longitud no valida");
        res.end();
    }
    else {
        guantes.guantes.push(guante);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ status: "Se realizo el post" }));
        res.end();
    }
});

// PUT
app.put("/v1/guantes/:id", (req, res) => {

    var guante = {
        id: req.body.id,
        nombre: req.body.nombre,
        talla: req.body.talla,
        costo: req.body.costo,
        Descripcion: req.body.Descripcion
    };
    if (req.body.nombre.length < 2) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("404 Longitud no valida");
        res.end();
    }
    else{
        res.writeHead(204, {"Content-Type": "text/plain"});
        res.write("Se logro modificar");
        res.end();
    }
 });

 // DELETE
 app.delete("/v1/deck/:id", (req, res) => {
  var id = req.params.id;
  var filtro_guantes = guantes.guantes.filter(x => x.id==id)
  if( filtro_guantes.length>0 )
  {
      guantes.guantes = guantes.guantes.filter(x => x.id !== id)
      guantes.splice(id, 1);
      res.writeHead(204, { "Content-Type": "text/plain" });
      res.write("Eliminacion Correcta");
      res.end();
  }
  else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404 Error al eliminar");
      res.end();
  }
 });

 //--------------------------------------------

 module.exports = app;