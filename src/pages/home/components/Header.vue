<template>
    <div class="header">
       <div class="header-left">
           <div class="iconfont icon-back">&#xe624;</div>
       </div>
       <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入游玩信息
        </div>
        <router-link to="/city">
            <div class="header-right">
            {{this.city}}
                <span class="iconfont arrow-icon">&#xe612;</span>
            </div>
        </router-link>   
    </div>
</template>

<script>
export default {
    name:'HomeHeader',
    props: {
        city: String
    }

}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
    display flex
    line-height $headerHeight
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
        float right
        color #ffffff
        text-align center
        .arrow-icon
            margin-left -.04rem
            font-size .3rem
</style>

