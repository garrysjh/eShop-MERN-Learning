//import express 
const express = require('express')
//import workouts model
const Listing = require('../models/listingModel')
//import controllers for routing
const {
    getAllListings,
    getListing,
    createListing
} = require('../controllers/listingController')
//invoke router
const router = express.Router()

//api endpoints
//get all item listings
router.get('/', getAllListings)

//get single listing
router.get('/:id', getListing)

//post a new listing
router.post('/post', createListing)

//delete a listing
router.delete('/:id', (req, res)=>{
    res.json({msg: 'DELETE a listing'})
})

//update a listing
router.patch('/:id', (req, res)=>{
    res.json({msg: 'MODIFY a listing'})
})
module.exports = router