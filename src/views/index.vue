<template>
  <div class="container">
      <router-view class="wrapper"></router-view>
      <ul class="nav">
          <router-link :tag="'li'" :to="{name:'home'}">
              <span class="iconfont icon-shouye"></span>
              <span class="spanInfo">首页</span> 
          </router-link>
          <router-link :tag="'li'" :to="{name:'catagory'}"> 
              <span class="iconfont icon-yingyongchengxu-xianxing"></span>
              <span class="spanInfo">分类</span> 
          </router-link>
          <router-link :tag="'li'" :to="{name:'cart'}">
              <span class="iconfont icon-caigou-xianxing"></span>
              <span class="spanInfo">购物车</span>
          </router-link>
          <router-link :tag="'li'" :to="{name:'mine'}">
              <span class="iconfont icon-xiaoxizhongxin"></span>
              <span class="spanInfo">我的</span>
          </router-link>
      </ul>
  </div>
</template>
<script>
    export default{

    }
</script>
<style>
.container{
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #cccccc;
}
.wrapper{
    flex: 1;
}
.nav{
    height: 0.88rem;
    display: flex;
    background: #ffffff;
}
.nav li{
    flex: 1;
    text-align: center;
}
.router-link-active{
    color:red;
}
.nav li span{
    display: block;
    height:50%;
}
.nav li .iconfont{
    font-size: 0.44rem;
}
/* .nav li .spanInfo{
    
} */
</style>

