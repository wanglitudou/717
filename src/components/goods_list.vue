<template>
   <dl class="goods-catagroy-list">
       <dt>
           <img :src="'http://www.lb717.com'+data.obj_data" alt="">
       </dt>
    <dd>
        <p class="goods-info">
            {{data.goods_name}}
        </p>
        <p class="goods-price">
            <span class="originalPrice">{{data.discount_price}}</span>
            <span class="iconfont icon-caigou-xianxing"></span>
        </p>
    </dd>
  </dl>
</template>
<script>
   export default{ 
       props: {
         data: {
            required: true,
           type: Object
        }
   }
}
</script>
<style scoped>
   .goods-catagroy-list{
       width:49%;
       display: flex;
       justify-content:space-between;
       align-items:center; 
       flex-direction: column;
       margin-top: 0.08rem;
   }
   .goods-catagroy-list dt{
       width:100%;
       height: 3.2rem;
   }
   .goods-catagroy-list dt img{
       width:100%;
       height:100%;
 }
   .goods-catagroy-list .goods-price{
       width: 100%;
       height: 0.45rem;
   }
    .goods-catagroy-list dd{
        background: #ffffff;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 1rem;
        
    }
    .goods-catagroy-list dd .goods-price{
        display: flex;
        justify-content: space-between;
        padding-left: 0.08rem;
        padding-right: 0.08rem;
        align-items: center;
    }
    .goods-catagroy-list dd .goods-price .originalPrice{
        font-size: 0.32rem;
        color:red;
    }
    .goods-catagroy-list dd .goods-price .iconfont{
        font-size: 0.42rem;
    }
</style>

