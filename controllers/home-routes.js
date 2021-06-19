const router = require('express').Router();
const sequelize = require('../config/connection');

// get all posts for homepage
router.get('/', (req, res) => {
  
  res.render('homepage', {});
});


module.exports = router;
