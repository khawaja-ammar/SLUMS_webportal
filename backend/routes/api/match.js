const express = require('express')
const router = express.Router()
const event = require("../../models/events")
const sports = require("../../models/sports")
const match = require("../../models/matches")

// possible interaction  get/ delete modify : FRont End allocate time and location will simply use modify!

// No get for matches.... when we get sports matches will come automatically

//  post
// Request will contain an array of matches although array may just have a single match
router.post('/:id/:sportid', (req,res) => {

	const name = req.params.id
	const sportid = req.params.sportid
	var sportfound = false
	event.findOne({name}).then( event => {

		if(!event){
			return res.status(400).json({eventnotfound:"Event not found",name})
		}
		else{
			event.sports.find( sport => {
				if(sport._id == sportid){
					//insert all matches =>
					sportfound = true
					req.body.matches.forEach( mtch => {
						const newmatch = new match({
							team1ID : mtch.team1ID,
							team2ID : mtch.team2ID,
							location : mtch.location,
							date : mtch.date
						})
						sport.matches.push(newmatch)
					})
					res.send(sport)

				}

			})
			if(!sportfound){
				return res.status(400).json({sportnotfound:"No sport of this id ",sportid})
			}
			event.save()

		}

	})
	
})

//input will be an array of matches that have been modified. Each match in array will replace corresponding match in existing array
router.put('/:id/:sportid', (req, res) => {
	const name = req.params.id
	const sportid = req.params.sportid
	var sportfound = false
	event.findOne({name}).then( event => {
		if(!event){
			return res.status(400).json({noevent:"No event by that name",name})
		}
		event.sports.find( sport => {
			if(sport._id == sportid){
				sportfound = true
				const matchesToAdd = req.body.matches
				var newMatches = matchesToAdd.map( obj => sport.matches.find( o => o._id === obj._id) || obj)
				sport.matches = b
				res.send("Success")
			}
		})
		if(!sportfound){
				return res.status(400).json({sportnotfound:"No sport of this id ",sportid})
			}

		event.save()

	})

}),

//No options for delete since you cant change number of matches
/*
router.delete('/:id', (req,res) => {
	const name = req.params.id
	match.findOneAndRemove({name}, (err,doc) => {
		if(err){
			return res.status(500).json('Error')
		}
		res.send('Success!')

	})
	// also delete all matches and associated sports and teams

})
*/

module.exports = router