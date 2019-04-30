<template>
    <div class="header">
       <div class="header-left">返回</div>
       <div class="header-input">输入游玩信息</div>
       <div class="header-right">登陆</div>
    </div>
</template>

<script>
export default {
    name:'Header'

}
</script>

<style lang="stylus" scoped>
.header{
    display flex;
    line-height .86rem;
    background #00bcd4;
    color  #fff;
    .header-left{
        height .64rem;
        float left;
        text-align center;
    } 
    .header-input{
        flex 1;
        background #fff;
        height 
        line-height .64rem;
        border-radius 0.12rem ;
        margin .12rem .2rem;
        color #ccc;
    }
    .header-right{
        width 1.24rem;
        float right;
        text-align center;
    }
}
</style>

