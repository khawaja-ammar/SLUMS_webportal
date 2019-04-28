const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teamSchema = new Schema({


	name :{
		type : String,
		required : true

	},
	eventName : {
		type: String,
		required : true
	},
	sportsID:{

		type: String,
		required : true
	},
	status: {
		type : String,
		default: "Beginner"
	},
	points: {
		type : Number,
		default : 0
	},
	matchScheduled : {
		type: Boolean,
		default : false
	}
})

module.exports = User = mongoose.model("teams", teamSchema)