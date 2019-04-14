const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sportsSchema = new Schema({

	matchID :{
		type : Number,
		required : true
	},

	sportsID :{
		type : Number,
		required : true
	},
	team1ID : {
		type : Number,
		required : true

	},
	team2ID: {
		type : Number,
		required : true

	},
	winner : {
		type: String

	},
	score:{
		type: String
	},
	location:{
		type: String
	},
	date:{
		type: Date
		required : true
	}

})

module.exports = User = mongoose.model("events", eventsSchema)