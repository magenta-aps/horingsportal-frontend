<template>
    <div class="page">

        <navigation></navigation>

        <h1>Høring: {{ review.title }}</h1>
        
        <accordion>
            <label for="write-abstract" slot="header">Resumé</label>
            <div slot="content">
                {{ review.abstract }}
            </div>
        </accordion>

        <accordion>
            <label for="write-text" slot="header">Tekst</label>
            <div slot="content">
                {{ review.text }}
            </div>
        </accordion>

        <accordion>
            <label for="write-complaint" slot="header">Klagevejledning</label>
            <div slot="content">
                {{ review.complaint_guide }}
            </div>
        </accordion>

        <accordion>
            <label for="write-guide" slot="header">Giv din mening til kende/dit høringssvar</label>
            <div slot="content">
            <fieldset>
                {{ review.answer_guide }}
                <textarea id="write-guide" type="text" placeholder="Dit høringssvar"></textarea>
            </fieldset>
            </div>
        </accordion>

        <fieldset>
            <button>Gem kladde</button>
            <button>Preview</button>
            <button class="btn-primary">Indsend</button>
        </fieldset>

    </div>

</template>

<script>

    import Accordion from './Accordion'
    import Navigation from './Navigation'
    import axios from '../services/Http'

    export default {
        name: 'Frontpage',
        components: {
            'accordion': Accordion,
            'navigation': Navigation
        },
        data: function() {
            return {
                review: {}
            }
        },
        methods: {
            getReview: function(review_id) {
                axios.get( `/reviews/${ review_id }` )
                    .then(response => {
                        this.review = response
                    })
                    .catch(err => {
                        console.log('Could not get review information:')
                        console.log(err)
                    })
            }
        },
        watch: {
            '$route': function(params) {
                this.getReview(params.id)
            }
        },
        created: function() {
            
            this.getReview(this.$route.params.id)

        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
