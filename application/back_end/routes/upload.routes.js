module.exports = app => {
    const uploadController = require("../controllers/uploads");
    const upload = require("../middleware/uploads");

    // create a new professor account 
    app.post("/upload", upload.single("file"), uploadController.uploadFiles);
}