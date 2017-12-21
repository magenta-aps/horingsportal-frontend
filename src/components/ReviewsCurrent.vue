<template>

    <div class="page">

        <navigation></navigation>

        <h1>Aktuelle høringer</h1>

        <ul>
            <li v-for="r in reviews">
                <router-link :to="`/review/${ r.sbsys_no }`">{{ r.title }}</router-link>
                <div style="margin: 0">
                    <strong>Resume:</strong> {{ r.abstract }}
                </div>
            </li>
        </ul>

        <form>
            <input type="text">
            <input type="submit" value="Søg" class="btn">
        </form>

    </div>

</template>

<script>

    import Http from '../services/Http'
    import Navigation from './Navigation'

    export default {
        name: 'CurrentHorings',
        components: {
            'navigation': Navigation
        },
        data () {
            return {
                reviews: []
            }
        },
        created: function() {
            this.reviews = Http.get('/reviews/current')
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
