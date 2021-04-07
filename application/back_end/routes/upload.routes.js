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
                // /Users/tonycao/Desktop/CSC648/csc648-02-sp21-team02/application/back_end/resources/static/assets/uploads/resumeTest.pdf
                let resume = data.filter(account => { return account.userId == userId })
                let resumePath = __basedir + "/resources/static/assets/uploads/" + resume[0].name;
                console.log(resumePath)
                // console.log(resume[0].name);
                res.status(200).sendFile(resumePath, { 
                    headers: { 
                        'Content-Type': 'application/pdf' 
                    }}, (err) => {
                        if(err) {
                            console.log("error: ", err);
                        }
                        else { 
                            console.log("Sent:", resumePath);
                        }
                }) 
            }
        })        
    })
    
    app.post("/update/resume", upload.single("resume"), updateController.updateFiles);
}