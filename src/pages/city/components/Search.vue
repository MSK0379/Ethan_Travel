<template>
    <div>
        <div class="search">
            <input class="search-input"
             type="text" 
             v-model="keyword"
             placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" 
            ref="search"
            v-show="keyword">
            <ul>
                <li class="serach-item border-bottom" 
                    v-for="item of list" :key="item.id">
                    {{ item.name }}
                </li>
                <li class="serach-item border-bottom"
                    v-show="hasNoData">
                    没有找到匹配地址
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll' 
export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data(){
        return{
            keyword:'',
            list: [],
            timer: null
        }
    },
    computed:{
        hasNoData(){
            return !this.list.length;
        }
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            if (!this.keyword ){
                this.list = [];
                return;
            }
            this.timer = setTimeout(() => {
                const result = [];
                for (let i in this.cities) {
                   this.cities[i].forEach(value => {
                       if(value.spell.indexOf(this.keyword) > -1 || 
                            value.name.indexOf(this.keyword) > -1){
                                result.push(value);
                            }
                   });
                }
                this.list = result;
            },100)
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search);
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
        width 100%
        padding 0 .1rem
        box-sizing: border-box 
        height .62rem
        line-height .62rem
        color #666
        text-align center
        border-radius .06rem 
.search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eeeeee
    .serach-item
        line-height .62rem
        padding-left .2rem
        background #ffffff
        color #666
</style>

