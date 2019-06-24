<<template>
    <div class="container">
        <div class="contact_us">
            <div class="contact_code">
                <img src="img/contact_code.png" alt="">
            </div>
            <div class="footer_nav">
                <div class="nav_item">
                    <ul>
                        <li>
                            <h5>关于新潮</h5>
                            <a href="javascript:;">公司介绍</a>
                            <a href="javascript:;">企业文化</a>
                        </li>
                        <li>
                            <h5>产品与服务</h5>
                            <a href="javascript:;">产品</a>
                            <a href="javascript:;">服务</a>
                        </li>
                        <li>
                            <h5>加入我们</h5>
                            <a href="javascript:;">联系方式</a>
                            <a href="javascript:;">公司地址</a>
                        </li>
                    </ul>  
                </div>
            </div>
            <div class="footer_contact">
                <p>公司电话：029-89130237</p>
                <p>公司网址：www.dinglicm.com</p>
                <p>企业邮箱：admin@dinglicm.com</p>
                <p>业务洽谈：18092005358（张经理）</p>
                <p>项目合作：18991966606（田经理）</p>
                <p>公司地址：西安市雁塔区绿地中心A座601</p>        
            </div>
        </div>
        <div class="copy_right">
            <!-- <img src="img/logo2.png" alt=""> -->
            <h4>广告投放热线：400-028-0111（工作日9:00-18:00)</h4>
            <p>蜘蛛传媒有限公司 版权所有 All rights Reserved </p>
            <p>© 2012 DINGLI MEDIA 陕 ICP备09012357 号</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    created(){},
    methods:{}
}
</script>

<style scoped>
    .container{
    width:100%;
    margin:0 auto;
}

.contact_us{
    height:200px;
    background: url(/img/contact_bg.jpg)  no-repeat;
    display:flex;
    justify-content: space-around;
    color:#fff;
    align-items: center;
}
.contact_us .contact_code{
    width:156px;
    height: 156px;
}

.contact_us .footer_nav .nav_item{
    height:156px;
}

.contact_us .footer_nav .nav_item ul{
    display: flex;
}
.contact_us .footer_nav .nav_item ul li{
    margin:0 20px;
    display: flex;
    flex-direction: column;
    text-align:start;
}
.contact_us .footer_nav .nav_item h5{
    font-weight: 400;
    font-size:14px;
    line-height: 48px;
}
.contact_us .footer_nav .nav_item a{
    color: #cacaca;
    font-size: 12px;
    line-height: 24px;
}

.contact_us .footer_contact{
    font-size: 14px;
    line-height: 24px;
    text-align: start;
    color: #cacaca;
    border-left:1px solid #ddd;
    padding-left:40px;
}

.copy_right{
    padding:12px 0;
    background-color: #333;
}
.copy_right h4{
    color: #fff; 
    line-height:20px;
    font-size: 10px;
}
.copy_right p{
    color: #999;
    text-align: center;
    line-height:20px;
    font-size: 10px;
}
</style>