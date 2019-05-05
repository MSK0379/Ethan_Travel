<template>
    <div class="list" ref = 'wrapper'>
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" 
                        v-for="item of hotCities" :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div 
                class="area" 
                v-for="(item,key)  of cities" :key="key"
                :ref="key"
            >
                <div class="title  border-topbottom">{{key}}</div>
                <div class="item-list"
                    v-for="innerItem of item" :key="innerItem.key"
                    @click="handleCityClick(innerItem.name)"
                >
                    <div class="item border-bottom">{{innerItem.name}}</div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState , mapMutations} from 'vuex'
export default {
    name:'CityList',
    props:{
        cities:Object,
        hotCities: Array,
        letter: String
    },
    computed: {
        ...mapState({
            currentCity: 'city'
        })
    },
    methods:{
        handleCityClick(city){
            // 调用action:派发changeCity方法传递参数为city
            // this.$store.dispatch('changeCity',city);
            // 由于为简单的同步操作不需要actions。在组件中直接调用commit
            // this.$store.commit('changeCity',city); 
            this.changeCity(city); // 由于在使用了 ...mapMutations(['changeCity'])
            this.$router.push('/');
        },
        ...mapMutations(['changeCity'])
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.wrapper);
    },
    watch: {
        letter() {
            if (this.letter) {
                // 找到对应元素
                const element = this.$refs[this.letter][0];
                //  滑动至对应位置
                this.scroll.scrollToElement(element)
            }
        }
    }

}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>

