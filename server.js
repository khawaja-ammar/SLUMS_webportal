
const path = require("path")
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

//Bodyparser Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, "client", "build")))
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


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
//const PORT = 5000;
app.listen(process.env.PORT || 8080, () => {
  if (process.env.PORT) {
    console.log(process.env.PORT)
  } else {
    console.log(8080)
  }
})

