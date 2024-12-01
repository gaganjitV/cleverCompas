const express = require('express');
const authMiddleware = require('../middleware/authMiddleware'); // Import the authentication middleware
const User = require('../Models/user'); // Import the User model

const router = express.Router();

// Protected Profile Route - Geting User Profile
// using the authMIddleware basscialt makes sure the request coming from is a logged in users 
router.get('/user', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude the password
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;
