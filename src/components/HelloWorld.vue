<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="clickHandle">测试</el-button>
    <h1>{{counter}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      counter: 1
    }
  },
  methods: {
    clickHandle() {
      this.counter++;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
