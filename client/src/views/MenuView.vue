<template>
    <div class="container">
        <div class="nav">
            <div class="left">
                <router-link to="/"><button class="btn btn-nav btn-back"><img alt="Back" src="../assets/icons/back.png"></button></router-link>
                <h3>Menu</h3>
            </div>
            <div class="right">
                <router-link to="/form"><button class="btn btn-nav btn-right">+</button></router-link>
            </div>
        </div>
        <SearchForm @search="handleSearch"/>
        <table>
            <tbody>
                <tr v-for="recipe in filteredRecipes" v-bind:key="recipe._id">
                    <td>
                        <div class="table-container">
                            <router-link :to="'/details/' + recipe._id" class="left"><img :src="require(`@/assets/thumbnails/${recipe.thumbnail}`)" class="thumbnails"> <div class="label">{{ recipe.name }}</div></router-link>
                            <div class="right">
                                <router-link :to="'/form/' + recipe._id"><button class="btn btn-success btn-action"><img class="action" alt="Edit" src="../assets/icons/edit.png"></button></router-link>
                                <button class="btn btn-danger btn-action" @click="deleteRecipe(recipe._id)"><img class="action" alt="Delete" src="../assets/icons/delete.png"></button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>    
        </table>
    </div>
</template>

<script>
    import SearchForm from '../components/SearchForm.vue';
    import crud from '../modules/crud'
    import {onMounted} from 'vue'

    export default {
        components:{
            SearchForm
        },
        setup(){

            const {state, getAllRecipes, deleteRecipe, handleSearch, filteredRecipes} = crud()

            onMounted(()=>{
                getAllRecipes()
            })

            return {state, getAllRecipes, deleteRecipe, handleSearch, filteredRecipes}
        }
    }

</script>

<style lang="scss" scoped>

.container{
  padding: 20px 0px;
  margin: auto;
  width: 85%;
}

.nav{
    margin: auto;
    display: flex;
    justify-content: space-between;
}

.left, .right, h3{
    display:inline-block;
}

.left{
    width: 60%;
    text-align: left;
    text-decoration: none;
    color: black;
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
    table-layout: fixed;
    width:100%;
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

.label{
    display: inline-block;
    margin-top: 12px;
    width: 67%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

img{
    width:15px;
    height:15px;
}

.thumbnails{
    width:40px;
    height:40px;
    margin-right: 10px;
}

</style>