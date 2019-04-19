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
		type: String
	},
	date:{
		type: Date
	}

})


const sportsSchema = new Schema({

	name : {
		type : String,
		required: true
	},

	category : {
		type : String,
		required: true
	},
	matches : {
		type : [matchSchema],
		default : undefined
	}

})

module.exports = User = mongoose.model("sports", sportsSchema, "sports")