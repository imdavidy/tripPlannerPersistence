const express = require('express');
const router = express.Router();

const Hotel = require('../../models').Hotel
const Restaurant = require('../../models').Restaurant;
const Activity = require('../../models').Activity;



router.get('/hotels', (req, res, next) =>{
  Hotel.findAll()
  .then(hotels => res.json(hotels))
  .catch(next)
//    res.send(Object.keys(Hotels))
})

router.get('/restaurants', (req, res, next) =>{
    Restaurant.findAll()
  .then(restaurants => res.json(restaurants))
  .catch(next)
})

router.get('/activities', (req, res, next) =>{
    Activity.findAll()
  .then(activities => res.json(activities))
  .catch(next)
})

module.exports = router;
