<template>
    <div class="resource_detail_page">
        <div class="container">
            <div class="breadcrumbs">
                <router-link :to="{name:'resource'}">媒体资源</router-link> &gt;
                <span>新媒体详情</span>
            </div>
            <div class="banner">
                <img src="/img/resource1.jpg" alt="">
            </div>
            <div class="intr">
                <div class="intr_item">
                    <div class="item_title">
                        <div class="title">
                            <span class="left"></span>
                            <h2>梯媒新认知</h2>
                            <h3>Media New Congnition</h3>
                            <span class="right"></span>
                            <div class="sjx">
                                <div></div>
                            </div>   
                        </div>
                    </div>
                    <div class="item_con">
                        <img src="/img/res1_detail1.jpg" alt="">
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
        }
    },
    created(){

    },
    methods:{},
}
</script>

<style scoped>
    .resource_detail_page{
        background:#f3f3f3;
    }
    .container{
        width:1200px;
        margin:0 auto;
    }
    .breadcrumbs{
        width:100%;
        line-height: 36px;
        font-weight: 500;
        text-align:start;
    }
    .banner img{
        width:1200px;
        height:600px;
    }
    .intr_item {
        background:rgb(255, 255, 255);
    }
    .intr_item .item_title{
        width:100%;
        height:100px;
        padding:20px 0;
    }
    .intr_item .item_title .title{
        display: inline-block;
        padding:10px 20px 25px;
        border-top:1px solid #b81c22;
        position:relative;
    }
    .left,.right{
        display: inline-block;
        height:26px;
        position:absolute;
        border-left:1px solid #b81c22;
    }
    .left{
        top:0px;
        left:0px;
    }
    .right{
        top:0px;
        right:0px;
    }
    .sjx{
        margin:10px auto;
        width:0px;
        height:0px;
        border-top:15px solid #b81c22;
        border-right:15px solid  rgba(0,0,0,0);
        border-bottom:15px solid rgba(0,0,0,0);
        border-left:15px solid  rgba(0,0,0,0); 
        position:relative;
    }
    .sjx div{
        position:absolute;
        top:-15px;
        left:-14px;
        width:0px;
        height:0px;
        border-top:14px solid #fff;
        border-right:14px solid  rgba(0,0,0,0);
        border-bottom:14px solid rgba(0,0,0,0);
        border-left:14px solid  rgba(0,0,0,0); 

    }
    
    .intr_item .item_title h2{
        font-size:24px;
        font-weight: 100;
        line-height: 36px;
    }
    .intr_item .item_title h3{
        font-size:14px;
        line-height: 24px;
    }
    .intr_item .item_con img{ 
        width:900px;
        height: 490px;
        border:1px solid #ddd;
    }
</style>

