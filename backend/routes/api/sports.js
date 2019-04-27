const express = require('express')
const router = express.Router()
const event = require("../../models/events")
const sports = require("../../models/sports")


// need to use both name and category as PK.....


//Currently not using this as there are some questions we need to ask....
router.get('/:id/:sportid?', (req, res) => {

	const name = req.params.id
	event.findOne({name}).then( ev => {
		if(!ev){
			return res.status(400).json({namenotfound: "No sport found by that name!", name})
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
	//	res.send(allSports)

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
				name : req.body.name,
				category : req.body.category

			})
			event.sports.push(newsport)
			res.json(newsport)
			event.save()

	

			
		}
	})
	
})

//modify exisiting sport of event.....
router.put('/:id/:sportname/:sportcategory', (req, res) => {
	const name = req.params.id
	var found = false
	event.findOne({name}).then( event => {
		if(!event){
			return res.status(400).json({namenotfound: "No event found by that name!", name})
		}
		else{
			event.sports.forEach( sport => {

				if(sport.name == req.params.sportname && sport.category == req.params.sportcategory){
					found = true
					if(req.body.name){
						sport.name = req.body.name
						
					}
					if(req.body.category){
						sport.category = req.body.category
					}
					if(req.body.matches){
						sport.matches = req.body.matches
					}
					event.save()
					res.send(sport)
					
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

router.delete('/:id/:sportname/:sportcategory', (req,res) => {
	const name = req.params.id
	event.findOne({name}).then( event => {
		if(!event){
			return res.status(400).json({namenotfound: "No event found by that name!", name})
		}
		else{
				event.sports.splice(event.sports.findIndex(e => e.name === req.params.sportname && e.category === req.params.sportcategory),1)
				event.
				save()
				res.send(event)
		}
	})
	
})


module.exports = router