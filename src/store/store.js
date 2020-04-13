import Vue from "vue";
import Vuex from 'vuex'; //npm install vuex --save

Vue.use(Vuex);

//Основной store
export default new Vuex.Store({
    //Data
    state: {
        count: 1
    },
    //Actions
    actions: {
        actIncrement({commit, state}) {
            let test = state.count;
            test++;
            commit('mutIncrement', test)
        }
    },
    //Mutations
    mutations: {
        mutIncrement (state, payload) {
            state.count = payload;
        }
    },
    //Getters
    getters: {
        getCount(state) {
            return state.count;
        }
    }
})