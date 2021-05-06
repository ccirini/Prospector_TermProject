const bcrypt = require('bcrypt');
const StudentAccount = require('../models/StudentSignUp.model');

const saltRounds = 10; // hash password salt 
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    let { email, password, studentSFSUId, firstName, lastName, addressId, ethnicity, major, 
        gender, veteranStatus, lgbtqStatus, financialAidStatus, disabilityStatus, firstGeneration } = req.body;

    // default starting aggregateRating; will recompute as recommendations come in
    let aggregateRating = 0;

    // validate email format 
    if(emailRegexp.test(email)) {
        // cross check with recruiter_savedSearch 
        // if this student matches any saved searches 
        // send email notification 
        
        // encrypt original password
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if(err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: 
                        err.message || "Some error occured while encrypting password."
                })
            }
            password = hash;
            console.log("hashed: ", password)

            // Create a new student account 
            const student = new StudentAccount({ email, password, studentSFSUId, firstName, lastName, addressId, 
                ethnicity, major, gender, aggregateRating, veteranStatus, lgbtqStatus, financialAidStatus, 
                disabilityStatus, firstGeneration });

            // Save Customer in the database
            StudentAccount.create(student, (err, data) => {
                if (err)
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating a new account."
                    });
                else res.send(data);
            });
        });
    }
}