const express = require('express')
const router = express.Router()
const event = require("../../models/events")

//possible interactions at event : create, modify, delete, or just get event

//first check the possible inputs are indeed correct:

//const validateDeleteEvent = require('../../validation/deleteEvent')
//const validatemodifyEvent = require('../../validation/modifyEvent')
//const validatecreateEvent = require('../../validation/createEvent')

// First GET 

router.get('/:id?', (req, res) => {

	const name = req.params.id
	if(name){
		// does event exist?
		// if so fetch and send
		event.findOne({name}).then( event => {
			if(!event){
				return res.status(400).json({namenotfound: "No event found by that name!", name})
			}
			res.json(event)
		})
		
	}
	else
	{
		var Usermap = {};
		//no params so get all events
		event.find({}, (err, events) => {

			
			events.forEach( ev => {
				Usermap[ev.name] = ev
			})

			res.send(Usermap)

		})

	
	}
})

// Now post
 // create
router.post('/', (req,res) => {

		const newEvent = new event({
			name : req.body.name,
			start_date : req.body.start_date,
			end_date : req.body.end_date,
			info : 	req.body.info,
			sports : req.body.sports
			})
	newEvent
		.save()
		.then( event => res.json(event))
		.catch( err => console.log(err))

	
})

//modify
router.put('/:id', (req, res) => {
	const name = req.params.id
	event.findOneAndUpdate({name}, req.body, (err, doc) => {
		if(err){
			return res.status(500).json('error occured')
		}
		res.send('success!')
	})
}),

//delete:

router.delete('/:id', (req,res) => {
	const name = req.params.id
	event.findOneAndRemove({name}, (err,doc) => {
		if(err){
			return res.status(500).json('Error')
		}
		res.send('Success!')

	})
	// also delete all matches and associated sports and teams

})


module.exports = router








