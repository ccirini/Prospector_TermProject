const sql = require("./db");

// constructor
const RecruiterAccount = (RecruiterAccount) => {
    this.userName = RecruiterAccount.userName; 
    this.password = RecruiterAccount.password; 
    this.firstName = RecruiterAccount.firstName; 
    this.lastName = RecruiterAccount.lastName;
    this.companyName = RecruiterAccount.companyName; 
    this.decription = RecruiterAccount.decription; 
    this.contractInfo = RecruiterAccount.contractInfo;
    this.addressId = RecruiterAccount.addressId;
    this.websiteLink = RecruiterAccount.websiteLink; 
}

// create new Professor account 
RecruiterAccount.create = (newRecruiterAccount, result) => {
    sql.query("INSERT INTO recruiter SET ?", newRecruiterAccount, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created Student account: ", { id: res.insertId, ...newRecruiterAccount });
        result(null, { id: res.insertId, ...newRecruiterAccount });
    });
};

module.exports = RecruiterAccount;