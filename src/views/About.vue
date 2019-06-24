<template>
  <div id="my_about">
    <div class="mid_con">
      <div class="banner"> 
        <img src="/img/resource_banner.jpg" alt="">
      </div>
      <div class="info_content">
        <div class="info_btns" v-for="(item,index) of conBtns" :key="index">
          <a href="javascript:;" 
          @click="boxChang(index)"
          :class="{active:boxActiveIndex===index}">{{item}}</a>
        </div>

        <div class="con_box1" v-if="boxActiveIndex===0">
          <p>蜘蛛传媒集团有限公司是一家“传统媒体+互联网”的科技媒体创新企业。新潮传媒作为专注家庭消费的社区媒体平台，截至2019年2月，已覆盖全国100个城市，70万部电梯，每天覆盖2亿家庭人群，已经成为16000个客户的共同选择。</p>
          <p>目前蜘蛛传媒融资64亿元，投资方包括：百度、二三四五网络创始人、顾家家居、欧普照明、养元股份、红星美凯龙等等，公司估值超过20亿美金。蜘蛛传媒已经是新经济领域的互联网独角兽企业。</p>
          <div class="mid">
            <img src="/img/resource_logo.jpg" alt="">
          </div>
        </div>
        <div class="con_box2" v-if="boxActiveIndex===1">
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
</template>

<script>
export default {
  data(){
    return{
      conBtns:[
        '公司简介',
        '企业文化'
      ],
      boxActiveIndex:0,
    }
  },
  methods:{
    boxChang(index){
      this.boxActiveIndex=index;
    }
  }
}
</script>

<style scoped>
  #my_about{
    background-color:#f3f3f3;
  }
  .mid_con{
    width:1200px;
    margin:0 auto;
    background:#fff;
  }
  .mid_con .banner{
    height:400px;
    overflow:hidden;
  }
  .mid_con .info_content{
    padding:30px 40px;
    text-align:start;
  }
  .mid_con .info_content .info_btns{
    float:left;
    margin-right:80px;
  }

  .mid_con a{
    display:inline-block;
    width:140px;
    line-height: 40px;
    font-weight:600;
    border:#b81b22 solid 1px;
    text-align:center;
    font-size:16px;
  }
  
.active {
    background:#b81b22;
    color:#fff;
  }

  .con_box1{
    padding:40px 0;
    clear: both;
    font-size:16px;
    color:#333;
  }
  .con_box1 p{
    padding-bottom:20px;
  }
  .con_box1 .mid{
    width:100%;
    text-align: center;
  }
  .con_box1 img{
    width:420px;
    height:80px;
    margin:10px 0;
  }
  .con_box2{
    padding:30px 0;
    clear: both;
    font-size:14px;
    color:#999;
  }
  .con_box2 h4{
    display:inline-block;
    font-size:16px;
    line-height: 18px;
    padding-left:10px;
    margin:30px 0;
    color:#333;
    font-weight:500;
    text-align: start;
    border-left:2px solid #b81c22;
  }


</style>
