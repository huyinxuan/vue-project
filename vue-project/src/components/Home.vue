<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="chart" id="homeChart"></div>
  </div>
</template>

<script>
var echarts = require('echarts');

export default {
  name: 'home',
  data () {
    return {
      msg: '欢迎来到家'
    }
  },
  mounted() {
    //echarts 实例化
    var myChart = echarts.init(document.getElementById('homeChart'));
    // 基于准备好的dom，初始化echarts实例
              myChart.setOption({
                title: { text: 'ECharts 入门示例' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
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
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.chart {
     width: 100%;
     height: 400px;
 }
</style>
