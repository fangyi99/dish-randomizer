require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const Recipe = require('./models/recipe.model.js');
const recipeRoutes = require('./routes/recipe.route.js');
const app = express();

var cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/api/recipes", recipeRoutes);

const port = process.env.PORT || process.env.PROD_PORT;
app.listen(port, ()=>{
    console.log('Server is running on port ' + port);
})

mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log("Connected to MongoDB!");
}).catch(()=>{
    console.log("Connection to MongoDB failed!");
})

