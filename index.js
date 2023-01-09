const express = require('express');

const app = express();


const router = express.Router();

app.get('/',function(req,res){
     return res.send('<h1>hi you are on demo page</h1>');
});



app.listen(process.env.PORT ||8000, function(err){
    if(err){
        console.log('error:',err);
    }
   console.log('server is running on :',8000);
});