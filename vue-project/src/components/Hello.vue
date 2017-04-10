<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <el-input
        placeholder="请选择日期"
        icon="search"
        v-model="input2"
        :on-icon-click="handleIconClick">
    </el-input>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到菜鸟教程',
      input2: ''
    }
  },
  methods: {
    handleIconClick(ev) {
      console.log(ev);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
