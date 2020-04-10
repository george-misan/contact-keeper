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
router.post(
  '/',
  [auth, [check('name', 'Name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save(); //save in db

      res.json(contact);
    } catch (error) {
      console.error(err.message);
      res.status(400).send('Server Error');
    }
  }
);
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
