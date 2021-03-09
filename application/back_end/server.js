const app = require('./express'); 

const PORT = process.env.PORT || 5000; 

require('dotenv').config();

// DB set up
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.dbHOST,
    user: process.env.dbUSER,
    password: process.env.dbPASS,
    database: process.env.dbNAME
});

connection.connect(err => {
    if(err) console.log(err); 
    else console.log("Successful connection to database")
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
