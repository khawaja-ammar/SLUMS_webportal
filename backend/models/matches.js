const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matchSchema = new Schema({

	
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
		type: String,
		required : true
	},
	date:{
		type: Date,
		required : true
	}

})

module.exports = User = mongoose.model("match", matchSchema, "matches")