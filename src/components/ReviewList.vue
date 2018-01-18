<template>

    <div>

        <ul>
            <li v-for="r in reviews">
                <router-link :to="`/review/${ r.id }`">{{ r.title }}</router-link>
                <div style="margin: 0">
                    <strong>Resume:</strong> {{ r.abstract }}
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
                horse: 'horse'
            }
        },
        computed: {
            reviews: function() {
                return this.$store.getters.reviews
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
