const express = require("express");
const app = express();
const port = 3000;

app.get("/",  (req, res) => {
    res.send("<h1>Este es el Home</h1>");
});

 app.listen(port, () => {
     console.log(`La app esta escuchando en el puerto ${port}`)
 });