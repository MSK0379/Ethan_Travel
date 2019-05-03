<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="(banner,index) in banners" :key="index">
                <img :src="banner" class="swiper-img">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>  
</template>
</template>

<script>
export default {
    name:'HaderSwiper',
    data(){
        return{
            banners:['http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5daa78ddf9a3e3aca32195e079b9545d.jpg_750x200_3aeaa5c2.jpg',
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e1e587f554e5a8372be44a4c6b73a5cf.jpg_750x200_5732f03f.jpg',
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/9f39c398e63315d7375efd08028f040e.jpg_750x200_4f536dd8.jpg'],
            swiperOption: {
                autoplay: true, // 自动播放
                loop: true, // 循环播放
                pagination: '.swiper-pagination'
            //     pagination : {
            //         el:'.swiper-pagination'
            //     }
            }
        }
    }

}
</script>

<style lang="stylus" scoped>
//样式穿透
.wrapper >>> .swiper-pagination-bullet-active
    background #ffffff !important 
.wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.67% 
    background #cccccc
    .swiper-img
        width 100%
</style>

