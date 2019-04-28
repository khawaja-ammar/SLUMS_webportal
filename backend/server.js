const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
//Bodyparser Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors())

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

app.use("/api/scheduler", require("./routes/api/scheduler"))


const PORT = 50000;
app.listen(PORT, () => console.log('connected!'))