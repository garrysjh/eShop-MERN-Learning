//import express 
const express = require('express')
//import workouts model
const Listing = require('../models/listingModel')
//import controllers for routing
const {
    getAllListings,
    getListing,
    createListing,
    deleteListing,
    updateListing
} = require('../controllers/listingController')
//invoke router
const router = express.Router()

//api endpoints
//get all item listings
router.get('/', getAllListings)

//get single listing
router.get('/:id', getListing)

//post a new listing
router.post('/', createListing)

//delete a listing
router.delete('/:id', deleteListing)

//update a listing
router.patch('/:id', updateListing)


module.exports = router