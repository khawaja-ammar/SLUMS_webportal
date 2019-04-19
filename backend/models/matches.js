const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matchSchema = new Schema({

	eventId : {
		type : String,
		required : true
	},

	sportsID :{
		type : String,
		required : true
	},
	team1ID : {
		type : String,
		required : true

	},
	team2ID: {
		type : String,
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
	}

})

module.exports = User = mongoose.model("match", matchSchema, "matches")