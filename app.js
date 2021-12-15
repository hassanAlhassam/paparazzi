const express= require('express');

const app = express();

const bodyParser = require("body-parser");

const port =process.env.PORT || 3001; 


app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.send("good morning")
})


app.post("/user",(req,res)=>{
    console.log(req.body);
    res.send({name:'john'})
});

app.listen(port, ()=>{
    console.log("server is running on port 3000")
})
    


