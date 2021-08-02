const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const HttpError = require('./models/http-error');
const restaurantsRoutes = require('./routes/restaurants-routes');
const foodsRoutes = require('./routes/foods-routes');
const ordersRoutes = require('./routes/orders-routes');
const adminRoutes = require('./routes/admin-routes');

const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join('public')));

  let showdate=new Date();
  let dtdt=showdate.toDateString();

  if(showdate.getHours() > 9 && showdate.getHours() < 21 || dtdt[0] != "s" && dtdt[1] != "u") {
    app.use('/api/orders', ordersRoutes);
  }
  app.use('/api/foods', foodsRoutes);
  app.use('/api/restaurants', restaurantsRoutes);
  app.use('/api/admin', adminRoutes);

  app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
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
      app.listen(process.env.PORT || 5000);
    })
    .catch(err => {
      console.log(err);
    });
  
    mongoose.set('useCreateIndex', true);