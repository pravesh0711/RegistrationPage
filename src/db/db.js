const { error } = require('console');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/empdata')
.then(()=>{
    console.log('conneted');
})
.catch((err)=>{
    console.log(err);
})


