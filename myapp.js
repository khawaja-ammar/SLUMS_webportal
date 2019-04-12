const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();
const app = express();
const passport = require('passport')


const users = require('./routes/api/users')
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(passport.initialize())
require('./config/passport')(passport)

app.use('/api/users', users)
// DB Config
const db = process.env.mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
const port = process.env.PORT; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

app.get('/', (req,res) => {
	res.send('<button>Hello From The Other Side</button>')
})