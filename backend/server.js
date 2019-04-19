const express = require('express')
const app = express()
const mongoose = require('mongoose')

//Bodyparser Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// DB
const db = require('./keys/keys').mongoURI
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

//For events

app.use("/api/events", require("./routes/api/events"))

app.use("/api/match", require("./routes/api/match"))

app.use("/api/sports", require("./routes/api/sports"))


const PORT = 5000;
app.listen(PORT, () => console.log('connected!'))