const sql = require("./db.js");

// constructor
const ProfessorAccount = (ProfessorAccount) => {
    this.userName = ProfessorAccount.userName; 
    this.password = ProfessorAccount.password; 
    this.firstName = ProfessorAccount.firstName; 
    this.lastName = ProfessorAccount.lastName;
    this.email = ProfessorAccount.email;
    this.university = ProfessorAccount.university; 
    this.recomandationList = ProfessorAccount.recomandationList; 
}

// create new Professor account 
ProfessorAccount.create = (newProfessorAccount, result) => {
    sql.query("INSERT INTO professor SET ?", newProfessorAccount, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created Student account: ", { id: res.insertId, ...newProfessorAccount });
        result(null, { id: res.insertId, ...newProfessorAccount });
    });
};

module.exports = ProfessorAccount;