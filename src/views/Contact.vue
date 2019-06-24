<template>
    <div id="contact_page">
        <div class="contact_us">
            <div class="banner">
                <img src="/img/contact_banner.jpg" alt="">
            </div>

            <div class="main_con">
                <div class="info">
                    <div class="info_left">
                        <div class="info_img">
                            <img src="/img/office.jpeg" alt="">
                        </div>
                        <div class="info_group">
                            <div class="title">
                                <h3>公司总部&nbsp;西安</h3>
                                <em></em>
                            </div>
                            <h5>西安市雁塔区绿地中心A座601</h5>        
                            <p>业务洽谈：18092005358（张经理）</p>
                            <p>项目合作：18991966606（田经理）</p>
                        </div>
                    </div>

                    <div class="info_right">
                        <div class="contact_form">
                            <h3>提交您的需求我们直接联系您！</h3>
                            <div class="input_con">
                                <input type="text" 
                                v-model="form.name" 
                                name="name"
                                placeholder="您的称呼">
                                <em>*</em>
                            </div>
                            <div class="input_con">
                                <input type="text" 
                                v-model="form.phone"
                                name="phone"
                                placeholder="您的电话">
                                <em>*</em>
                            </div>
                            <div class="input_con">
                                <input type="text" 
                                v-model="form.city"
                                name="city"
                                placeholder="请选择您所在的城市">
                                <em>*</em>
                            </div>
                            <div class="input_con">
                                <input type="text" 
                                v-model="form.trade"
                                name="trade"
                                placeholder="请选择公司所属行业">
                            </div>
                            <div class="input_con">
                                <textarea 
                                name="remark"
                                v-model="form.remark"
                                placeholder="请填写您的其他需求"></textarea>
                            </div>
                            <button class="submit_btn" @click="submit">我要投放</button>
                        </div>
                    </div>
                    <span class="info_title"></span>
                </div>

                <div class="address">
                    <img src="/img/contact_map.png" alt="">
                </div>
            </div>
        </div> 
    </div>
</template>

<script>

export default {
    
    data(){
        return{
            form:{
                name:'',
                phone:'',
                city:'',
                area:'',//区域
                trade:'',//行业
                remark:'',
                areacity:[],
            }
        }
    },
    created(){},
    methods:{
        // 提交表单信息
        submit(){
            var f=this.form;
            // console.log(f);
            if(f.name.length===0){
                this.$toast.open({
                    message:'称呼不能为空！',
                    type:'error',
                    position:'top',
                    durition:500
                });
                return;
            }else if(f.name.length>20){
                this.$toast.open({
                    message:'称呼限定20个字符',
                    type:'error',
                    position:'top'
                });
                return;
            }

            if(f.phone.length===0){
                this.$toast.open({
                    message:'联系电话不能为空！',
                    type:'error',
                    position:'top'
                });
                return;
            }
            if(!/^1[3-5,7,8][0-9]{9}$/.test(f.phone)){
                this.$toast.open({
                    message:'联系电话格式有误！',
                    type:'error',
                    position:'top'
                });
                return;
            }
            if(f.city.length===0){
                this.$toast.open({
                    message:'请选择所在城市！',
                    type:'error',
                    position:'top'
                });
                return;
            }
            this.form={};
            console.log(f);
            // 发送请求
            var url="/fake/ResourceData.json?uname="+f;
            this.axios.get(url).then(result=>{
                this.$toast.open({
                    message: '投放需求提交成功，您的专属顾问将尽快与您联系！',
                    type: 'success',
                    position: 'top'
                });
            })
        }
    }
}
</script>

<style scoped>
    
    .banner{
        height:360px;
    }
    .banner img{
        width:100%;
        height:100%;
    }

    .main_con{
        width:1200px;
        margin:50px auto;
        padding-top:50px;
    }

    .info{
        height:500px;
        border:1px solid #ddd;
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding:0 0 0 60px;
        position: relative;
    }
    .info_left{
        width:50%;
        display: flex;
        justify-content: space-between;
    }

    .info_left .info_img img{
        width:200px;
        height:200px;
    }
    .info_left .info_group{
        width:55%;
        text-align:start;
        margin-left:20px;
    }
    .info_left .info_group .title{
        width:218px;
        height:30px;
        background-color:#B81c22;
        color:#fff;
        padding-left: 10px;
        margin:20px 0;
        position: relative;
    }
    .info_left .info_group .title em{
        display:inline-block;
        width:228px;
        height: 30px;
        border:1px solid #B81c22;
        position: absolute;
        top:-4px;
        left:2px;
    }
     .info_left .info_group .title h3{
         font-size: 16px;
         font-weight:600;
         line-height: 30px;
     }
     .info_left .info_group p{
        font-size:14px;
        line-height: 30px;
    }
     .info_left .info_group h5{
        font-size:14px;
        line-height: 30px;
        color:#666;
    }

     .info_right{
        width:50%;
        height:420px;
        margin-left:60px;
    }
    .info_right .contact_form{
        width:340px;
        padding:25px;
        border:1px solid #ddd;
        box-shadow:0 2px 6px 0 rgba(0,0,0,0.06);
        margin:0 auto;
    }
    .contact_form h3{
        font-size: 16px;
        font-weight: bold;
        line-height: 40px;
    }
    .contact_form .input_con{
        margin-bottom:10px;
    }
    .contact_form .input_con em{
        color:#b81c22;
    }
    .contact_form .input_con input,.contact_form .input_con select{
        border-radius: 2px;
        width:286px;
        height:30px;
        padding-left:5px;
    }
    textarea{
        width:286px;
        height:80px;
        padding-left:5px;
    }
    .submit_btn{
        width:296px;
        height: 40px;
        background: rgba(184,28,34,1);
        color:#fff;
        border:none;
        display: block;
        font-size: 16px;
        margin:0 auto;
    }
    .info_title{
        background:url("/img/contact_title.png") no-repeat;
        position:absolute;
        top:-40px;
        left:10px;
        width: 365px;
        height: 60px;
    }

    .address{
        width:1200px;
        height:390px;
        border:1px solid #ddd;
        margin-top:50px;
    }
    .address img{
        width:100%;
        height: 100%;
    }


</style>
