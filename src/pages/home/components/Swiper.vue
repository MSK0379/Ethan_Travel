<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item in list" :key="item.id">
                <img :src="item.imgUrl" class="swiper-img">
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
           swiperOption: {
                autoplay: true, // 自动播放
                loop: true, // 循环播放
                pagination: '.swiper-pagination'
            }
        }
    },
    props: {
        list: Array
    },
    computed: {
        showSwiper(){
            return this.list.length;
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

