import {ref} from 'vue'
import { useRouter } from 'vue-router';

const getRecipes = () => {
    const state = ref({
        newName: '',
        newType: 'meat',
        newIngredients: '',
        newInstructions: '',
        newRemarks: '',
        recipes: {}
    })

    const router = useRouter();

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

    const updateRecipe = (_id) => {
        const requestOptions = {
            method: "PUT"
        }
        fetch("http://localhost:8000/api/recipes/" + _id, requestOptions)
    }

    const deleteRecipe = (_id) => {
        fetch("http://localhost:8000/api/recipes/" + _id, {method: "DELETE"})
        .then({})
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

    return {state, getAllRecipes, createRecipe, updateRecipe, deleteRecipe, resetForm}
}

export default getRecipes