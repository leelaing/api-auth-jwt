require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Import Routes
const authRoute = require('./routes/auth')
const postsRoute = require('./routes/posts')

// Middleware
app.use(express.json())

// Routes
app.use('/api/user', authRoute)
app.use('/api/posts', postsRoute)


// Connect to MongoDB Database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, () => {
  console.log('Connected to DB')
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port ${process.env.PORT}`)
})
