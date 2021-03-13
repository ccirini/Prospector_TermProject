const JobPost = require('../models/JobPost.model.js');

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Customer
    const post = new JobPost({
        postID: req.body.postID,
        jobTitle: req.body.jobTitle,
        description: req.body.description,
        salary: req.body.salary,
        time: req.body.time,
        addressID: req.body.addressID, 
    });

    // Save Customer in the database
    JobPost.create(post, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the new Job Post."
            });
        else res.send(data);
    });
}

exports.findAll = (req, res) => {
    JobPost.getAll((err, data) => {
        if(err)
            res.status(500).send({
                message: 
                    err.message || "Some error occured while retrieving Job Postings."
            })
        else res.send(data);
    })
}