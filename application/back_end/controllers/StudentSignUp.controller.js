const StudentAccount = require('../models/StudentSignUp.model');

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a new student account 
    const student = new StudentAccount({
        email: req.body.email,
        password: req.body.password,
        studentSFSUId: req.body.studentSFSUId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        addressId: req.body.addressId,
        ethnicity: req.body.ethnicity,
        major: req.body.major,
        gender: req.body.gender,
        // default starting aggregateRating; will recompute as recommendations come in
        aggregateRating: 0,
        veteranStatus: req.body.veteranStatus,
        lgbtqStatus: req.body.lgbtqStatus,
        financialAidStatus: req.body.financialAidStatus,
        disabilityStatus: req.body.disabilityStatus,
        firstGeneration: req.body.firstGeneration,
    });

    // Save Customer in the database
    StudentAccount.create(student, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating a new account."
            });
        else res.send(data);
    });
}