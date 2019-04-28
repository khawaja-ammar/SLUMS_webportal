const express = require('express')
const router = express.Router()
const event = require("../../models/events")
const sports = require("../../models/sports")


// need to use both name and category as PK.....


//Currently given event name we can get its sports
router.get('/:id/:sportid?', (req, res) => {

	const name = req.params.id
	event.findOne({name}).then( ev => {
		if(!ev){
			return res.status(400).json({namenotfound: "No sport found by that id!", name})
		}
		const sportid = req.params.sportid
		const allSports = ev.sports
		if(!sportid){
			return res.send(allSports)
		}
		allSports.find( sp => {
			if(sp._id == sportid){
				res.send(sp)

			}
		})

	})
	
})

// Now post
 // create sports of an event....
router.post('/:id', (req,res) => {

	const name = req.params.id
	event.findOne({name}).then( event => {
		if(!event){
			return res.status(400).json({namenotfound: "No event found by that name!", name})
		}
		else
		{
			const newsport = new sports({
				name : req.body.params.name,
				category : req.body.params.category

			})
			event.sports.push(newsport)
			event
			.save()
			.then(s => res.send(s))
			.catch(err => res.status(400).send(err))
	

			
		}
	})
	
})

//modify exisiting sport of event.....
router.put('/:id/:sportid', (req, res) => {
	const name = req.params.id
	var found = false
	event.findOne({name}).then( event => {
		if(!event){
			return res.status(400).json({namenotfound: "No event found by that name!", name})
		}
		else{
			event.sports.find( sport => {

				if(sport._id == req.params.sportid){
					found = true
					if(req.body.params.name){
						sport.name = req.body.params.name
						
					}
					if(req.body.params.category){
						sport.category = req.body.params.category
					}
					if(req.body.params.matches){
						sport.matches = req.body.params.matches
					}
					event
					.save()
					.then(sport => res.send(sport))
					.catch(err => res.status(400).send(err))
					return
					
				}
			})
			if(!found){
			return res.status(400).json({error:"Error: no sports of that category or name"})			
			}
		}
	})
	
})

//delete:

router.delete('/:id/:sportid', (req,res) => {
	const name = req.params.id
	event.findOne({name}).then( event => {
		if(!event){
			return res.status(400).json({namenotfound: "No event found by that name!", name})
		}
		else{
				event.sports.splice(event.sports.findIndex(e => e._id === req.params.sportid),1)
				event.
				save()
				.then(event => res.send(event))
				.catch(err => res.status(400).send(err))
		}
	})
	
})


module.exports = router