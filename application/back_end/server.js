const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello from server!",
    });
})

// require('./routes/JobPost.routes.js')(app);
require('./routes/SignIn.routes.js')(app);
require('./routes/SignUp.routes')(app);
require('./routes/Search.routes.js')(app);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
