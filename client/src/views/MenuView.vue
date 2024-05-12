<template>
    <div class="container">
        <div class="nav">
            <div class="left">
                <router-link to="/"><button class="btn btn-nav btn-back"><img alt="Back" src="../assets/back.png"></button></router-link>
                <h3>Menu</h3>
            </div>
            <div class="right">
                <router-link to="/form"><button class="btn btn-nav btn-right">+</button></router-link>
            </div>
        </div>
        <table>
            <tbody>
                <tr v-for="recipe in state.recipes" v-bind:key="recipe._id">
                <td>
                    <router-link :to="'/details/' + recipe._id" class="details">
                        <div class="table-container">
                            <div class="left">
                                {{ recipe.name }}
                            </div>
                            <div class="right">
                                <router-link :to="'/form/' + recipe._id"><button class="btn btn-success btn-action"><img class="action" alt="Edit" src="../assets/edit.png"></button></router-link>
                                <button class="btn btn-danger btn-action" @click.stop="deleteRecipe(recipe._id)"><img class="action" alt="Delete" src="../assets/delete.png"></button>
                            </div>
                        </div>
                    </router-link>
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

            const {state, getAllRecipes, deleteRecipe} = crud()

            onMounted(()=>{
                getAllRecipes()
            })

            return {state, getAllRecipes, deleteRecipe}
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

.left, .right, h3{
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

//table
table{
    margin: auto;
    width: 85%;
}

table,th,td{
    border: 1px solid grey;
    padding: 10px;
}

td:hover{
    background-color: #82AA4C15;
}

.table-container{
    display: flex;
    justify-content: space-between;
}

.details{
    text-decoration: none;
    color: black;
}

.btn-action{
    margin: 5px;
}

.action{
    filter: invert(100%);
}

.btn-success{
    background-color: #82AA4C;
    border: none;
}

.btn-success:hover{
    filter: brightness(90%);
}

img{
    width:15px;
    height:15px;
}
</style>