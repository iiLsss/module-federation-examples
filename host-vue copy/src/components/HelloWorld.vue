<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{num}}</p>
    <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      num: 1
    }
  },
  props: {
    msg: String
  },
  methods: {
    add() {
      this.num++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
