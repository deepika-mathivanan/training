var express= require('express')
var app=express()
const port=3001;
app.listen(port,()=>{
    console.log(`welcome to backend server\nurl: http://localhost:${port}`)
})
app.get('/',(req,res)=>{
    res.send("welcome to backend server")
})
app.get('/static',(req,res)=>{
    res.sendFile('C:/Users/deepi/OneDrive/Desktop/TRAINING/projectbackend/index.html')
})
app.get('/json',(req,res)=>{
    res.json({server:"welcome to backend server",url:"localhost",port:port})
})
