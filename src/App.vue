<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components:{
    Header,
    Footer
  },
}
</script>


<style>
#app {
  font: 12px/1.5  Hiragino Sans GB,Microsoft YaHei,SimSun,Arial,Tahoma,Helvetica,Geneva,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#333;
}
ul,li{
  list-style-type: none;
  margin:0 0;
  padding:0 0;
}
h1,h2,h3,h4,h5,h6,p{
  margin:0 0;
  padding:0 0;
  font-weight:400;
}
a,a:hover{
  text-decoration: none;
  color:#b81b22;
}
</style>
