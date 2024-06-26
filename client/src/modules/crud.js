import {ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import _ from 'lodash';

const getRecipes = () => {
    const state = ref({
        id: '',
        name: '',
        type: 'meat',
        ingredients: '',
        instructions: '',
        remarks: '',
        thumbnail: 'default.png',
        recipes: {}
    })

    const searchFilter = ref('')

    const route = useRoute();
    const router = useRouter();

    const recipeId = computed(() => route.params.id)

    const updateThumbnail = (path) => {
        state.value.thumbnail = path;
    }

    const getOne = async (id) => {  
        try {
          await fetch(process.env.VUE_APP_API_URL + "/recipes/" + id)
            .then(res =>  res.json() ) 
            .then(data => {
                state.value.name = data.name;
                state.value.type = data.type;
                state.value.ingredients = data.ingredients;
                state.value.instructions = data.instructions;
                state.value.remarks = data.remarks;
                state.value.thumbnail = data.thumbnail;
            })
        }
        catch(error) {
            console.log(error)
        }
    }

    const getAllRecipes = async () => {
        try{
            await fetch(process.env.VUE_APP_API_URL + "/recipes")
            .then(res => res.json())
            .then(data => {
                state.value.recipes = data
                state.value.filtered = data
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
                remarks: state.value.remarks,
                thumbnail: state.value.thumbnail
            })
        }
        fetch(process.env.VUE_APP_API_URL + "/recipes", requestOptions)
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
                remarks: state.value.remarks,
                thumbnail: state.value.thumbnail
            })
        }
        fetch(process.env.VUE_APP_API_URL + "/recipes/" + recipeId.value, requestOptions)
        .then(res => res.body)
        .then(()=>{
            getAllRecipes()
            router.push({path: "/menu"})
        })
    }

    const deleteRecipe = (_id) => {
        fetch(process.env.VUE_APP_API_URL + "/recipes/" + _id, {method: "DELETE"})
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
          thumbnail: 'default.png'
        };
    };

    const randomRecipe = (type) => {
        try {
            fetch(process.env.VUE_APP_API_URL + "/recipes")
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
                  state.value.thumbnail = random.thumbnail;
              })
          }
          catch(error) {
            console.log(error)
          }
    }   

    const handleSearch = (search) => {
        searchFilter.value = search;
    }

    const filteredRecipes = computed(() => {
        if(searchFilter.value !== ''){
            return _.sortBy(
                state.value.recipes.filter((recipe)=>{
                    return recipe.name.toLowerCase().includes(searchFilter.value.toLowerCase())
                }),
                ['type'],
                ['asc']
            );


        }
        else{
            return _.sortBy(
                state.value.recipes,
                ['type'],
                ['asc']
            );
        }
    })

    return {state, recipeId, getOne, getAllRecipes, createRecipe, updateRecipe, deleteRecipe, randomRecipe, resetForm, handleSearch, filteredRecipes, updateThumbnail}
}

export default getRecipes