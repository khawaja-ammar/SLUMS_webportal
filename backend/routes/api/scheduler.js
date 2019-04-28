const express = require('express')
const router = express.Router()
const match = require("../../models/matches")
const sports = require("../../models/sports")
const team = require("../../models/team")

// Scheduler :

function createPairs (teams, callback) {

	if(teams.length%2 != 0){
		return callback("Error! Need even pairs of teams.")
	}
	var i = 0 
	var matches = []
	for(i = 0; i < teams.length; i = i + 2){
		var newmatch = {
			team1ID: teams[i]._id,
			team2Id:teams[i+1]._id,
			sportID: teams[i].sportsID,
		}
		matches.push(newmatch)
	}
	callback(null,matches)

	
}

router.get('/:id', (req,res) => {
	const id = req.params.id
	const type = "Pairs"
	//for this sport we need to create matches so
	//get all teams of this sport
	var teamsList = []
	team.find({sportsID:id}, (err,teams) => {
		if(err){
			return res.status(400).send(err)
		}
		createPairs(teams, (err, matches) => {
			if(err){
				return res.status(400).send(err)
			}
			res.send(matches)
		})
	})


	//set in array and pass onto function
	//function ought to return an array of matches 
})

module.exports = router