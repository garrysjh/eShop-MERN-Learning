//import .env
require('dotenv').config()
//import express
const express = require('express')
//import route handlers
const itemListingRoutes = require('./routes/listings')


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

// listen for request on port pulled from .env
app.listen(process.env.PORT, () => {
    console.log('Listening on port 4000')
})