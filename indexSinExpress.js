
const http = require('http')
const PORT = 3006;
const moment = require('moment')
const server = http.createServer( (req, res) => {
    let response = "Mensaja por defecto"
    let hora_actual = moment().format('HH')
    if( 6 >= hora_actual && hora_actual < 12 ) { response = "Buenos dias" }
    else if( 12 > hora_actual && hora_actual < 19 ) { response = "Buenos tardes" }
    else { response = "Buenos noches" }
    res.end(`Saludos --->  ${response}`)

})

server.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`)
})