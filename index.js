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
