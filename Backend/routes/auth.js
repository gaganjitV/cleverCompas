const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../Models/user');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET|| 'mysecretsshhhhh';

// Register Route
router.post('/register', async (req, res) => {
  const {name, email, password, age, role } = req.body;

  try {
    //checking if email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    //the password is being hashed in the models users I have a pre functions that does that before saving the user

    //Creating new user
    const newUser = new User({name, email, password, age, role });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

      //This is where we are Verifying the passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT ->>>>> get back to thisssss
    const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, JWT_SECRET, {
      expiresIn: '1h',
    });



    res.json({ message: 'Login successful', token, role: user.role });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});






module.exports = router;
