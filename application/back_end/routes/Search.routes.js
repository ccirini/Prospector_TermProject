const sql = require("../models/db.js");

module.exports = app => {
    //search default
    app.get("/search", (req, res) => {
        sql.query('SELECT * FROM student', (err, data) => {
            if(err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: 
                        err.message || "Some error occured while signin in."
                })
            }
            else {
                console.log(data);
                res.status(200).send(data); 
            }
        })
    })
    // search w/ filters 
    app.get("/search/:filter/text/:text", (req, res) => {
        let search_param = req.params.filter;
        let search_text = req.params.text; 

        if(search_text.length > 1) {
            search_text = search_text.split(" ")[0];
        }

        sql.query(`SELECT * from student WHERE ${search_param} LIKE "%${search_text}%"`, (err, data) => {
            if(err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: 
                        err.message || "Some error occured while signin in."
                })
            }
            else {
                console.log(data);
                res.status(200).send(data); 
            }
        })
        
    })
}