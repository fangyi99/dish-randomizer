<template>
    <div class="container">
      <div class="nav">
        <div class="left">
                <router-link to="/menu"><button class="btn btn-nav btn-back"><img alt="Back" src="../assets/icons/back.png"></button></router-link>
                <h3>Details</h3>
            </div>
            <div class="right">
                <router-link :to="'/form/' + recipeId"><button class="btn btn-nav btn-right"><img id="edit" alt="Edit" src="../assets/icons/edit.png"></button></router-link>
            </div>
      </div>
  
      <div class="form">
        <div class="tbnname">
          <img :src="require(`@/assets/thumbnails/${state.thumbnail}`)" class="thumbnails"/> 
          <input type="text" class="form-control" id="nameInput" autocomplete="off" v-model="state.name" disabled>
        </div>
  
        <div class="radio-grp">
            <label class="btn btn-outline-success">{{state.type}}</label>
        </div>
  
        <div class="mb-3">
          <label for="ingredientsInput" class="form-label">Ingredients</label>
          <textarea class="form-control" id="ingredientsInput" v-model="state.ingredients" disabled></textarea>
        </div>
  
        <div class="mb-3">
          <label for="instructionsInput" class="form-label">Instructions</label>
          <textarea class="form-control" id="instructionsInput" v-model="state.instructions" disabled></textarea>
        </div>
  
        <div class="mb-3">
          <label for="remarksInput" class="form-label">Remarks</label>
          <textarea class="form-control" id="remarksInput" v-model="state.remarks" disabled></textarea>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  import {onMounted} from 'vue'
  import crud from '../modules/crud'
  
  export default {
    setup(){
      const {state, recipeId, getOne} = crud()
  
      onMounted(() => {
      if (recipeId.value) {
          getOne(recipeId.value);
        }
    })
  
      return {state, recipeId, getOne}
    },
  }
  
  </script>
  
  
  <style lang="scss" scoped>
  
  .container{
    margin: 20px 0px;
  }
  
  //nav
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
    }

    #edit{
        filter: invert(100%);
    }
  
  img{
    width: 15px;
    height: 15px;
  }

  .thumbnails{
    width:25%;
    height:auto;
    margin-right: 30px;
}

  .tbnname{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
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
    border-color: #82AA4C;
    background-color: #82AA4C;
    color: white;
    pointer-events: none;
    text-transform: capitalize;
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

  input:disabled, textarea:disabled{
    background-color: #82AA4C08;
  }
  
  </style>