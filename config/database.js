const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/realta',{useNewUrlParser:true});

mongoose.connection.on('connected',function(){
    console.log(`mongodb connected to port: ${mongoose.connection.port} and host: ${mongoose.connection.host}`);

})





