const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        type:{
            type: String,
            required: true
        },
        ingredients:{
            type: String,
            required: false
        },
        instructions:{
            type: String,
            required: false
        },
        remarks:{
            type: String,
            required: false
        },
        thumbnail:{
            type: String,
            required: false
        }

    },
    {
        timestamps: true,
    }
);

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;