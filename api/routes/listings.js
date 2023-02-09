//import express 
const express = require('express')
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
router.post('/post', (req, res)=>{
    res.json({msg: 'POST a listing'})
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