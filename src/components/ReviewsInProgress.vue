<template>

    <div class="page">

        <navigation></navigation>

        <h1>Aktuelle høringer</h1>

        <review-list></review-list>

        <form>
            <input type="text">
            <input type="submit" value="Søg" class="btn">
        </form>

    </div>

</template>

<script>

    import Http from '../services/Http'
    import Navigation from './Navigation'
    import ReviewList from './ReviewList'

    export default {
        name: 'ReviewsInProgress',
        components: {
            'navigation': Navigation,
            'review-list': ReviewList
        },
        data () {
            return {
                hest: 'hest'
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
