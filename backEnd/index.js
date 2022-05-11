
const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');

const users = require("./routes/users");
const ablum = require("./routes/Album");
const photo = require("./routes/posts");

var cors = require('cors')

const app = express();      
app.use(cors())    
app.use(bodyParser.json());    
app.use(bodyParser.urlencoded({ extended: true }));    

app.use("api/user",users)
app.use("api/album",ablum)
app.use("api/photo",photo)

mongoose.connect("mongodb+srv://RituRandive:Rituritu@cluster0.lqpcg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        .then(()=>app.listen(5000))
        .then(()=>
        console.log("connected to database on port 5000"))
        .catch((err)=>console.log(err))