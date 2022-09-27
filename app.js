const express = require('express')
const path = require('path')
const app = express()

app.get("/red",(req,res)=>{
     
  res.sendFile(path.join(__dirname, '/red.html'))
     
})

app.get("/yellow",(req,res)=>{
     
    res.sendFile(path.join(__dirname, '/yellow.html'))
       
  })

  app.get("/white",(req,res)=>{
     
    res.sendFile(path.join(__dirname, '/white.html'))
       
  })  
  app.get("/green",(req,res)=>{
     
    res.sendFile(path.join(__dirname, '/green.html'))
       
  })  
app.listen(3000,()=>{


    console.log('Server is listening at port:3000')
})