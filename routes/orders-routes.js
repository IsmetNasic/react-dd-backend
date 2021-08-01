const express = require('express');
const { check } = require('express-validator');

const ordersControllers = require('../controllers/orders-controllers');

const router = express.Router();

router.post(
  '/',
  [
    check('name').not().isEmpty(),
    check('phone').isLength({ min: 6 }),
    check('address').not().isEmpty(),
    // check('order')
  ],
  ordersControllers.createOrder
);


module.exports = router;