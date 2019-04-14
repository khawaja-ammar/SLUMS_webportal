const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 8000;


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27071/database_name', { useNewUrlParser: true})
const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('DB connected')
})

app.listen(PORT, () => {
    console.log(`server is online on port: ${PORT}`);
})