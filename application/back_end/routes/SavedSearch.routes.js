const sql = require("../models/db.js");

// TODO
module.exports = app => {
    // search 
    app.post("/savesearch/option/:option/text/:text", (req, res) => {
        let save_search_option = req.params.option;
        let save_search_text = req.params.text; 
        let { recruiterId } = req.body; 

        let queryObj = {
            recruiterUserId: recruiterId, 
            textContent: save_search_text,
            dropDownOption: save_search_option
        }

        sql.query("INSERT INTO recruiter_savedSearch SET ?", queryObj, (err, data) => {
            if (err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: 
                        err.message || "Some error occured while adding recomendations."
                })
            }
    
            console.log("recruiter_savedSearch created: ", data);
            res.status(200).send(data);
        })
        
    })
}