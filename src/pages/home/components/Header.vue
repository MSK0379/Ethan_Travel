<template>
    <div class="header">
       <div class="header-left">
           <div class="iconfont icon-back">&#xe624;</div>
       </div>
       <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入游玩信息
        </div>
       <div class="header-right">
           城市 <span class="iconfont">&#xe612;</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'Header'

}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
    display flex
    line-height .86rem
    background $bgColor
    color  #fff
    .header-left
        height .64rem
        float left
        text-align center
        .icon-back
            text-align center
            font-size .4rem

    .header-input
        flex 1
        background #fff
        height .64rem
        line-height .64rem
        border-radius 0.12rem 
        padding-left .2rem
        margin .12rem .2rem
        color #ccc
    .header-right
        width 1.24rem
        float right;
        text-align center


</style>

