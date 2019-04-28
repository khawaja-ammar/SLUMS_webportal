const express = require('express')
const router = express.Router()
const event = require("../../models/events")
const sports = require("../../models/sports")
const match = require("../../models/match")
const team = require("../../models/team")

// Scheduler :

router.post('/', (req,res) => {
	//here write the function to get matches
})