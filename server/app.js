import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();
const app=express();
const PORT=process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/api",(req,res)=>{
   res.status(200).json({message:"Hello World"});
})

app.listen(PORT,()=>{
    console.log('App is Listening on PORT', PORT);
})