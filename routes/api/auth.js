const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const User = require('../../models/User')

router.get('/', auth, (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
  } catch(err) {

  }
});

module.exports = router;
