const express = require('express');
const app = express();

//import mongoose config
const mongoose = require('./database/mongoose');

//port, callback
//start an application
app.listen(5000, () => {
    console.log("Server Started on port 5000");
})

