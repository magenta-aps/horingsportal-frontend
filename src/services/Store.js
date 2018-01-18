import Vue from 'vue'
import Vuex from 'vuex'
import axios from './Http'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        reviews: [],
        partial_review: {},
        user: null
    },
    mutations: {
        storePartialReview: function(obj) {
            this.state.partial_review = obj
        },
        updateReviews: function(reviews) {
            this.state.reviews = reviews
        },
        storeUser: function(state, userData) {
            state.user = userData
            console.log('user stored')
        }
    },
    actions: {
        login: function({commit}, authData) {
            axios.get(`/users?user_name=${ authData.user }`)
                .then(response => {
                    commit('storeUser', response.data[0])
                })
                .catch(err => {
                    console.log('Could not fetch user info')
                    console.log(err)
                })   
        }
    },
    getters: {
        user: function(state) {
            return state.user
        },
        reviews: function(state) {
            axios.get('/reviews/')
                .then(response => {
                    console.log(response)
                    state.reviews = response.data
                    return state.reviews
                })
                .catch(err => {
                    console.log('Could not fetch reviews')
                    console.log(err)
                })
        }
    }
})