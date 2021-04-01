module.exports = app => {
    const JobPost = require('../controllers/JobPost.controller.js')

    // create a new JobPost
    app.post("/createJobPost", JobPost.create);

    // get all JobPost
    app.get("/getJobPostings", JobPost.findAll);
}