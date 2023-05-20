const express = require("express");
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const createError = require('http-errors');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

const isLoggedIn = (req,res,next)=>{
    console.log("isLoggedin middleware is called....");
    const login = true;
    if(login){
        req.body.id = 1;
        next();
    }else{
        res.status(401).json({
            message:"User is not logged in"
        });
    }
};

app.get("/", (req, res) => {
    
    res.status(200).send({
        message: "Hello World!.wow!!!",
    });
});

// test 
app.get("/api/user",isLoggedIn, (req, res) => {
    console.log("api/user is called....");
    console.log(req.body.id)
    res.status(200).send({
        message: "User profile is returned",
    });
});

//client error handling
app.use((req,res,next)=>{
    next(createError(404,"route not found"));
});

//server error handling -> all the errors will be handled here
app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        message:err.message,
        success:false
    });
});

module.exports = app;