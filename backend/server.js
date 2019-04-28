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

app.use("/api/events", require("./routes/api/events")) // get events 

app.use("/api/sports", require("./routes/api/sports"))

app.use("/api/match", require("./routes/api/match"))

app.use("/api/teams", require("./routes/api/teams"))


const PORT = 5000;
app.listen(PORT, () => console.log('connected!'))