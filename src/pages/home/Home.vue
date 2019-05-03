<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
// 引入header
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
    name: 'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }

}
</script>

<style>

</style>
