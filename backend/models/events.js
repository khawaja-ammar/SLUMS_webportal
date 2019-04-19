const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({

	name : {
		type : String,
		required: true
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
	}

})

module.exports = User = mongoose.model('event', eventSchema, 'events')