const express = require('express');
const { check } = require('express-validator');
const foodsController = require('../controllers/foods-controllers');
const router = express.Router();


router.get('/', foodsController.getFoods);

router.get('/:rid', foodsController.getFoodsByRestaurantId);

router.post(
  '/create',
  [
    check('name').not().isEmpty(),
    check('size').not().isEmpty(),
    check('topping').not().isEmpty(),
  ],
  foodsController.createFood
);

router.patch(
  '/:fid',
  [
    check('name').not().isEmpty(),
    check('size').not().isEmpty(),
    check('topping').not().isEmpty(),
  ],
  foodsController.updateFood
);

router.delete('/delete', foodsController.deleteFood);

module.exports = router;