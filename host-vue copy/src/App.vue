<template>
  <div id="app">
    <div class="vue-content">
      我是本身的vue组件
      <HelloWorld />
    </div>
    <div class="react-content">
      我是react组件
      <List lang="en"  />
    </div>
  </div>
</template>

<script>
  import {applyReactInVue} from "vuereact-combined"

  import List from 'remote/List'
  import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld,
    List: applyReactInVue(List)
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;

}
.vue-content{
  border: 1px solid orange;
}
.react-content{
  border: 1px solid saddlebrown;
}
</style>
