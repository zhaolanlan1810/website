<template>
    <div class="menus">
        <ul>
            <li v-for="(item,index) in menus" :key="index" >
                <router-link :to="item.path" 
                :class="{active:path===item.metaName}"
                >{{item.text}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            path:this.$route.meta.name,
            menus:[
                {
                    text:'首页',
                    path:'/',
                    metaName:'home'
                },
                {
                    text:'关于蜘蛛文化',
                    path:'/about',
                    metaName:'about'
                },
                {
                    text:'媒体资源',
                    path:'/resource',
                    metaName:"resource"
                },
                {
                    text:'合作案例',
                    path:'/case',
                    metaName:'case'
                },
                {
                    text:'联系我们',
                    path:'/contact',
                    metaName:'contact'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .nav{
        float:right;
        font-size:14px;
        line-height:78px;
    }
    .nav ul{
        display:flex;
        align-content: space-around;
    }
    .nav ul li{
        margin:0 10px;
    }
    .nav ul li a{
        color:#333;
        display: inline-block;
        height:55px;
    }
     .nav ul li a:hover{
        color:#b81b22;
        border-bottom:2px solid #b81b22;
     }
    .nav ul li .active{
        border-bottom: #b81b22 solid 2px;
        color: #b81b22;
    }
</style>
