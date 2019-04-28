const express = require('express')
const router = express.Router()
const team = require("../../models/team")


//Get Teams: default get all teams of event, get all teams of event of sport
router.get('/:id/:sportid?', (req,res) => {

	var teamList = []
	if(req.params.sportid){
		const id = req.params.sportid
		team.find({sportsID:id}, (err,teams) => {
			if(err){
				return res.status(400).send(err)
			}
			teams.forEach( temp => {
				teamList.push(temp)
			})
			res.send(teamList)
		})
	}
	else{
		const id = req.params.id
		team.find({eventName:id}, (err,teams) => {
			if(err){
				return res.status(400).send(err)
			}
			teams.forEach( temp => {
				teamList.push(temp)
			})
			res.send(teamList)
		})
	}
})

//Create Teams
router.post('/', (req,res) =>{
	const newTeam = new team({
		name: req.body.params.name,
		eventName: req.body.params.eventName,
		sportsID: req.body.params.sportsID
	})
	newTeam
	.save()
	.then(Team => res.send(Team))
	.catch(err => res.status(400).send(err))

})

//Modify Teams
router.put('/:id', (req,res) =>{
	const name = req.params.id
	team.findOneAndUpdate({_id:name}, req.body.params, (err, doc) => {
		if(err){
			return res.status(400).json('error occured')
		}
		res.send('success!')
	})

})

//Delete Teams
router.delete('/:id', (req,res) =>{
	const name = req.params.id
	team.findOneAndRemove({_id:name}, (err,doc) => {
		if(err){
			return res.status(400).json('Error')
		}
		res.send('Success!')

	})

})

module.exports = router