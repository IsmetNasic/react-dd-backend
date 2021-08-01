const express = require('express');
const { check } = require('express-validator');
const adminsController = require('../controllers/admins-controllers');
const router = express.Router();


// router.get('/', adminsController.checkLoginData);

router.post('/login',[
    check('email').not().isEmpty(),
    check('password').not().isEmpty(),
  ], 
  adminsController.checkAdminLogin
  );


module.exports = router;