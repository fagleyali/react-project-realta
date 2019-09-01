const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    email:String,
    password:String
})


module.export=mongoose.model('User',userSchema);