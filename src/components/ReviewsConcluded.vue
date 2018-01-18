<template>
  
    <div class="page">
    
        <navigation></navigation>

        <h1>Afsluttede høringer</h1>

        <review-list></review-list>

        <fieldset>
            <input type="text">
            <input type="submit" value="Søg" class="btn">
        </fieldset>

    </div>

</template>

<script>

    import Accordion from './Accordion'
    import Navigation from './Navigation'
    import ReviewList from './ReviewList'

    export default {
        name: 'Frontpage',
        components: {
            'accordion': Accordion,
            'navigation': Navigation,
            'review-list': ReviewList
        },
        data () {
            return {
                msg: 'hest'
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
