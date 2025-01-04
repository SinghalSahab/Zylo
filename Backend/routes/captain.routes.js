const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const captainController = require('../controllers/captain.controller');

router.post('/register',[
    body('fullname.firstname').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Vehicle color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 4 }).withMessage('Vehicle plate number must be at least 4 digits long'),
    body('vehicle.capacity').isLength({ min: 1 }).withMessage('Vehicle capacity must be more that one'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle type must be either car, motorcycle or auto')
],
    captainController.registerCaptain
)




module.exports = router;