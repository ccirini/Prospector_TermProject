const sql = require("../models/db.js");

module.exports = app => {
    // sign in 
    app.get("/signin", (req, res) => {
        const { email, password } = req.body;

        sql.query('SELECT student.email, student.password, professor.email, professor.password, recruiter.contractInfo, recruiter.password FROM student, professor, recruiter', (err, data) => {
            if (err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: 
                        err.message || "Some error occured while signin in."
                })
            }
            else {
                console.log(data);
                res.status(200).send(data.filter(account => {
                    return account.email == email && account.password == password
                })); 
            }
        })
    })
}