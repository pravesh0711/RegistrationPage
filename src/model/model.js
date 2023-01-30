const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    name: {
        type:String,
        require : true
    },
    email:{
        type: String,
        require:true,
        unique: true
    },
    phone:{
        type : Number,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require:true,

    },
    cpassword:{
        type: String,
        require: true
    }

});

const empcoll = new mongoose.model('empcollection',empSchema);
module.exports = empcoll;