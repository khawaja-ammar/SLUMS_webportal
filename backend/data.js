// /backend/data.js
// ref: https://mongoosejs.com/docs/populate.html
// relations undone. Use above ref. 
// req yes/no undon... easy

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const events = new Schema({
    event_id: Number,
    name: String,
    duration: String
  });

const matches = new Schema({
    matche_id:  Number,
    sports_id: Number,
    team1_id: Number,
    team2_id: Number,
    winner: String,
    score: String,
    location: String,
    date: Date,
    time: String

  });

const sports = new Schema({
    sports_id: Number,
    name: String,
    category: String
  });

const teams = new Schema({
	team_id:  Number,
    name: String,
    sports_id: Number,
    status: String,
    points: Number
  });

const event_sports = new Schema({
    event_id:  Number,
    sports_id: Number,
  });

const event_matches = new Schema({
    event_id:  Number,
    matche_id: Number,
  });

const team_ind = new Schema({
	team_id:  Number,
    ind_id: Number,
  });

const individuals = new Schema({
    ind_id:  Number,
    cnic: String,
    contact: String
  });

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);