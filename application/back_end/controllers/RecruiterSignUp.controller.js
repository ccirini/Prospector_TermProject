const RecruiterAccount = require('../models/RecruiterSignUp.model');

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a new recruiter account 
    const recruiter = new RecruiterAccount({
        email: req.body.email,
        password: req.body.password,
        companyName: req.body.companyName,
        decription: req.body.decription,
        addressId: req.body.addressId,
        websiteLink:req.body.websiteLink 
    });

    // Save Customer in the database
    RecruiterAccount.create(recruiter, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating a new account."
            });
        else res.send(data);
    });
}