const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const HttpError = require('./models/http-error');
const restaurantsRoutes = require('./routes/restaurants-routes');
const foodsRoutes = require('./routes/foods-routes');
const ordersRoutes = require('./routes/orders-routes');
const adminRoutes = require('./routes/admin-routes');


const app = express();
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });

  let showdate=new Date();
  let dtdt=showdate.toDateString();

  if(showdate.getHours() > 9 && showdate.getHours() < 21 || dtdt[0] != "s" && dtdt[1] != "u") {
    app.use('/api/orders', ordersRoutes);
  }
  app.use('/api/foods', foodsRoutes);
  app.use('/api/restaurants', restaurantsRoutes);
  app.use('/api/admin', adminRoutes);
  
  app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
  });
  
  app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
  });
  
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pmgzx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      app.listen(5000);
    })
    .catch(err => {
      console.log(err);
    });
  
    mongoose.set('useCreateIndex', true);





    // [
    //   {
    //     name: 'Novi Burger',
    //     image: '/images/pexels-burger.jpg',
    //     id: '60d6f9a9f0aba035749c4ef51',
    //     size: [ [Array], [Array] ],
    //     chosenSize: 'velika 6 KM',
    //     chosenTopping: [ '' ]
    //   }
    // ]