<template>
    <div>
       <city-header></city-header>
       <city-search :cities ="cities"></city-search>
       <city-list
            :cities ="cities" :hotCities = "hotCities" :letter = "letter">
        </city-list>
       <city-alphabet 
            :cities ="cities"
            @change="handleLetterClick"
       ></city-alphabet>
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
            hotCities: [],
            letter: ''
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
        },
        handleLetterClick(letter) {
            if (!letter) {
                letter = 'A'
            }
           this.letter = letter;  
           
        }
    },
    mounted() {
        this.getCityInfo();
    }

}
</script>

<style lang="stylus" scoped>

</style>

