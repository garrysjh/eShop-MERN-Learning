//import .env
require('dotenv').config()
//import express
const express = require('express')
//import route handlers
const itemListingRoutes = require('./routes/listings')
//import mongoose
const mongoose = require('mongoose')


//express app
const app = express()

//global middleware to log requests
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/listings',itemListingRoutes)

//connect to mongoose, promise after
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
// listen for request on port pulled from .env only after the database has been connected
app.listen(process.env.PORT, () => {
    console.log('Connected to DB, Listening on port', process.env.PORT)
})
    })
    .catch((error)=>{
        console.log(error)
    })

