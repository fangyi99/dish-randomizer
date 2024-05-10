const express = require("express");
const Recipe = require('../models/recipe.model.js');
const router = express.Router();
const {getRecipes, getRecipe, createRecipe, updateRecipe, deleteRecipe} = require('../controllers/recipe.controller.js');

router.get('/', getRecipes);
router.get('/:id', getRecipe);
router.post('/', createRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

module.exports = router;