const bcrypt = require('bcrypt');
const RecruiterAccount = require('../models/RecruiterSignUp.model');

const saltRounds = 10; // hash password salt 
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    let { email, password, companyName, description, addressId, websiteLink } = req.body; 

    // validate email format 
    if(emailRegexp.test(email)) {
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

            // Create a new recruiter account 
            const recruiter = new RecruiterAccount({ email, password, companyName, description, addressId, websiteLink});

            // Save Customer in the database
            RecruiterAccount.create(recruiter, (err, data) => {
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