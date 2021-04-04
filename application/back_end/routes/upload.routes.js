const sql = require("../models/db.js");

module.exports = app => {
    const uploadController = require("../controllers/uploads.controller");
    const upload = require("../middleware/uploads");

    // create a new professor account 
    app.post("/upload", upload.single("resume"), uploadController.uploadFiles);
    app.get("/resume", (req, res) => {
        const { userId } = req.body;

        sql.query("SELECT * FROM images", (err, data) => {
            if (err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: 
                        err.message || "Some error occured while retrieving resumes."
                })
            }
            else {
                console.log(data.filter(account => {
                    return account.userId == userId 
                }));
                res.status(200).send(data.filter(account => {
                    return account.userId == userId 
                })); 
            }
        })        
    })
}