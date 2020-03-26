const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

//@route        POST api/users
//@desc         Register users
//@access       Public
router.post(
  '/',
  [
    check('name', 'Please')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    res.send(req.body);
  }
);

module.exports = router;
