const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teamSchema = new Schema({

	teamID : {
		type : Number,
		required : true
	},

	name :{
		type : String,
		required : true

	},
	sportsID:{

		type: Number,
		required : true

	},
	status: {
		type : String,
		default: Beginner
	},
	points: {
		type : Number,
		default : 0
	}
})

module.exports = User = mongoose.model("teams", TeamSchema)