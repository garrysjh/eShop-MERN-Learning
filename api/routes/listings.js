//import express 
const express = require('express')
//import workouts model
const Listing = require('../models/listingModel')
//invoke router
const router = express.Router()

//api endpoints
//get all item listings
router.get('/', (req, res) =>{
    res.json({msg: "GET all workouts"})
})

//get single listing
router.get('/:id', (req, res) => {
    res.json({msg: 'GET a single listing'})
})

//post a new listing
router.post('/post', async (req, res)=>{
    const {title, price, description} = req.body

    try {
        const listing = await Listing.create({title, price, description})
        res.status(200).json(listing)
    } catch(error){
        res.status(400).json({error: error.message})
    }
})

//delete a listing
router.delete('/:id', (req, res)=>{
    res.json({msg: 'DELETE a listing'})
})

//update a listing
router.patch('/:id', (req, res)=>{
    res.json({msg: 'MODIFY a listing'})
})
module.exports = router