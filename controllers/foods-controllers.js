const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const HttpError = require('../models/http-error');
const Restaurant = require('../models/restaurant');
const Food = require('../models/food');


const getFoods = async (req, res, next) => {
  let foods;
  try {
    foods = await Food.find({});
  } catch (err) {
    const error = new HttpError(
      'Fetching foods failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ foods: foods.map(food => food.toObject({ getters: true })) });
}


const getFoodsByRestaurantId = async (req, res, next) => {
  const restaurantId = req.params.rid;

  let restaurantWithFoods;
  try {
    restaurantWithFoods = await Restaurant.findById(restaurantId).populate('food');
  } catch (err) {
    const error = new HttpError(
      'Fetching foods failed, please try again.',
      500
    );
    return next(error);
  }
  if (!restaurantWithFoods || restaurantWithFoods.food.length === 0) {
    return next(
      new HttpError('Could not find foods for the provided restaurant id.', 404)
    );
  }
  res.json({ food: restaurantWithFoods.food.map(food => food.toObject({ getters: true })) });
};


const createFood = async (req, res, next) => {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
  const { name, image, size, topping, creator } = req.body;

  const createdFood = new Food({
    name,
    image,
    size,
    topping,
    creator
    });
  
    let restaurant;
    try {
      restaurant = await Restaurant.findById(creator);
    } catch (err) {
      const error = new HttpError(
        'Creating food failed, please try again.',
        500
      );
      return next(error);
    }
  
    if (!restaurant) {
      const error = new HttpError('Could not find restaurant for provided id.', 404);
      return next(error);
    }
  
    console.log(restaurant);
  
    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await createdFood.save({ session: sess }); 
      restaurant.food.push(createdFood); 
      await restaurant.save({ session: sess }); 
      await sess.commitTransaction();
    } catch (err) {
      const error = new HttpError(
        'Creating food failed, please try again222.',
        500
      );
      return next(error);
    }
  
    res.status(201).json({ food: createdFood });
  };


const updateFood = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
  const { name, size, topping } = req.body;
  const foodId = req.params.fid;

  let food;
  try {
    food = await Food.findById(foodId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update food.',
      500
    );
    return next(error);
  }

  food.name = name;
  food.size = size;
  food.topping = topping;

  try {
    await food.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update food.',
      500
    );
    return next(error);
  }
  res.status(200).json({ food: food.toObject({ getters: true }) });
};


const deleteFood = async (req, res, next) => {
  const { foodId } = req.body;

  let food;
  try {
    food = await Food.findById(foodId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete food.',
      500
    );
    return next(error);
  }

  if (!food) {
    const error = new HttpError('Could not find food for this id.', 404);
    return next(error);
  }

  try {
    await food.delete();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete food.',
      500
    );
    return next(error);
  }
  res.status(200).json({ message: 'Deleted food.' });
};

exports.getFoodsByRestaurantId = getFoodsByRestaurantId;
exports.createFood = createFood;
exports.updateFood = updateFood;
exports.deleteFood = deleteFood;
exports.getFoods = getFoods;