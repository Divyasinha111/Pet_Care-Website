const express = require('express');
const router = express.Router();
const pets = require('../data/pets.json');

router.get('/', (req, res) => {
  res.json(pets);
});

module.exports = router;
