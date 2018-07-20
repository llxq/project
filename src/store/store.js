import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: ''
    },
    mutations: {
        add(state, msg) {
            state.title = msg;
        }
    }
})