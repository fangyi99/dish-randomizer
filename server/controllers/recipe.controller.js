const Recipe = require('../models/recipe.model.js');

//create
const createRecipe = async (req, res) => {
    try{
        const recipe = await Recipe.create(req.body);
        res.status(200).json(recipe);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

//get all
const getRecipes = async (req, res) => {
    try{
        const recipes = await Recipe.find({});
        res.status(200).json(recipes);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

//get one by id
const getRecipe = async (req, res) => {
    try{
        const { id } = req.params;
        const recipe = await Recipe.findById(id);
        res.status(200).json(recipe);

    } catch(error){
        res.status(500).json({message: error.message});
    }
}

//update
const updateRecipe = async (req, res) => {
    try{
        const { id } = req.params;

        const recipe = await Recipe.findByIdAndUpdate(id, req.body);

        if(!recipe){
            return res.status(404).json({message: "Recipe not found"});
        }

        const updatedRecipe = await Recipe.findById(id);
        res.status(200).json(updatedRecipe);

    } catch(error){
        res.status(500).json({message: error.message});
    }
}

//delete
const deleteRecipe = async (req, res) => {
    try{
        const {id} = req.params;

        const recipe = await Recipe.findByIdAndDelete(id);

        if(!recipe){
            return res.status(404).json({message: "Recipe not found"});
        }

        res.status(200).json({message: "Recipe deleted successfully"});

    } catch(error){
        res.status(500).json({message: error.message});
    }
}


module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe
}