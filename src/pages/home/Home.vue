<template>
    <div>
        <home-header></home-header>
        <home-swiper :list = "swiperList"></home-swiper>
        <home-icons :iconList = "iconList"></home-icons>
        <home-recommend :recommendList = "recommendList"></home-recommend>
        <home-weekend :weekendList = "weekendList"></home-weekend>
    </div>
</template>

<script>
// 引入header
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
//引用axios
import axios from 'axios'
// 使用keep-alive
import { mapState } from 'vuex'
export default {
    name: 'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data(){
        return{
            lastCity : '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    computed:{
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo() {
            axios.get('/api/index.json?city=' + this.city)
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            res = res.data;
            if (res.ret && res.data) {
                const data = res.data;
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList;
            }
        }
    },
    // 页面首次加载时
    mounted (){
        this.lastCity = this.city;
        this.getHomeInfo()
    },
    // 使用周期函数时多出来的周期函数
    activated () {
        // 重新回到页面上时，若改变了当前城市，则重新发送请求
        if (this.lastCity !== this.city ) {
            this.lastCity = this.city;
            this.getHomeInfo();
        }
    }
}
</script>

<style>

</style>
