const express = require('express')
const router = express.Router()
const event = require("../../models/events")
const sports = require("../../models/sports")
const match = require("../../models/matches")

// possible interaction  get/ delete modify : FRont End allocate time and location will simply use modify!

//get undecided ask TA
router.get('/:id?', (req, res) => {

	const name = req.params.id
	if(name){
		// does match exist?
		// if so fetch and send
		match.findOne({name}).then( match => {
			if(!match){
				return res.status(400).json({namenotfound: "No match found by that name!", name})
			}
			res.json(match)
		})
		
	}
	else
	{
		var Usermap = {};
		//no params so get all matchs
		match.find({}, (err, ev) => {

			
			ev.forEach( ev => {
				Usermap[ev.name] = ev
			})

			res.send(Usermap)

		})

	
	}
})

// Now post
 // create matches : given an array 
router.post('/:id/:sportname/:sportcategory', (req,res) => {

	const name = req.params.id
	event.findOne({name}).then( event => {

		if(!event){
			return res.status(400).json({eventnotfound:"Event not found",name})
		}
		else{
			event.sports.forEach( sport => {
				console.log('sport', sport)
				if(sport.name == req.params.sportname && sport.category == req.params.sportcategory){
					console.log('found sport',sport)
					const newMatch = new match({
						team1ID : req.body.team1ID,
						team2ID : req.body.team2ID,
						location: req.body.location,
						date: req.body.date

					})
					sport.matches.push(newMatch)
					res.send(newMatch)
					event.save()
				}
			})
		}

	})
	
})

//modify for any match change val of match
router.put('/:id', (req, res) => {
	const name = req.params.id
	match.findOneAndUpdate({name}, req.body, (err, doc) => {
		if(err){
			return res.status(500).json('error occured')
		}
		res.send('success!')
	})
}),

//delete:

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


module.exports = router