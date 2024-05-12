<template>
  <div class="container">
    <div class="nav">
      <h3 v-if="$route.params.id">Update</h3>
      <h3 v-else>Create</h3>
      <router-link to="/menu"><button class="btn btn-nav right"><img alt="Close" src="../assets/close.png"></button></router-link>
    </div>

    <div class="form">
      <div class="mb-3">
        <label for="nameInput" class="form-label">Name</label>
        <input type="text" class="form-control" id="nameInput" autocomplete="off" v-model="state.name">
      </div>

      <div class="radio-grp">
        <input type="radio" class="btn-check" name="options" id="optionMeat" autocomplete="off" checked v-model="state.type" v-bind:value="'meat'">
        <label class="btn btn-outline-success" for="optionMeat">Meat</label>

        <input type="radio" class="btn-check" name="options" id="optionVeg" autocomplete="off" v-model="state.type" v-bind:value="'vegetable'">
        <label class="btn btn-outline-success" for="optionVeg">Vegetable</label>

        <input type="radio" class="btn-check" name="options" id="optionSoup" autocomplete="off" v-model="state.type" v-bind:value="'soup'">
        <label class="btn btn-outline-success" for="optionSoup">Soup</label>

        <input type="radio" class="btn-check" name="options" id="optionOthers" autocomplete="off" v-model="state.type" v-bind:value="'others'">
        <label class="btn btn-outline-success" for="optionOthers">Others</label>
      </div>

      <div class="mb-3">
        <label for="ingredientsInput" class="form-label">Ingredients</label>
        <textarea class="form-control" id="ingredientsInput" v-model="state.ingredients"></textarea>
      </div>

      <div class="mb-3">
        <label for="instructionsInput" class="form-label">Instructions</label>
        <textarea class="form-control" id="instructionsInput" v-model="state.instructions"></textarea>
      </div>

      <div class="mb-3">
        <label for="remarksInput" class="form-label">Remarks</label>
        <textarea class="form-control" id="remarksInput" v-model="state.remarks"></textarea>
      </div>
    </div>

    <div v-if="$route.params.id" class="btn-grp">
      <router-link to="/menu"><button type="button" class="btn btn-danger">Cancel</button></router-link>
      <button type="button" class="btn btn-success" @click="updateRecipe()">Update</button>
    </div>

    <div v-else class="btn-grp">
      <router-link to="/menu"><button type="button" class="btn btn-danger">Cancel</button></router-link>
      <button type="button" class="btn btn-success" @click="createRecipe()">Create</button>
    </div>


  </div>
</template>

<script>
import {onMounted} from 'vue'
import crud from '../modules/crud'

export default {
  setup(){
    const {state, recipeId, getOne, createRecipe, updateRecipe} = crud()

    onMounted(() => {
    if (recipeId.value) {
        getOne(recipeId.value);
      }
  })

    return {state, recipeId, getOne, createRecipe, updateRecipe}
  }
}

</script>


<style lang="scss" scoped>

.container{
  margin: 20px 0px;
}

//nav
.nav{
  width: 85%;
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.right{
  margin-right: auto;
}

img{
  width: 15px;
  height: 15px;
}

.form{
  width: 85%;
  margin:auto;
  text-align: left;
}

//radio btns
.radio-grp{
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.btn-outline-success{
  margin-right: 5px;
  border-color: #82AA4C;
  color: #82AA4C;
}

.btn-check:checked + .btn{
  background-color: #82AA4C;
  border-color: #82AA4C;
}

//inputs

.mb-3 label{
  color: #82AA4C;
}

input, textarea{
  background: #82AA4C08;
  margin-bottom: 30px;
}

textarea{
  resize: none;
  height: 80px;
}

//submit btns

.btn-grp{
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.btn-success{
  width: 120px;
  background-color: #82AA4C;
  border: none;
}

.btn-danger{
  width: 120px;
  background-color: #dc3545;
  border: none;
}

</style>