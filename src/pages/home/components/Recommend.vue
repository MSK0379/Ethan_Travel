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
            recommendList:[{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/65/65a949083122447da3.img.jpg_200x200_c4b2f699.jpg',
                title:'华谊兄弟电影世界',
                desc:'2480条评论'
            },{
                id:'0002',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
                title: '上海迪士尼乐园',
                desc: '全球最大的迪士尼乐园'
            },{
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/65/65a949083122447da3.img.jpg_200x200_c4b2f699.jpg',
                title:'华谊兄弟电影世界',
                desc:'2480条评论'
            },{
                id:'0004',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
                title: '上海迪士尼乐园',
                desc: '全球最大的迪士尼乐园'
            },{
                id: '0005',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/65/65a949083122447da3.img.jpg_200x200_c4b2f699.jpg',
                title:'华谊兄弟电影世界',
                desc:'2480条评论'
            },{
                id:'0006',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
                title: '上海迪士尼乐园',
                desc: '全球最大的迪士尼乐园'
            },{
                id: '0007',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/65/65a949083122447da3.img.jpg_200x200_c4b2f699.jpg',
                title:'华谊兄弟电影世界',
                desc:'2480条评论'
            },{
                id:'0008',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
                title: '上海迪士尼乐园',
                desc: '全球最大的迪士尼乐园'
            }]
        }
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

