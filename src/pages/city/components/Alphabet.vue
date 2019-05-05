<template>
    <ul class="list" >
      <li class="item"
        v-for ="item of letters" :key ="item"
        :ref="item"
        @click ="handleLetterClick"
        @touchstart ="handleTouchStrat"
        @touchmove ="handleTouchMove"
        @touchend ="handleTouchEnd"
      >
        {{item}}
      </li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
      cities: Object
    },
    computed: {
      letters() {
        const letters = [];
        for (let i in this.cities) {
          letters.push(i);
        }
        return letters;
      }
    },
    data() {
      return{
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated(){
      // 初次渲染
      this.startY = this.$refs['A'][0].offsetTop;
    },
    methods:{
      handleLetterClick(e) {
        // 传递change函数，参数为e.target.innerText
        // City中监听此事件
        this.$emit('change',e.target.innerText);
      },
      // 在字母表上滑动实现
      handleTouchStrat(){
        this.touchStatus = true;
      },
      handleTouchMove(e){
        if (this.touchStatus) {
          if(this.timer){
            clearTimeout(this.timer);
          }
          // 延迟执行此函数，降低此函数使用频率
          this.timer = setTimeout(()=>{
            // 计算拖动位置高度
            const touchY = e.touches[0].clientY - 79;
            const index = Math.floor((touchY - this.startY) / 20);
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change',this.letters[index]);
            }
          },20)
          
        }
      },
      handleTouchEnd() {
        this.touchStatus = false;
      }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem
  .item
    line-height .44rem
    text-align center
    color $bgColor
</style>

