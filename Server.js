

const {MongoClient} = require('mongodb');
const express = require("express");
const app = express();
const cors = require("cors");
const e = require('express');

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())


const uri = "mongodb+srv://MerubS:3467Shaikh@cluster0.9jct5.mongodb.net/?retryWrites=true&w=majority"
global.client = new MongoClient(uri);

app.post("/start", async (req, res) => {
	let { message } = req.body
    try{
        await client.connect()
        console.log("MongoDB Server Connected Successfully!!")
    }
    catch(e){
        console.log(e)
    }
	console.log(message);

    res.send("All Connections Established!!")
})


app.post("/sendData", async (req, res) => {
	let {logincred} = req.body
    // console.log(logincred['email'],logincred['pass'])
    // res.send('Success')
    try{
    usr = await client.db("Assessment_Portal").collection("Users").findOne({ $and: [ {Email : logincred['email']}, {Password : logincred['pass']} ]})
    console.log(usr);
    }
    catch(e){
        console.log(e)
    }
    if (usr != null){
        console.log("User logged in")
        res.send("Success")
    }
    else{
        res.send("User Not Found")
    }
    
    
})

app.get("/getQuestions", async (req, res) => {

    var ques

    try{
    ques = await client.db("Assessment_Portal").collection("Question").find({}).toArray();
  
    }
    catch(e){
        console.log(e)
    }
    if (ques != null){
        console.log("Questions Fetched")
        res.send(ques)
    }
    else{
        console.log("Question fetch failed")
        res.send("Failed")
    }
    
    
})