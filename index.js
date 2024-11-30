const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://bhargavi:Bhargavi@cluster0.cyjss.mongodb.net/')
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://bhargavi:Bhargavi@cluster0.cyjss.mongodb.net/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB Atlas connection error:', err));

require('dotenv').config();

const express = require('express');
const app = express();
const router=require('./routes/routes');
app.use(express.json());
app.use('/api',router);
app.listen(3000, () => {
  console.log(`Server Started at ${3000}`)
})


// Load environment variables
// require('dotenv').config();

// // Import necessary modules
// const mongoose = require('mongoose');
// const express = require('express');
// const app = express();

// // MongoDB Atlas connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB Atlas'))
//   .catch(err => console.error('MongoDB Atlas connection error:', err));

// // Middleware to parse JSON
// app.use(express.json());

// // Import routes and use them
// const router = require('./routes/routes');
// app.use('/api', router);

// // Start the server
// app.listen(3000, () => {
//   console.log(`Server Started at http://localhost:3000`);
// });
