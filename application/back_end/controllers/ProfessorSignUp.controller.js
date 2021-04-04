const ProfessorAccount = require('../models/ProfessorSignUp.model');

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a new professor account 
    const professor = new ProfessorAccount({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        university: req.body.university, 
    });

    // Save Customer in the database
    ProfessorAccount.create(professor, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating a new account."
            });
        else res.send(data);
    });
}