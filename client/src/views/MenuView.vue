<template>
    <div class="container">
        <div class="nav">
            <div class="left">
                <router-link to="/"><button class="btn btn-nav btn-back"><img alt="Back" src="../assets/back.png"></button></router-link>
                <h3>Menu</h3>
            </div>
            <div class="right">
                <router-link to="/create"><button class="btn btn-nav btn-right">+</button></router-link>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="recipe in state.recipes" v-bind:key="recipe._id">
                <td>{{ recipe.name }}</td>
                <td>
                    <button class="btn btn-warning btn-action"><img alt="Edit" src="../assets/edit.png"></button>
                    <button class="btn btn-danger btn-action"><img alt="Delete" src="../assets/delete.png"></button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    import crud from '../modules/crud'
    import {onMounted} from 'vue'

    export default {
        setup(){

            //createRecipe, updateRecipe, deleteRecipe
            const {state, getAllRecipes} = crud()

            onMounted(()=>{
                getAllRecipes()
            })
            return {state, getAllRecipes}
        }
    }

</script>

<style lang="scss" scoped>

.container{
  margin: 20px 0px;
}

.nav{
    width: 85%;
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
}

h3, .btn-nav{
    display:inline-block;
}

.right{
    margin-left: 0;
}

.btn-back{
    padding-left: 0px;
    margin-top: -10px;;
}

.btn-right{
    background-color: black;
    color: white;
}


table{
    margin: auto;
    width: 85%;
}
table,th,td{
    border: 1px solid black;
    border-collapse: collapse;
    padding: 10px;
}

.btn-action{
    margin: 5px;
}

img{
    width:15px;
    height:15px;
}
</style>