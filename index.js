const express = require('express');

const app = express();

app.listen(process.env.PORT ||8000, function(err){
    if(err){
        console.log('error:',err);
    }
   console.log('server is running on :',8000);
});