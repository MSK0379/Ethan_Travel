import Vue from 'vue'
import Vuex from 'vuex'
import state from './state';
import mutations from './mutations'

Vue.use(Vuex)

// 创建仓库,vuex流程
export default new Vuex.Store({
    state,
    // 由于为简单的同步操作不需要actions。在组件中直接调用commit
    // actions: {
    //     changeCity(ctx , city){
    //         ctx.commit('changeCity',city);
    //     }
    // },
    mutations
})