const sql = require("./db.js");

// constructor
const JobPost = (JobPost) => {
  // postID need to be generated in the back end before inserting into DB
  this.postID = JobPost.postID;
  this.jobTitle = JobPost.jobTitle;
  this.description = JobPost.description;
  this.salary = JobPost.salary;
  this.time = JobPost.time;
  this.addressID = JobPost.addressID;
};

// creating a new JobPost
JobPost.create = (newJobPost, result) => {
  sql.query("INSERT INTO JobPosting SET ?", newJobPost, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created JobPost: ", { id: res.insertId, ...newJobPost });
    result(null, { id: res.insertId, ...newJobPost });
  });
};

JobPost.getAll = result => {
  sql.query("SELECT * FROM JobPosting", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("JobPosting: ", res);
    result(null, res);
  });
};

module.exports = JobPost;
