<template>
    <div class="icons">
        <swiper >
            <swiper-slide v-for="(page , index) of pages" :key="index">
                <div class="icon"
                    v-for="item of page"
                    :key="item.id"
                >
                    <div class="icon-img">
                            <img class="icon-img-content" :src="item.imgUrl" >
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
             <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'icons',
    data (){
        return{
            iconList:[{
                id:'001',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'热门景点'
            },
            {
                id:'002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                desc:'一日游'
            },
            {
                id:'003',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5ea666792b98f34c86faea912b5fbcf9.png',
                desc:'玩转五一'
            },
            {
                id:'004',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                desc:'一日游'
            },
            {
                id:'005',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5ea666792b98f34c86faea912b5fbcf9.png',
                desc:'玩转五一'
            },
            {
                id:'006',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                desc:'一日游'
            },
            {
                id:'007',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5ea666792b98f34c86faea912b5fbcf9.png',
                desc:'玩转五一'
            },
            {
                id:'008',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                desc:'一日游'
            },
            {
                id:'009',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                desc:'动植物园'
            }]
        }
    },
    computed:{
        pages (){
            const pages = [];
            this.iconList.forEach((item , index) => {
                const page =Math.floor(index / 8);
                if(!pages[page]){
                    pages[page] = [];
                }
                pages[page].push(item);
            })
            return pages;
        }
    }

}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'; 
@import '~styles/mixins.styl';
.icons
    overflow hidden
    width 100%
    height 0
    padding-bottom 50%
    .icon
        position relative
        overflow hidden
        float left
        width 25%
        height 0
        padding-bottom 25%
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            box-sizing border-box
            padding .1rem
            .icon-img-content
                display block
                margin 0 auto
                height 100%
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            text-align center
            color $darkTextColor
            ellipsis()




</style>
