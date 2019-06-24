<template>
  <div class="index_pages">
    <!-- 1，广告轮播图（静态） -->
    <div class="slider_brands">
      <a href="javascript:;">
      <img src="/img/slider_brand1.jpg" alt="">
      </a>
    </div>

    <!-- 2，产品场景展示 -->
    <div class="resource">
      <div class="title">
        <h3>媒体资源
          <span>/Media resource</span>
        </h3>
        <h4>立体电梯生态媒体矩阵&nbsp;满足不同投放</h4>
      </div>
      <div class="resource_content" >
        <div class="resource_item" v-for="(item,index) in resourceList" :key="index">
          <img :src="item.img" @click="jumpTo(item.id)">
        </div>
      </div>
    </div>

    <!-- 3，合作商 -->
    <div class="brands">
      <div class="title">
        <h3>合作品牌
          <span>/Our costomers</span>
        </h3>
      </div>
      <div class="brands_bg">
        <table></table>
        <div class="brands_content">
          <a href="javascript:;" class="pre" @click="preHandler"></a>
          <a href="javascript:;" class="next" @click="nextHandler"></a>
          <div class="brand_item"> 
            <img :src="brandList[i].img">
          </div>
        </div>
      </div>
    </div>

    <!-- 4,关于我们 -->
    <div class="about">
      <div class="title">
        <h3>关于我们
          <span>/About us</span>
        </h3>
        <h4>我们不一定是NO.1&nbsp;但我们永远是Only One</h4>
      </div>
      <div class="about_content">
        <div class="about_us">
          <div class="about_item"> 
            <h3>关于我们
              <span>/About us</span>
            </h3>
            <img src="img/about_us.jpg" alt="">
            <p class="p_padding">
              蜘蛛传媒以电梯作为中产社区的流量入口，致力于用科技为客户提供更精准、更有效的社区媒体流量。截至2019年2月，已覆盖全国100个城市，70万部电梯，每天覆盖2亿家庭人群，已经成为16000个客户的共同选择。
            </p>
          </div>
        </div>
        <div class="about_culture">
          <div class="about_item"> 
            <h3>企业文化
              <span>/Corporate culture</span>
            </h3>
            <img src="img/culture.jpg" alt="">
            <h4>使命</h4>
            <p>用科技为客户提供更精准更有效的社区媒体流量</p>
            <p>为奋斗者及其家庭创造物心两方面的幸福</p>
            <p>为股东和合作者创造价值</p>
            <h4>核心价值观</h4>
            <p>
              <span>客户第一&nbsp;&nbsp;</span>
              <span>友爱协作&nbsp;&nbsp;</span>
              <span>艰苦奋斗&nbsp;&nbsp;</span>
              <span>廉洁诚信&nbsp;&nbsp;</span>
              <span>自我反省&nbsp;&nbsp;</span>
              <span>铁血执行&nbsp;&nbsp;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      resourceList:[],
      brandList:[
        {img:"/img/brand1.png"},
        {img:"/img/brand2.png"},
        {img:"/img/brand3.png"},
        {img:"/img/brand4.png"},
        {img:"/img/brand5.png"},
        {img:"/img/brand6.png"}
      ],
      i:0,//默认第几张图片

    }
  },

  created() {
    this.getResourceData();
    // console.log(this.brandList.length)
  },
  
  methods:{
    getResourceData(){
      var url="/fake/ResourceData.json";
      this.axios.get(url).then(res=>{
        this.resourceList=res.data;
      })
    },
    // 合作商图片
    preHandler(){
      var brandSize=this.brandList.length;
      this.i===0?this.i=brandSize-1 : this.i-- ;
      // console.log(this.i)
    },
    nextHandler(){
      var brandSize=this.brandList.length;
      this.i===brandSize-1 ? this.i=0 : this.i++;
      // console.log(this.i)
    },

    jumpTo(id){
      this.$router.push({name:"resourceDetail",params:{id:id}})
    }
  }
}
  
</script>

<style scoped>

  .slider_brands img{
    width:100%;
    height: 600px;
  }
  .resource {
    width:100%;
    margin-bottom:20px;
  }
  .resource .resource_content{
    display:flex;
    justify-content: center;
    align-items:center;
  }
  /* 标题样式 */
  .title{
    width:100%;
    font-size:20px;
    line-height: 36px;
    padding:20px 0;
    color:#b81c22;
  }
  .title h3{
    font-weight:600;
  } 
  .title h4{
    font-weight:500;
    color:#666;
    font-size:18px;
  } 
  .title span{
    color:#999;
    font:18px Georgia;
    font-weight:500;
  }

  .resource .resource_item{
    width:33.3%;
    height:320px;
    text-align:center;
    margin-top:20px;
  }
  .resource img{
    width:100%;
    max-width: 480px;
    transition:all 0.2s ease-in 0.05s;
  }
  .resource img:hover{
    transform:translateY(-10px) scale(1.05);
    cursor:pointer;
    box-shadow: 0 5px 8px rgba(0,0,0,0.3)
  }

  .brand{
    width:100%;
    height:100%;
  }
  .brands .brands_bg{
    width:100%;
    height:550px;
    margin-top:20px;
    background:url("/img/brand_bg.jpg") no-repeat center;
  }

  .brands_bg .brands_content{
    width:1000px;
    height:300px;
    margin:125px auto;
    overflow: hidden;
    position:relative;
  }
  .brands .brands_content a{
    position:absolute;
    top:130px;
    width:42px;
    height:42px;
    border-radius:50%;
    background:url("/img/brand_jt.png") no-repeat;
  }
  
  .brands .brands_content .pre{
    left:0px;
    background-position:-86px 0;
  }
  .brands .brands_content .pre:hover{
    background-position:-43px 0;
  }

  .brands .brands_content .next{
    right:0px;
    background-position:-129px 0;
  }
  .brands .brands_content .next:hover{
    background-position:0 0;
  }

  .brands .brands_content img{
    width:800px;
    height:300px;
    background-color:#fff;
  }

  .about{
    width:100%;
    height:700px;
    background-color:#f5f5f5;
  }
  .about .about_content{
    width:80%;
    height:550px;
    margin:0 auto;
    background: #fff;
    display: flex;
    justify-content:center;
  }
  .about .about_us,.about .about_culture{
    width:50%;
    margin:20px auto;
  }
  .about .about_us{
    border-right:1px solid #ebebeb;
  }
  .about .about_content .about_item{
    width:100%;
    color:#666;
    font-size:14px;
    line-height:30px;
  }
  .about_item h3{
    color:#b81c22;
    padding:10px 0;
  }
  .about_item h3 span{
    color:#999;
  }
  .about_item img{
    width:75%;
  }
  .about_item p{
    display:inline-block;
    width:75%;
    text-align: start;
  }
  .about_item .p_padding{
    padding-top:30px;
  }

  .about_item h4{
    display:inline-block;
    width:75%;
    color:#b81c22;
    text-align: start;
  }

</style>
