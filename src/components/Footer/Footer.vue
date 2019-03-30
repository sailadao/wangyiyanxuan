<template>
 <footer class="footer_guide">
   <a href="javascript:;" class="guide_item" @click="goto('/msite')" :class="{on:this.$route.path==='/msite'}">
     <span class="item_icon">
       <i class="iconfont iconshouye"></i>
     </span>
     <span>首页</span>
   </a>
   <a href="javascript:;" class="guide_item" @click="goto('/classify')" :class="{on:this.$route.path==='/classify'}">
     <span class="item_icon">
       <i class="iconfont iconfenlei"></i>
     </span>
     <span>分类</span>
   </a>
   <a href="javascript:;" class="guide_item" @click="goto('/search')" :class="{on:this.$route.path==='/search'}">
     <span class="item_icon">
       <i class="iconfont iconshibie"></i>
     </span>
     <span>识物</span>
   </a>
   <a href="javascript:;" class="guide_item" @click="goto('/order')" :class="{on:this.$route.path==='/order'}">
     <span class="item_icon">
       <i class="iconfont icongouwuche"></i>
     </span>
     <span>购物车</span>
   </a>
   <a href="javascript:;" class="guide_item" @click="goto('/profile')" :class="{on:this.$route.path==='/profile'}">
     <span class="item_icon">
       <i class="iconfont iconrenwu"></i>
     </span>
     <span>个人</span>
   </a>
 </footer>
</template>

<script>
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      text-align center
      display flex
      flex 1
      flex-direction column
      align-items center
      color #000
      margin 5px
      &.on
        color red
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px



</style>
