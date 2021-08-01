const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const HttpError = require('../models/http-error');
const Order = require('../models/order');
const Restaurant = require('../models/restaurant');


const getOrderById = async (req, res, next) => {
  const orderId = req.params.pid;

  let order;
  try {
    order = await Order.findById(orderId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a order.',
      500
    );
    return next(error);
  }

  if (!order) {
    const error = new HttpError(
      'Could not find order for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ order: order.toObject({ getters: true }) });
};

const createOrder = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { name, phone, address, foodOrder, total, restaurantId } = req.body;

  const createdOrder = new Order({
    name,
    phone,
    address,
    foodOrder,
    total
  });


  let foToString = foodOrder.map( function ( el ){
    return el['name'] + ": " + el['chosenSize'] + ": " + el['chosenTopping'] + ". ";
  })

  let restId;
  try {
    restId = await Restaurant.findById(restaurantId.replace(/['"]+/g, ''));
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find restaurant.',
      500
    );
    return next(error);
  }

  if (!restId) {
    const error = new HttpError(
      'Could not find restaurant for the provided id.',
      404
    );
    return next(error);
  }

  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'blackeightx@outlook.com',
      pass: 'is8er2mi12rex'
    }
  });
  
  const mailOptions = {
    from: 'blackeightx@outlook.com',
    to: restId.email,
    subject: 'Dub-Donesi',
    text: (name.toString() + ": " + address.toString() + ": " + phone.toString() + ": " + foToString.toString())
  };

  try {
    await createdOrder.save();
  } catch (err) {
    const error = new HttpError(
      'Creating order failed, please try again.',
      500
    );
    return next(error);
  }
  res.status(201).json({ order: createdOrder });
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};


exports.getOrderById = getOrderById;
exports.createOrder = createOrder;