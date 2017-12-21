import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        reviews: [],
        partial_review: {}
    },
    getters : {
        
    },
    mutations: {
        storePartialReview: function(obj) {
            this.state.partial_review = obj
        },
        updateReviews: function(reviews) {
            this.state.reviews = reviews
        }


    }
})