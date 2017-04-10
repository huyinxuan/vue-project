<template>
  <div id="app">
    <top-bar id="topBar"  name="top"></top-bar>
    <aside-menu id="asideMenu" name="mune">
        <ul>
          <li><router-link to="/">index</router-link></li>
          <li> <router-link to="/home">Go to home</router-link></li>
        </ul>       
    </aside-menu>
    <main id="main"  name="main">
          <router-view></router-view>
    </main>
    <!-- <img src="./assets/logo.png"> -->

  </div>
</template>

<script>


export default {

}
</script>

<style>
body{
  height: 1000px;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
#topBar{
  display: block;
  width: 100%;
  height: 10%;
  height: auto;
  min-height: 150px;
  float: left;
  background-color: red;
}
#asideMenu{
  display: block;
  min-height: 400px;
  width: 20%;
  height: auto;
  float: left;
  background-color: #25ff00;
}
#main{
  display: block;
  width: 75%;
  height: auto;
  float: left;
  min-height: 400px;
  background-color: #fff;
  border:red 1px solid;
}
</style>
