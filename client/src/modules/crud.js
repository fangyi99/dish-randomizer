import {ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const getRecipes = () => {
    const state = ref({
        name: '',
        type: 'meat',
        ingredients: '',
        instructions: '',
        remarks: '',
        recipes: {},
    })

    const route = useRoute();
    const router = useRouter();

    const recipeId = computed(() => route.params.id)

    const getOne = async (id) => {
        try {
          await fetch("http://localhost:8000/api/recipes/" + id)
            .then(res =>  res.json() ) 
            .then(data => {
                state.value.newName = data.name;
                state.value.newType = data.type;
                state.value.newIngredients = data.ingredients;
                state.value.newInstructions = data.instructions;
                state.value.newRemarks = data.remarks;
            })
        }
        catch(error) {
          console.log(error)
        }
    }

    const getAllRecipes = async () => {
        try{
            await fetch("http://localhost:8000/api/recipes")
            .then(res => res.json())
            .then(data => {
                state.value.recipes = data
            })
        }
        catch(err){
            console.log(err)
        }
    }

    const createRecipe = () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: state.value.newName,
                type: state.value.newType,
                ingredients: state.value.newIngredients,
                instructions: state.value.newInstructions,
                remarks: state.value.newRemarks
            })
        }
        fetch("http://localhost:8000/api/recipes", requestOptions)
        .then(()=> {
            resetForm();
            router.push({path: "/menu"});
        })
        .catch(err => {
            console.error('Error:', err);
          });
    }

    const updateRecipe = () => {
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: state.value.newName,
                type: state.value.newType,
                ingredients: state.value.newIngredients,
                instructions: state.value.newInstructions,
                remarks: state.value.newRemarks
            })
        }
        fetch("http://localhost:8000/api/recipes/" + recipeId.value, requestOptions)
        .then(res => res.body)
        .then(res => {console.log(res)})
        router.push({path: "/menu"})
    }

    const deleteRecipe = (_id) => {
        fetch("http://localhost:8000/api/recipes/" + _id, {method: "DELETE"})
        .then(() => {
            getAllRecipes()
        })
    }

    const resetForm = () => {
        state.value = {
          newName: '',
          newType: 'meat',
          newIngredients: '',
          newInstructions: '',
          newRemarks: '',
        };
    };

    return {state, recipeId, getOne, getAllRecipes, createRecipe, updateRecipe, deleteRecipe, resetForm}
}

export default getRecipes