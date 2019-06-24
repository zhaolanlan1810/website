<template>
    <div id="pagination_pages">
        <ul class="pagination_main">
            <li :class="{'display':current==1}">
                <a href="javascript:;"> 上一页 </a>    
            </li>
            <li :class="{'disabled':current==1}">
                <a href="javascript:;">首页</a>
            </li>
            <li :class="{'active':current==item.val}"
            v-for="(p,index) of grouplist" :key="index">
                <a href="javascript:; " >{{p}}</a>
            </li>
            <li :class="{'display':current==page}">
                <a href="javascript:;" >尾页</a>
                </li>
            <li :class="{'disabled': current == page}">
                <a href="javascript:;" >下一页</a>
            </li>
        </ul>
    </div>
</template>
 <script>
 export default {
     data(){
         return{
             current:1,
             pageNum:10,
             grouplist:[1,2,3,4,5],
             page:2,
             item:{text:3,val:3}
             }
     },
     methods:{
        
     },
     computed:{
        
     }
    //  props:{
    //      current:{//当前页码
    //          type:Number,
    //          default:1
    //      },
    //     total:{//数据总
    //         type:Number,
    //             default:0
    //             },
    //     display:{//每页显示条数
    //         type:Number,
    //         default:10
    //     },
    //     pageGroup:{//分页条数---奇数
    //         type:Number,
    //         default:5,
    //         coerce:function(v){
    //             v=v>0?v:5;
    //             return v%2===1?v:v+1;
    //         }
    //     }
    //  },
    //  watch:{
    //      current:{
    //          handler:function(newVal,oldVal){
    //              this.current=newVal
    //          },
    //          deep:true
    //      }
    //  },
    //  computed:{
    //      page:function(){//总页数
    //          return Math.ceil(this.total/this.display)
    //      },
    //      grouplist: function(){//获取分页页码
    //         var len=this.page;//总页数
    //         var temp=[];
    //         var list=[];
    //         var count=Math.floor(this.pageGroup/2);//向下取整
    //         var center=this.current;//当前页
    //         if(len<this.pageGroup){//页码不够5页时:4,3,2,1
    //             while(len--){
    //                 temp.push({
    //                     text:this.page-len,
    //                     val:this.page-len
    //                 });
    //                 return temp;
    //             };
    //         }

    //         while(len--){
    //             temp.push(this.page-len);//5页，1，2，3，4,5...
    //         };
    //         var idx=temp.indexOf(center);//查找center出现的位置，center为当前页
    //         (idx<count)&&(center=center+count-idx);
    //         (this.current>this.page-count)&&(center=this.page-count);
    //         temp=temp.splice(center-count-1,this.pageGroup);
            
    //         do{
    //             var t=temp.shift();//删除并返回temp的第一个值
    //             list.push({
    //                 text:t,
    //                 val:t
    //             });
    //         }while(temp.length);
    //         if(this.page>this.pageGroup){
    //             (this.current>count+1)&&list.unshift({
    //                 text:'...',
    //                 val:list[0].val-1
    //             });
    //             (this.current<this.page-count)&&list.push({
    //                 text:'...',
    //                 val:list[list.length-1].val+1
    //             });
    //         }
    //         return list;
    //      }
    //  },
    //  methods:{
    //      setCurrent:function(idx){
    //          if(this.current!=idx && idx>0 && idx<this.page+1){
    //              this.current=idx;
    //              this.$emit("pagechange",this.current);
    //          }
    //      }
    //  }
 }
 </script>


 <style scoped>
    .pagination_main{
        display: table;
        margin:0 auto;
        height: 50px;
        text-align: right;
        width:100%;
    }
    .pagination_main li{
        display: inline-block;
        height:42px;
        min-width: 32px;
        margin:5px;
        background:#fff;
        border:1px solid #ddd;
    }
   .pagination_main a{
       display: block;
       min-width: 32px;
       height:42px;
       text-align: center;
       line-height: 42px;
       font-size:14px;
       text-decoration: none;
       color:#333;
       padding:0 10px;
   } 
   .pagination_main a:hover{
       color:#b81b22;
   }
 </style>
 