<template>
  <div class="container">
      <div class="head"> 
          <span class="span"><img src="../assets/images/icon.png" alt=""></span>
          <input type="text" placeholder="请输入您要购买的商品" @focus="go_to_search">
          <span class="span-icon"> 
              <img src="../assets/images/icon.png" alt="">
              <p>我的店铺</p>     
          </span>
          <span class="span-img">
              <i class="iconfont icon-xiaoxizhongxin"></i>
              <p>消息</p> 
          </span>
      </div>
      <!-- <div class="section" ref="scrollTop" v-on="scroll:'getScrollTop'"> -->
        <div ref="scroll">  
         <div class="banner">
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="../assets/images/img/1.png" alt=""></div>
                  <div class="swiper-slide"><img src="../assets/images/img/2.png" alt=""></div>
                  <div class="swiper-slide"><img src="../assets/images/img/3.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="../assets/images/img/4.png" alt=""></div>
                  <div class="swiper-slide"><img src="../assets/images/img/5.png" alt=""></div>
              </div>
          </div>
      </div>
        <div class="nav-list">
          <ul>
              <li>
                   <span class="iconfont icon-xiaoxizhongxin"></span>
                  <p>牛奶乳品</p>
              </li>
              <li>
                 <span class="iconfont icon-xiaoxizhongxin"></span>
                  <p>家乡味道</p>
              </li>
              <li>
                 <span class="iconfont icon-xiaoxizhongxin"></span>
                  <p>休闲零食</p>
              </li>
              <li>
                   <span class="iconfont icon-xiaoxizhongxin"></span>
                  <p>米面粮油</p>
              </li>
              <li>
                  <span class="iconfont icon-xiaoxizhongxin"></span>
                  <p>调味调料</p>
              </li>
              <li>
                   <span class="iconfont icon-xiaoxizhongxin"></span>
                  <p>酒水饮料</p>
              </li>
              <li>
                    <span class="iconfont icon-xiaoxizhongxin"></span>
                  <p>生鲜果蔬</p>
              </li>
              <li>
                   <span class="iconfont icon-xiaoxizhongxin"></span>
                  <p>进口食品</p>
              </li>
          </ul>
          <div class="lunbo">
              <div class="left"> <span>商城动态</span></div>
              <div class="right">
                <p>7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！</p>
                <p>717商城社区服务功能正式上线！抢红包！晒家乡！好吃、好玩、好看尽在717商城社区！</p>
             </div>  
            
          </div>
           <div class="today">
                 <span class="iconfont icon-xiaoxizhongxin">天天特惠</span>
                 <span>每天有惊喜</span>
                 <span>更多</span>
					<!-- <span>
						<i> <span class="iconfont icon-xiaoxizhongxin"></span></i>
						<label>天天特惠</label><small>每天有惊喜</small>
					</span>
					<p></a></p> -->
				</div> 
        </div>
        <!-- 下拉图片 -->
      <!-- <div class="goods-catagory">
          <goods-list v-for="(x,i) in goods_list" :data="x" :key="i"></goods-list>
      </div> -->
    </div>
  <!-- </div> -->
</div>
</template>
<script>
    import goods_list from '../components/goods_list.vue'
    import jsonp from '../utils/jsonp'
    export default{
        data(){
           return {
               goods_list:[]
           }
        },
        methods:{
           getScrollTop:function(){

           },
           queryGoodsList(){
               this.axios.post('/mall/index/getGoodsChannel',{
                   channel_id:2
               }).then(res=>{
                   console.log(res)
               })
           }
        },
        components:{
            "goods-list":goods_list
        },
        updated:function() {
            // console.log(this.$refs.scroll.offsetHeight);
        },
        mounted:function(){
        //    console.log(this.$refs.scrollTop.offsetHeight);
           var myswiper=new Swiper(".swiper-container",{
                loop:true,
                autoplay:1000
          })
          var vm=this; 
          var url = 'https://h5api.m.tmall.com/h5/mtop.tmall.supermarket.itempromotion.get/1.0/?jsv=2.4.8&appKey=12574478&t=1510717156274&sign=24e770dfa98a7f3541e17afeecde9ac1&api=mtop.tmall.supermarket.itempromotion.get&AntiCreep=true&v=1.0&type=jsonp&dataType=jsonp&callback=mtopjsonp16&data=%7B%22itemIds%22%3A%22537668615233%2C14313684513%2C530435938954%2C41018401179%2C547746784042%2C523374121465%2C523022301088%2C20263873324%2C39859825663%2C524825958240%2C541971437810%2C534921738993%2C37348244535%2C533148975516%2C20251586460%2C541955453529%2C44126168670%2C523216956192%2C531176938603%2C524512535086%22%2C%22smAreaId%22%3A110100%2C%22device%22%3A%22wap%22%2C%22option%22%3A%22price%22%2C%22source%22%3A%22channel_industry_market%22%7D';
          this.axios.post('/mall/index/getGoodsChannel',{channel_id:3}).then(res=>{
              console.log(res.data)
               vm.goods_list = res.data.data.data
        })
     },
     methods:{
         go_to_search(){
             this.$router.push("/search")
         }
     }
 }
</script>
<style scoped>
.scroll{
   overflow-y: scroll;

}
.today{
    width: 100%;
    line-height: 0.5rem;
    background: #fff;
    display: flex
}
.today span{
   display: inline-block;
   width: 33.3%;
   text-align: center;
   font-size: 10px;
   color:#ff6d00;
}
.lunbo{
    width: 100%;
    display: flex;
    background: #eee;
}
.left{
    width: 18%;
    height: 1rem;
    background: #eee;
}
.left span{
    width: .9rem;
    height: .64rem;
    font-size: 17px;
    display: inline-block;
    line-height: .4rem;
    color: #ff6d00;
    margin-left: 40%;
}
.right{
    background: #eee;
     width: 82%;
    height: .64rem;
    padding-left: 3px;
    display: inline-block;
    padding-top: .05rem;
    padding-bottom: .1rem;
    border: 1px solid #e5e5e5;
    font-size: .24rem;
    line-height: .64rem;
    text-indent: .02rem;
    color: #666;
    border-radius: 5px;
    overflow: hidden;
}
.right p{
    width:100%;
    height: 0.64rem;
    overflow: hidden;
    padding-bottom: 0.1rem;
}
   .container{
      display: flex; 
      flex-direction: column;
   }
   .section{
      flex: 1;
      overflow-y: scroll;
  }
   .head{
       height: 0.9rem;
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding-left: 0.12rem;
       padding-right: 0.12rem;
       background: #ffffff;
   }
   .head .span img{
       width:0.5rem;
       height:0.46rem
   }
   .head .span-icon{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       color:red;
   }
   .head .span-icon img{
       width:0.5rem;
       height:0.46rem;
   }
    .head .span-img{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       color:red;
   }
   input{
       width: 65%;
       height: 0.55rem;
       background: #f5f5f5;
       border-radius: 0.12rem;
       border: 0;
       color:#e9e9e9;
       font-size: 0.24rem;
       padding-left: 0.45rem;
   }
   .banner{
       height: 2.6rem;
   }
   .banner .swiper-container{
       width:100%;
       height:2.6rem;
   }
   .banner .swiper-container img{
       width:100%;
       height:auto;
   }
   .nav-list ul{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding-top:0.1rem;
      padding-bottom: 0.1rem;
      background: #ffffff
   }
   .nav-list ul li{
       width: 25%;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       margin-top:0.2rem;
       
   }
   .nav-list ul li span{
       display: block;
       width:0.84rem;
       height: 0.84rem;
       border-radius: 50%;
       background: #f8c986;
       text-align: center;
       line-height: 0.84rem;
       color: #ffffff
   }
   .nav-list ul li span img{
       width:100%;
       height:100%;
   }
   .goods-catagory{
       display: flex;
       flex-wrap: wrap;
       justify-content:space-between;
   }
</style>

