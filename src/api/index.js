const express = require('express');

const instagram = require('./instagram');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/ig', instagram);

module.exports = router;
