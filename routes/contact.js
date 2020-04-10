const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Contact = require('../models/Contact');

//@route        GET api/contact
//@desc         Get all users contacts
//@access       Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(err.message);
    res.status(400).send('Server Error');
  }
});
//@route        POST api/contact
//@desc         Add new contact
//@access       Private
router.post('/', (req, res) => {
  res.send('Add contact');
});
//@route        PUT api/contact/:id
//@desc         Update contacts
//@access       Private
router.get('/:id', (req, res) => {
  res.send('Update contacts');
});
//@route        DELETE api/contact/:id
//@desc         Delete contacts
//@access       Private
router.get('/:id', (req, res) => {
  res.send('Delete contacts');
});

module.exports = router;
