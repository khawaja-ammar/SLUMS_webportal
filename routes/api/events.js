const express = require('express')
const router = express.Router()
const event = require("../../models/events")

//possible interactions at event : create, modify, delete, or just get event

//first check the possible inputs are indeed correct:

//const validateDeleteEvent = require('../../validation/deleteEvent')
//const validatemodifyEvent = require('../../validation/modifyEvent')
//const validatecreateEvent = require('../../validation/createEvent')

// First GET 
// default should be ongoing event...... modify
//currently gets all events
router.get('/:id?', (req, res) => {
	console.log('WTH')
	const name = req.params.id
	if(name){
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

			if(err){
				return res.status(400).send(err)
			}
			events.forEach( ev => {
				Usermap[ev.name] = ev
			})

			res.send(Usermap)

		})

	
	}
})

// Now post
 // create event
router.post('/', (req,res) => {

		const newEvent = new event({
			name : req.body.params.name,
			start_date : req.body.params.start_date,
			end_date : req.body.params.end_date,
			info : 	req.body.params.info,
			sports : req.body.params.sports
			})
	newEvent
		.save()
		.then( event => res.json(event))
		.catch( err => res.status(400).send(err))

	
})

//modify should be able to modify only events , if modification is of sports or matches then call next middleware function
router.put('/:id', (req, res) => {
	const name = req.params.id
	event.findOneAndUpdate({name}, req.body.params, (err, doc) => {
		if(err){
			return res.status(400).send('error occured')
		}
		res.send('success!')
	})
}),

//delete: will delete everything..... also need to delete teams.....

router.delete('/:id', (req,res) => {
	const name = req.params.id
	event.findOneAndRemove({name}, (err,doc) => {
		if(err){
			return res.status(400).send('Error')
		}
		res.send('Success!')

	})
	// also delete all matches and associated sports and teams

})


module.exports = router
