const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const HttpError = require('../models/http-error');

const checkAdminLogin = async (req, res, next) => {
    const { email, password } = req.body;
    let loginMode = false;

    if(email == "ismet_nasic@hotmail.com" && password == process.env.DB_PASSWORD){
        loginMode = true;
        res.json({ loginMode: true });
    } else {
        loginMode = false;
    }
};



exports.checkAdminLogin = checkAdminLogin;
