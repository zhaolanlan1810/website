<template>
  <div id="case_page">
    <div class="my_case">
      <!-- <div class="search">
        <input type="text">
        <em></em>
      </div> -->
        <div class="case_list">
          <div class="case_con">
            <div class="case_item" v-for="item of caseList" :key="item.id" >
              <div class="pic" >
                <img :src="item.img" @click="show = !show">
                <transition name="fade">
                    <div class="play_modal" v-if="show">
                        <div class="play_box">
                            <div class="logo">
                            </div>
                            <button class="close_btn" @click="show=false">X</button>
                            <div class="play_con">
                                <div class="play_video">
                                    <video src="/goods/xuebi.mp4" preload="auto" controls="controls" width="100%" autoplay="true"></video>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
              </div>
              <h2>{{item.title}}</h2>
            </div>
        </div>
      </div>
    </div>
    <div class="pager">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="this.pageSize"
        :total="this.total"
        :page-count="this.pageCount"
        @current-change="pageChangeHandler"
        >
      </el-pagination> 
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:false,
      pageSize:10,//页大小
      currentPage:1,//当前页码
      total:0,//总条目数
      pageCount:1,//总页数
      caseList:[],//页面显示数据
      initList:[]//初次加载数据
    }
  },
  created(){
    this.getCaseData();
  },
  methods:{
    getCaseData(){
      var url="/fake/CaseList.json"
      this.axios.get(url).then(result=>{
        this.initList=result.data;
        this.total=this.initList.length;
        this.pageCount=this.total/this.pageSize;
        if(this.total<this.pageSize){
          this.caseList=this.initList;
        }else{
          this.caseList=this.initList.slice(0,this.pageSize);
        }
        console.log(this.caseList)
      })
    },
    pageChangeHandler(currentPage){
      var startId=(currentPage-1)*this.pageSize;
      if(currentPage<this.pageCount){
      var endId=startId+this.pageSize;
      }else if(currentPage==this.pageCount){
        endId=this.total;
      }
      this.caseList=this.initList.slice(startId,endId)
      console.log(this.caseList)
    }
  }
}
</script>

<style scoped>
  .case_list{
    background:#ddd;
  }
  .case_con{
    width:1200px;
    margin:0 auto;
    padding:20px 0;
    display:flex;
    justify-content:flex-start;
    flex-wrap: wrap;
  }
  .case_item{ 
    width:20%;
    padding:15px 0;
    margin-bottom:10px;
  }
  .case_item:hover{
    background:#fff;
    border-radius: 4px;
    transition:all 0.2s ease-in 0.5;
  }
  .case_item .pic{
    margin:0 auto;
    width:90%;
    /* width:210px;
    height: 360px; */
    overflow: hidden;
  }
  .case_item .pic img{
    width:100%;
  }
  .case_item h2{
    font-size:18px;
    line-height: 36px;
    color:#666;
  }
  .pager{
    width: 1200px;
    margin: 0 auto;
    padding: 20px 0 20px;
    text-align: right;
  }

  .play_modal{/*定位，背景色透明*/
        width:100%;
        height:100%;
        position:fixed;
        top:0;
        left:0;
        background-color:rgba(0,0,0,.5);
    }

    .play_modal .play_box{
        background:#fff;
        margin:0 auto;
        position:relative;
        top:50%;
        -webkit-transform:translateY(-50%);
	    -moz-transform:translateY(-50%);
	    -ms-transform:translateY(-50%);
	    -o-transform:translateY(-50%);
        transform:translateY(-50%);
        width:800px;
        height:570px;
        display:flex;
        justify-content:center;
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
    /*logo*/
    .play_box .logo{
        position: absolute;
        top:0px;
        left:0px;
        width:100px;
        height: 30px;
        margin:10px;
        background:url("/img/logo2.png") no-repeat;
    }
    /*close关闭按钮*/
    .play_box .close_btn{
        display:inline-block;
        width:25px;
        line-height:25px;
        background: #f3f3f3;
        font-size:20px;
        position:absolute;
        top:0px;
        right:0px;
    }
    /*视频图*/
    .play_box .play_con{
        width:280px;
        height:470px;
        background-color:#f3f3f3;
        margin:10px 20px;
        display:flex;
        flex-direction: column;
        align-items: center;
        border:1px solid #ddd;
        border-radius:5px;
        align-self: center;
        box-shadow:.2rem .2rem .5rem rgba(0,0,0,.6);
    }
    /*视频*/
    .play_box .play_con .play_video{
        width:240px;
        border:1px solid #ddd;
        margin:20px 0;
    }
    /*图片*/
    .play_box .play_con .pic img{
        width:240px;
        border:1px solid #ddd;
    }

</style>
