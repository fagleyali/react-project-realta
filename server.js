const express = require('express');

const path = require ('path');

const logger = require('morgan');

const favicon =  require ('serve-favicon');


const app = express();


app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname,'build','favicon.ico')));
app.use(express.static(path.join(__dirname,'build')));

//API routes here


//Catch all routes
app.use('/*',function(req,res){
    res.sendFile(path.join(__dirname,'build','index.html'))
})

const port = process.env.PORT || 3030;

app.listen(port,function(){
    console.log(`Express app running on port: ${port}`)
})

