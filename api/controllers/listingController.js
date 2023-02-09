//controllers to be referenced from the router file of listings.js instead of hardcoding inside so its cleaner. aka get all, get id, post, delete
const Listing = require('../models/listingModel')
//import mongoose
const mongoose = require('mongoose')

//get all listings
const getAllListings = async(req, res)=>{
    //find and list all listings sorted in descending order based on time created
    const listings = await Listing.find({}).sort({createdAt: -1})
    //return code 200 and listings
    res.status(200).json(listings)
}
//get a single listing
const getListing = async(req, res)=>{
    //grab id from request parameters
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'ID invalid'})
    }
    //find listing by id
    const listing = await Listing.findById(id)
    //if workout doesn't exist return error code
    if(!listing) {
        return res.status(404).json({error: 'No listing found'})
    }

    res.status(200).json(listing)
}

//create new listing
const createListing = async(req, res)=>{
    //take these 3 variables from request body
    const {title, price, description} = req.body
    //add doc to db
    try {
        const listing = await Listing.create({title, price, description})
        res.status(200).json(listing)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}


//delete listings

//update a listing


//export 

module.exports = {
    getAllListings,
    getListing,
    createListing
}