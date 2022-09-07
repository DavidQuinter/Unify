const { application } = require('express');
const  express = require('express');
const app = express();
const path= require('path');

//Carpeta archivos estaticos.
app.use(express.static("public"));

app.listen(3030, ()=>{
    console.log("Servidor corriendo en http://localhost:3030");
})
//ROUTERS
//app.use(require('./src/routes/index.routes'));
//app.use( require('./src/routes/calendar.routes'));


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get('/nftcalendar', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/nftcalendar.html'))
})
app.get('/descripcion', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/descripcion.html'))
})