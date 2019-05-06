<template>
    <div>
        <div class="banner" @click="handleBannerClick">
        <img class="banner-img" 
        src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="故宫">
        <div class="banner-info">
            <div class="banner-info-tatil">故宫(AAAAA景区)</div>
            <div class="banner-info-number">
                <span class="iconfont banner-icon">&#xe695;</span> 8</div>
        </div>
        </div>
        <common-gallary :imgs = "imgs"
        @close = "handleGralaryClose"
         v-show="showGallary"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    components:{
       CommonGallary
    },
    data(){
        return{
            showGallary: false,
            imgs: [
                'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg',
                'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg',
                'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_r_800x800_c59f0eba.png'
            ]
        }
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true;
        },
        handleGralaryClose () {
            this.showGallary = false;
        }


    }
}
</script>

<style lang="stylus" scoped>
.banner
    overflow hidden
    position relative
    height 0;
    padding-bottom 55%
    .banner-img
        width 100%
    .banner-info
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        line-height .6rem
        color #ffffff
        background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
        .banner-info-tatil
            flex 1
            font-size .32rem
            padding 0 .2rem
        .banner-info-number
            height .4rem
            padding 0 .4rem
            margin-top .14rem
            line-height .4rem
            border-radius .2rem
            background rgba(0, 0, 0, .8)
            font-size .24rem
            .banner-icon
                font-size .24rem
</style>

