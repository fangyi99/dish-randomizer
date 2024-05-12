import {ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const getRecipes = () => {
    const state = ref({
        id: '',
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
                state.value.name = data.name;
                state.value.type = data.type;
                state.value.ingredients = data.ingredients;
                state.value.instructions = data.instructions;
                state.value.remarks = data.remarks;
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
                name: state.value.name,
                type: state.value.type,
                ingredients: state.value.ingredients,
                instructions: state.value.instructions,
                remarks: state.value.remarks
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
                name: state.value.name,
                type: state.value.type,
                ingredients: state.value.ingredients,
                instructions: state.value.instructions,
                remarks: state.value.remarks
            })
        }
        fetch("http://localhost:8000/api/recipes/" + recipeId.value, requestOptions)
        .then(res => res.body)
        .then(res => {console.log(res)})
        .then(()=>{
            getAllRecipes()
            router.push({path: "/menu"})
        })
    }

    const deleteRecipe = (_id) => {
        fetch("http://localhost:8000/api/recipes/" + _id, {method: "DELETE"})
        .then(() => {
            getAllRecipes()
        })
    }

    const resetForm = () => {
        state.value = {
          name: '',
          type: 'meat',
          ingredients: '',
          instructions: '',
          remarks: '',
        };
    };

    const randomRecipe = (type) => {
        try {
            fetch("http://localhost:8000/api/recipes")
              .then(res =>  res.json() ) 
              .then(data => {
                  const filteredRecipes = data.filter(r => r.type === type)
                  const random = filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)]
                  state.value.id = random._id;
                  state.value.name = random.name;
                  state.value.type = random.type;
                  state.value.ingredients = random.ingredients;
                  state.value.instructions = random.instructions;
                  state.value.remarks = random.remarks;
              })
          }
          catch(error) {
            console.log(error)
          }
    }   

    return {state, recipeId, getOne, getAllRecipes, createRecipe, updateRecipe, deleteRecipe, randomRecipe, resetForm}
}

export default getRecipes