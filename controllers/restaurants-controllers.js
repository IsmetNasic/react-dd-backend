
const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const Restaurant = require('../models/restaurant');
const schedule = require('node-schedule');


const getRestaurants = async (req, res, next) => {
    let restaurants;
  try {
    restaurants = await Restaurant.find({});
  } catch (err) {
    const error = new HttpError(
      'Fetching restaurants failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ restaurants: restaurants.map(restaurant => restaurant.toObject({ getters: true })) });
};


const createRestaurants = async (req, res, next) => {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { name, email, image } = req.body;

  const createdRestaurant = new Restaurant({
    name,
    email,
    image,
    AOCounter: 0,
    MOCounter: 0,
    food: []
  });

  try {
    await createdRestaurant.save();
  } catch (err) {
    const error = new HttpError(
      'Creating restaurant failed, please try again.',
      500
    );
    return next(error);
  }
  res.status(201).json({ restaurant: createdRestaurant.toObject({ getters: true })});
};


const updateRestaurant = async (req, res, next) => {
  const {updateName, updateEmail, updateImage, updateRestaurantId } = req.body;
  let restaurant;
  try{
    restaurant = await Restaurant.findById(updateRestaurantId);
  } catch(err) {
    const error = new HttpError(
      'Something went wrong, could not update restaurant.', 500
    );
    return next(error);
  }
  
  restaurant.name = updateName;
  restaurant.email = updateEmail;
  restaurant.image = updateImage;

  try { 
    await restaurant.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update restaurant', 500
    );
    return next(error);
  }
  res.status(200).json({restaurant : restaurant.toObject({ getters: true }) });
};


const deleteRestaurant = async (req, res, next) => {
  const { restaurantId } = req.body;

  let restaurant;
  try {
    restaurant = await Restaurant.findById(restaurantId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete restaurant.',
      500
    );
    return next(error);
  }

  if (!restaurant) {
    const error = new HttpError('Could not find restaurant for this id.', 404);
    return next(error);
  }

  try {
    await restaurant.delete();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete restaurant.',
      500
    );
    return next(error);
  }
  res.status(200).json({ message: 'Deleted restaurant.' });
}


const updateCounterRest = async (req, res, next) => {
  const { restaurantId } = req.body;

  
  let restaurant;
  try{
    restaurant = await Restaurant.findById(restaurantId.replace(/['"]+/g, ''));
  } catch(err) {
    const error = new HttpError(
      'Something went wrong, could not update counter.', 500
    );
    return next(error);
  }

  try {
    restaurant.MOCounter += 1;
    restaurant.AOCounter += 1;
    await restaurant.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update counter', 500
    );
    return next(error);
  }
  res.status(200).json({restaurant : restaurant.toObject({ getters: true }) });
}


const job = schedule.scheduleJob('0 0 1 * *', function(){
  resetMOCounter();
});

const resetMOCounter = async (req, res, next) => {
  let restaurants;
  try {
    restaurants = await Restaurant.find({});
  } catch (err) {
    const error = new HttpError(
      'Fetching restaurants failed, please try again later.',
      500
    );
    return next(error);
  }
  restaurants.map(async (restaurant) => {
      restaurant.MOCounter -= restaurant.MOCounter;
      await restaurant.save();
  });
}


exports.updateCounterRest = updateCounterRest;
exports.updateRestaurant = updateRestaurant;
exports.deleteRestaurant = deleteRestaurant;
exports.getRestaurants = getRestaurants;
exports.createRestaurants = createRestaurants;
// exports.resetMOCounter = resetMOCounter;