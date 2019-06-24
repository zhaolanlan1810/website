<template>
  <div id="resource_page">
    <div class="my_resource">
      <div class="banner" >
        <img src="/img/res_bg.jpg" alt="">
        <img src="/img/res_banner.jpg" alt="">
      </div>
      <div class="resource_con">
        <div class="resource">
          <div class="item" v-for="(item,index) of resourceList" :key="index">
            <div class="img">
              <img :src="item.img" alt="" @click="jumpTo(item.id)">
            </div>
            <div class="info">
              <h3>{{item.title}}</h3>
              <p>{{item.subtitle}}</p>
              <router-link :to="{name:'resourceDetail',params:{id:item.id}}">查看详情</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data(){
    return{
      resourceList:[]
    }
  },
  created(){
    this.getResource();
  },
  methods:{
    getResource(){
      var url="/fake/Rescource.json";
      this.axios.get(url).then(res=>{
        this.resourceList=res.data;
      })
    },
    
    jumpTo(id){//跳转详情页
      this.$router.push({name:'resourceDetail',params:{id:id}})
    }

  }
}
</script>

<style scoped>
  .banner{
    width:1200px;
    margin:0 auto;
  }
  .banner img{
    width:100%;
  }

  .resource_con{
    padding:40px 0;
    background-color:#f3f3f3;
  }
  .resource{
    width:1200px;
    margin:0 auto;
    display: flex;
    justify-content: center;
  }

  .resource_con .item{
    width:360px;
    margin:0 20px;
    background-color:#fff;
    transition: all 0.2s ease-in 0.5s;
  }
  .resource_con .item:hover{
    cursor: pointer;
  }
  .resource_con .item .img{
    height:240px;
    width:360px;
  }
  .resource_con .item .img img{
    width:100%;
  } 

.resource_con .item .info{
    text-align:start;
    padding:0 15px;
    padding-bottom:20px;
}
.resource_con .item .info h3{ 
  font-size:16px;
  line-height:40px;
  padding-top:10px;
}
.resource_con .item .info p{
  height:20px;
  margin-bottom:40px;
  font-size:14px;
  color:#999;
  line-height: 20px;
}
.resource_con .item .info a{
  color:#b81c22;
  font-size:12px;
}
.resource_con .item .info:hover{
  box-shadow: 0 3px 5px rgba(0,0,0,0.2);
}
</style>
