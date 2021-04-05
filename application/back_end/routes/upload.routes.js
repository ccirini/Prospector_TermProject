const sql = require("../models/db.js");

module.exports = app => {
    const uploadController = require("../controllers/uploadResume.controller");
    const updateController = require("../controllers/updateResume.controller");
    const upload = require("../middleware/uploads");

    // create a new professor account 
    app.post("/upload", upload.single("resume"), uploadController.uploadFiles);

    app.get("/resume", (req, res) => {
        const { userId } = req.query;

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
    
    app.post("/update/resume", upload.single("resume"), updateController.updateFiles);
}