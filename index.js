//importo express desde express
const express = require ('express') 
const cors = require ('cors')
const morgan = require ('morgan') 
const { sequelize } = require ("./database")
require('./src/models/notes')

//creamos un servidor
const app = express ()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(morgan('dev'))

//mismo nivel package.json
app.set('views',__dirname + "/src/views")

//Acceso archivos estaticos
app.use(express.static('public'))

//usamos un motor de plantillas EJS
app.set("view engine", "ejs")

app.use("/notes", require("./routes/notes.routes"))

//escucha en port 4000, pasamos un callback
app.listen(4000,()=>{ 
    sequelize.sync({force:false}); 
    console.log("Server running at 4000 port....");
})
