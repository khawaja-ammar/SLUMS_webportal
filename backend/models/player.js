const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sportsSchema = new Schema({

	playerID : {
		type : Number,
		required : true
	},

	teamID : {
		type : Number,
		required : true
	},
	name : {
		type : String,
		required: true
	},

	category : {
		type : String,
		required: true
	}

})

module.exports = User = mongoose.model("player", sportsSchema)