const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"first name must be atleast 3 characters long"],

        },
        lastname:{
            type:String,
            minlength:[3,"last name must be atleast 3 characters long"],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,"email must be atleast 5 characters long"],
    },
    password:{
        type:String,
        required:true,
    }
    socketId: {
        type: String,
    },

});

user
