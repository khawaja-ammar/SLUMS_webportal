const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sportsSchema = new Schema({

	name : {
		type : String,
		required: true
	},
	eventID : {
		type : Number,
		required : true
	},

	start_date : {
		type : Date,
		required: true
	},
	end_date : {
		type : Date,
		required: true
	}

})

module.exports = User = mongoose.model("events", eventsSchema)