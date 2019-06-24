<template>
    <div id="demo">
        <div id="app1">
            <img src="/goods/1.jpg" v-on:click="show = !show">
            <transition name="fade">
                <div class="play_modal" v-if="show">
                    <div class="play_box">
                        <div class="logo">
                        </div>
                        <a href="#javascript:;" class="close_btn" @click="show=fasle">X</a>
                        <div class="play_con">
                            <div class="play_video">
                                <video src="/goods/xuebi.mp4" preload="auto" controls="controls" width="100%" autoplay="true"></video>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div id="app2">
            <img src="/img/resource1.jpg" alt="">
        </div>
        <div id="app3">
            <img src="/img/resource2.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show:false
        }
    }
}
</script>

<style>
    #demo{
        width:100%;
        height:800px;
        display:flex;
        justify-content: space-around;/*项目水平对齐*/
        align-items:flex-end ;/*项目垂直对齐*/
        /* position:relative; */
    }
    #app1{
        border:1px solid #c11;
        height:200px;
        width:300px;
        box-sizing: border-box;
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
    #app2{
        border:1px solid #aff;
        height:200px;
        width:300px;
        box-sizing: border-box;
    }
    img{
        width:100px;
    }
    #app3{
        border:1px solid #f99;
        height:300px;
        width:300px;
        flex-shrink: 0;
    }

</style>
