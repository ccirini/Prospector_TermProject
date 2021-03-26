const sql = require("./db");

// constructor
// TODO: need to finalize data members 
const StudentAccount = (StudentAccount) => {
    this.userName = StudentAccount.userName; 
    this.password = StudentAccount.password; 
    this.studentSFSUId = StudentAccount.studentSFSUId; 
    this.firstName = StudentAccount.firstName; 
    this.lastName = StudentAccount.lastName;
    this.addressId = StudentAccount.addressId;
    this.email = StudentAccount.email;
    this.resume = StudentAccount.resume; 
    this.ethnicity = StudentAccount.ethnicity;
    this.major = StudentAccount.major; 
    this.gender = StudentAccount.gender; 
    this.aggregateRating = 5; // default starting aggregateRating; will recompute as recommendations come in
}

// create new Student account 
StudentAccount.create = (newStudentAccount, result) => {
    sql.query("INSERT INTO student SET ?", newStudentAccount, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created Student account: ", { id: res.insertId, ...newStudentAccount });
        result(null, { id: res.insertId, ...newStudentAccount });
    });
};

module.exports = StudentAccount;