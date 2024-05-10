const express = require("express");
const mongoose = require('mongoose');
const Recipe = require('./models/recipe.model.js');
const recipeRoutes = require('./routes/recipe.route.js');
const app = express();

var cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/api/recipes", recipeRoutes);


var CONNECTION_STRING = "mongodb+srv://looifangyi:GqSRIzxt3FW90uAg@cluster0.geyxgdq.mongodb.net/Recipe-Randomizer?retryWrites=true&w=majority&appName=Cluster0";

app.listen(8000, ()=>{
    console.log('Server is running on port 8000');
})

mongoose.connect(CONNECTION_STRING).then(()=>{
    console.log("Connected to MongoDB!");
}).catch(()=>{
    console.log("Connection to MongoDB failed!");
})

