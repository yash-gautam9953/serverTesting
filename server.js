const express = require("express");
const server = express();
const User = require("./models/createUser.js");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require('method-override');



server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(methodOverride("_method"));
server.use(express.static(path.join(__dirname, "public")));

const mongo_path = "mongodb://127.0.0.1:27017/projectstudent";

database().then(() =>{
    console.log("Connected to database ");
    })
    .catch((err) => {
        console.log(err);
    });

async function database(){
    await mongoose.connect(mongo_path);
};


server.set("view engine", "ejs");
server.set("views",path.join(__dirname,"views"));



server.get("/home", (req,res) => {
    res.render("index.ejs");
});

server.get("/home/login" , (req,res) => {
    res.render("login.ejs");
});

server.post("/home",  async (req,res) =>{
    const newUser = new User(req.body.user);
    await newUser.save();
    res.redirect("/home");
});

server.post("/home/login" , (req,res) =>{
    const user = req.body.user;
    

});

server.listen(8000 , () => {
    console.log("Server is listening on port 8000");
});