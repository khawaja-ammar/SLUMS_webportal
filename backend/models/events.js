const mongoose = require('mongoose')
const Schema = mongoose.Schema

// INDEX: 
//			MATCH
//			SPORTS
//			EVENTS


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



const eventSchema = new Schema({

	name : {
		type : String,
		required: true,
		unique : true
	},

	start_date : {
		type : Date,
		required: true
	},
	end_date : {
		type : Date,
		required: true
	},
	info : {
		type: String
	},
	sports : {
		type : [sportsSchema],
		default : undefined,
		required : true
	}

})

module.exports = User = mongoose.model('events', eventSchema, 'events')