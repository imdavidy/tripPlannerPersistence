const express = require('express');
const router = express.Router();

const Hotels = require('../../models').Hotel;
const Restaurants = require('../../models').Restaurant;
const Activities = require('../../models').Activity;


router.get('/', (req, res, next) =>{
  Hotels.findAll()
  .then(
    
  );

})
router.get('/restaurants', (req, res, next) =>{
  console.log('restaurant route');
})
router.get('/activities', (req, res, next) =>{
  console.log('activity route');
})

module.exports = router;
