const express = require('express')
const router = express.Router()
const match = require("../../models/matches")

// possible interaction  get/ delete modify : FRont End allocate time and location will simply use modify!

//get
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
 // create
router.post('/', (req,res) => {

		const newmatch = new match({
			eventId : req.body.eventId,
			sportsID : req.body.sportsID,
			team1ID : req.body.team1ID,
			team2ID : req.body.team2ID

			})
	newmatch
		.save()
		.then( match => res.json(match))
		.catch( err => console.log(err))

	
})

//modify
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