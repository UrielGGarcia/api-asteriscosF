const express = require("express");
const nombreAsteriscos = require("./asteriscos");
const app = express();
const PORT = 3002;

app.use(express.json());
app.get("/en-asteriscos/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    const respuesta = nombreAsteriscos(nombre);
    res.type("text/plain");
    res.send(respuesta);
});

app.listen(PORT, () => {
    console.log(`API corriendo en puerto http://localhost:${PORT}`);
});
