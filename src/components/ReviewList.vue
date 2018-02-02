<template>

    <div>
        <ul>
            <li v-for="r in reviews">
                <router-link :to="`/review/${ r.id }`">{{ r.data_title }}</router-link>
                <div style="margin: 0">
                    <strong>Resume:</strong> {{ r.data_abstract }}
                </div>
            </li>
        </ul>

    </div>

</template>

<script>

    import axios from '../services/Http'
    import Navigation from './Navigation'

    export default {
        name: 'ReviewList',
        data () {
            return {
                reviews: []
            }
        },
        watch: {
            '$route': function() {
                this.getReviews()
            }
        }, 
        methods: {
            getReviews: function() {
                axios.get('/reviews/')
                    .then(res => {
                        this.reviews = res.data
                    })
                    .catch(err => {
                        console.log('Could not fetch reviews')
                        console.log(err)
                    })
            }
        },
        created: function() {
            this.getReviews()
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
