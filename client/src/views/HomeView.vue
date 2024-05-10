<template>
  <div class="container">
    <div class="nav">
      <h3>What should I cook today?</h3>
      <router-link to="/menu"><button class="btn btn-nav right"><img alt="Menu" src="../assets/menu.png"></button></router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
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

img{
  width:50px;
  height:50px;
}

</style>
