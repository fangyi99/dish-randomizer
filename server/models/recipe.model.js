const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        ingredients:{
            type: String,
            required: false
        },
        steps:{
            type: String,
            required: false
        },
        remarks:{
            type: String,
            required: false
        },
        type:{
            type: String,
            required: true
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