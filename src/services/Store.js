import Vue from 'vue'
import Vuex from 'vuex'
import axios from './Http'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        reviews: [],
        user: null
    },
    getters: {
        user: function(state) {
            return state.user
        },
        reviews: function(state) {
            return state.reviews
        }
    },
    mutations: {
        updateReviews: function(state, reviews) {
            state.reviews = reviews
        },
        storeUser: function(state, userData) {
            state.user = userData
        }
    },
    actions: {
        login: function({commit}, authData) {
            axios.get(`/users?name=${ authData.user }`)
                .then(res => {
                    commit('storeUser', res.data[0])
                })
                .catch(err => {
                    console.log('Could not fetch user info')
                    console.log(err)
                })   
        },
        fetchReviews: function({commit}) {
            axios.get('/reviews/')
                .then(res => {
                    commit('updateReviews', res.data)
                })
                .catch(err => {
                    console.log('Could not fetch reviews')
                    console.log(err)
                })
        }
    }
})