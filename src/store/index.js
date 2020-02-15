import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        foo: true,
    },
    getters: {
        foo: state => state.foo,
    },
    mutations: {
        setFoo (state, payload) {
            state.foo = payload;
        },
    },
    actions: {
        updateFoo ({ commit }, payload) {
            commit('setCustomList', payload);
        },
    },
});