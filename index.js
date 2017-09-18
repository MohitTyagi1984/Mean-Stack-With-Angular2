const express = require('express')
const app = express()

const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
mongoose.promise=global.promise;
mongoose.connect(config.uri, (err)=>{
if(err){
  console.log("could not connect to database " + config.db);
}
else{
  console.log("Connected to database " + config.db);  
}
});
app.use(express.static(__dirname+'/client/dist/'))
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname+'/client/dist/index.html'));
})

app.listen(8080, function () {
  console.log('Example app listening on port 8000!')
})