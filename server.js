const express = require("express");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://user:firsttestdb@cluster0.lcuhmx9.mongodb.net/')
.then(()=>console.log('MongoDB 가 연결'))
.catch(()=>console.log('failed')) 

app.use(cors());

app.get('/api', (req, res)=>{
    res.send({message:'hello'});
});

server.listen(8080, ()=>{
    console.log('server is running on 8080');
});
