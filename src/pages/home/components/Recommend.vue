<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    data (){
        return{

        }
    },
    props:{
        recommendList: Array
    }

}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
    line-height .8rem
    background #eeeeee
    text-indent .2rem
    margin-top .1rem
.item
    display flex
    height 2rem
    .item-img
        width 1.8rem
        height 1.8rem
        padding .1rem
    .item-info
        flex 1
        min-width 0
        padding .1rem
        .item-title
            line-height .7rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .5rem
            color :#ccc
            ellipsis()
        .item-button
            background #ff9300
            height .5rem
            padding 0 .3rem
            border-radius .06rem
            color #fff
</style>

