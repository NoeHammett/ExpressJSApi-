const express = require('express');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const routes = require('./routes');

const app = express()

app.set('port', process.env.PORT || 9000);
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'personal'
}


// --------- Middleware ------------
app.use(myconnection(mysql, dbOptions, 'single'))
app.use(express.json())

// --------- Routes ------------
app.get('/', (req,res) =>{
    res.send("WELCOME");
})
app.use('/api',routes)

// --------- Server Runnig ------------

app.listen(app.get('port'),() =>{
    console.log("Server Running on port", app.get('port'));
})

