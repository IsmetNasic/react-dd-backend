const express = require('express');
const { check } = require('express-validator');
const restaurantsController = require('../controllers/restaurants-controllers');
const router = express.Router();


router.get('/', restaurantsController.getRestaurants);


router.post(
  '/',
  [
    check('name').not().isEmpty(),
    check('email').isLength({ min: 6 }),
    check('image').not().isEmpty(),
  ],
  restaurantsController.createRestaurants
);


router.patch('/update', 
[
  check('name').not().isEmpty(),
  check('email').not().isEmpty(),
  check('image').not().isEmpty(),
  check('food').not().isEmpty(),
],
restaurantsController.updateRestaurant);


router.patch('/counter', restaurantsController.updateCounterRest);


// router.patch('/reset', restaurantsController.resetMOCounter);


router.delete('/delete', restaurantsController.deleteRestaurant);

module.exports = router;