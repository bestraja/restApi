const express=require("express")  
const app=express()
require("dotenv").config()
const port=process.env.PORT
const connectdb=require("./config/connectDB")
const RoutesUser=require('./route/route')
connectdb()

app.use('/api/user',RoutesUser)
app.use(function(req, res, ){
      res.status(404).send('not found!')})

app.listen(port, function(){
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  });
