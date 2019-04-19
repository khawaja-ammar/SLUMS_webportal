const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sportsSchema = new Schema({

	sportsID : {
		type : Number,
		required : true
	},

	name : {
		type : String,
		required: true
	},
	eventID : {
		type : Number,
		required : true
	},

	category : {
		type : String,
		required: true
	}

})

module.exports = User = mongoose.model("sports", sportsSchema)