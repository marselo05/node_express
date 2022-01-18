const express   = require("express");
const moment    = require('moment')
const app       = express()
const PORT      = 3000;
let contador    = 0

app.get("/", (req,res,next)=>{
    res.send(`<h1 style="color:blue">Hola express</h1>`)
})

app.get("/vistas", (req,res,next)=>{
    contador++
    res.send(`<h2 style="color:blue">Han visitado esta página ${contador}</h2>`)
})

app.get("/fyh", (req,res,next)=>{
    res.json({fyh: moment().format("DD/MM/YYYY HH:mm:SS")})
})

const server = app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`)
})

 server.on("Error", error => console.log(error))
