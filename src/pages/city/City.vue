<template>
    <div>
       <city-header></city-header>
       <city-search></city-search>
       <city-list :cities ="cities" :hotCities = "hotCities"></city-list>
       <city-alphabet :cities ="cities"></city-alphabet>
    </div>
</template>

<script>
// 引包
import axios from 'axios'

// 导入组件
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data() {
        return{
            cities: {},
            hotCities: []
        }
    },
    methods:{
        getCityInfo() {
            axios.get('/api/city.json')
            .then(this.handleGetCityInfoSucc);
        },
        handleGetCityInfoSucc( res) {
            // 解析数据
            res = res.data;
            if(res.ret && res.data){
                const data = res.data;
                this.cities = data.cities;
                this.hotCities = data.hotCities;
            }
        }
    },
    mounted() {
        this.getCityInfo();
    }

}
</script>

<style lang="stylus" scoped>

</style>

