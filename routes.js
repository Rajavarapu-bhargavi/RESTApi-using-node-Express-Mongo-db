const express = require('express');
const router = express.Router();
const Model = require('../model/model');

// Post Method
router.post('/post', async (req, res) => {
  console.log('POST request received at /api/post');
  const data = new Model({
    name: req.body.name,
    age: req.body.age
  });

  try {
    const dataToSave = await data.save();
    console.log(dataToSave);
    res.status(200).json(dataToSave);  // Send back the saved data
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Method
router.get('/getAll', async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get One by ID Method
router.get('/getOne/:id', async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update by ID Method
router.patch('/update/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    if (!result) {
      return res.status(404).json({ message: 'Data not found' });
    }

    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }

    res.send(`Document with ${data.name} has been deleted.`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
