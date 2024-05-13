<template>
  <div class="container">
    <div class="nav">
      <h3><b>What's cooking?</b></h3>
      <router-link to="/menu"><button class="btn btn-nav right"><img class="menu" alt="Menu" src="../assets/icons/menu.png"></button></router-link>
    </div>
    <div class="options">
        <input type="radio" class="btn-check" name="options" id="optionMeat" autocomplete="off" checked v-model="state.type" v-bind:value="'meat'">
        <label class="btn btn-outline-success" for="optionMeat"><img alt="Meat" src="../assets/icons/meat.png"></label>

        <input type="radio" class="btn-check" name="options" id="optionVeg" autocomplete="off" v-model="state.type" v-bind:value="'vegetable'">
        <label class="btn btn-outline-success" for="optionVeg"><img alt="Vegetable" src="../assets/icons/veg.png"></label>

        <input type="radio" class="btn-check" name="options" id="optionSoup" autocomplete="off" v-model="state.type" v-bind:value="'soup'">
        <label class="btn btn-outline-success" for="optionSoup"><img alt="Soup" src="../assets/icons/soup.png"></label>

        <input type="radio" class="btn-check" name="options" id="optionOthers" autocomplete="off" v-model="state.type" v-bind:value="'others'">
        <label class="btn btn-outline-success" for="optionOthers"><img alt="Others" src="../assets/icons/more.png"></label>
      </div>

     <div class="animation-container">
        <div id="animated" class="stick"></div>
        <div class="bubbles">
          <div class="bubble-1"></div>
          <div class="bubble-2"></div>
        </div>
        <div class="claudron">
          <div class="handle"></div>
          <div class="potion"></div>
        </div>
     </div>

     <div v-if="state.name" class="label">{{ state.name }}</div>
     <div v-else class="label">???</div>

    <div class="btn-grp">
      <router-link v-if="state.name" :to="'/details/' + state.id"><button type="button" class="btn btn-success">Details ></button></router-link>
      <button v-else type="button" class="btn btn-success" disabled>Details ></button>
      <button type="button" class="btn btn-success" @click="restartAnimation(); randomRecipe(state.type)">Roll</button>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import crud from '../modules/crud'

export default {
  name: 'HomeView',
  setup(){
    const {state, randomRecipe} = crud()
    return {state, randomRecipe}
  },
  methods: {
    restartAnimation() {
      var el = document.getElementById('animated');
      el.style.animation = 'none';
      el.offsetHeight; /* trigger reflow */
      el.style.animation = null; 
    }
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
  display: flex;
  float: right;
}

.menu{
  width: 35px;
  height: 35px;
}

img{
  width:50px;
  height:50px;
}

//option btns
.btn-outline-success{
  margin-right: 5px;
  border-color: #82AA4C80;
}

.btn-check:checked + .btn{
  background-color: #82AA4C50;
  border: #82AA4C50;
}

//label
.label{
  width: 85%;
  background-color: #82AA4C50;
  border-radius: 8px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 10px 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


.btn-grp{
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.btn-success, .btn-success:hover, .btn-success:active{ 
  width: 120px;
  background-color: #82AA4C;
  border: none;
}

.btn:disabled{
  background-color: grey;
}


//animation
.animation-container{
  width: 330px;
  height: 260px;
  margin: auto;
  margin-top: 40px;
}

.stick{
  background-color: grey;
  height: 200px;
  width: 18px;
  border-radius: 25px;
  transform: rotate(23deg);
  position: relative;
  top: 20px;
  left: 210px;
  animation: mix 2s forwards;
}

@keyframes mix {
  50%{
    transform: translateX(-100px) rotate(-23deg);
  }
}

.bubble-1{
  background-color: #b35900;
  height: 30px;
  width: 30px;
  opacity: 0.6;
  border-radius: 50%;
  position: relative;
  top: -70px;
  left: 130px;
  animation: move-up-1 3s 0.5s infinite;
}

@keyframes move-up-1 {
  100%{
    transform: translateY(-95px);
  }
}

.bubble-2{
  background-color: #b35900;
  height: 20px;
  width: 20px;
  opacity: 0.6;
  border-radius: 50%;
  position: relative;
  top: -70px;
  left: 210px;
  animation: move-up-2 3.2s 1.5s infinite;
}

@keyframes move-up-2 {
  100%{
    transform: translateY(-90px);
  }
}

.claudron{
  background-color: #222222;
  height: 150px;
  width: 200px;
  position: relative;
  margin: auto;
  top: -150px;
  border-radius: 100px;
}

.claudron:before{
  content: "";
  position: absolute;
  background-color: #222222;
  height: 40px;
  width: 100%;
  right: 0px;
  border-radius: 50px;
}

.handle{
  background-color: transparent;
  height: 40px;
  width: 240px;
  border: 7px solid #222222;
  position: absolute;
  border-radius: 40px;
  margin:auto;
  left: -20px;
  top: 50px;
}

.potion{
  background-color: #b35900;
  height: 70px;
  width: 20px;
  border-radius: 0 0 50px 50px;
  position: relative;
  bottom: 0;
  left: 120px;
}

.potion:before{
  content:"";
  position: absolute;
  height: 35px;
  width: 15px;
  background-color: #b35900;
  left: 30px;
  border-radius: 0 0 30px 30px;
}

.potion:after{
  content:"";
  position: absolute;
  height: 22px;
  width: 50px;
  background-color: #b35900;
  bottom: 70px;
  right: 70px;
  border-radius: 25px 25px 0 0;
}

</style>
