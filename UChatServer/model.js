const mongoose = require('mongoose');

let Registeruser = new mongoose.Schema({
    UserName :{
        type : String,
        required : true,
    },
    Email :{
        type : String,
        required : true, 
        unique : true,
    },
    Password :{
        type : String,
        required : true,
    },
    ConfirmPassword :{
        type :String,
        required : true,
    }
})

module.exports = mongoose.model('Registeruser',Registeruser)