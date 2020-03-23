const express = require('express');
const router = express.Router();

//@route        GET api/contact
//@desc         Get all users contacts
//@access       Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
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
