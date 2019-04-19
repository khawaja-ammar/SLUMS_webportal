const express = require('express')
const router = express.Router()
const sport = require("../../models/sports")




router.get('/:id?', (req, res) => {

	const name = req.params.id
	if(name){
		// does sport exist?
		// if so fetch and send
		sport.findOne({name}).then( sport => {
			if(!sport){
				return res.status(400).json({namenotfound: "No sport found by that name!", name})
			}
			res.json(sport)
		})
		
	}
	else
	{
		var Usermap = {};
		//no params so get all sports
		sport.find({}, (err, ev) => {

			
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

		const newsport = new sport({
			eventId : req.body.eventId,
			name : req.body.name,
			category : req.body.category

			})
	newsport
		.save()
		.then( sport => res.json(sport))
		.catch( err => console.log(err))

	
})

//modify
router.put('/:id', (req, res) => {
	const name = req.params.id
	sport.findOneAndUpdate({name}, req.body, (err, doc) => {
		if(err){
			return res.status(500).json('error occured')
		}
		res.send('success!')
	})
}),

//delete:

router.delete('/:id', (req,res) => {
	const name = req.params.id
	sport.findOneAndRemove({name}, (err,doc) => {
		if(err){
			return res.status(500).json('Error')
		}
		res.send('Success!')

	})
	// also delete all sportes and associated sports and teams

})


module.exports = router