<template>
    <div class="page">

        <navigation></navigation>

        <h1>Høring: {{ review.data_title }}</h1>
        
        <accordion>
            <label for="write-abstract" slot="header">Resumé</label>
            <div slot="content">
                {{ review.data_abstract }}
            </div>
        </accordion>

        <accordion>
            <label for="write-text" slot="header">Tekst</label>
            <div slot="content">
                {{ review.data_text }}
            </div>
        </accordion>

        <accordion>
            <label for="write-complaint" slot="header">Klagevejledning</label>
            <div slot="content">
                {{ review.data_complaint_guide }}
            </div>
        </accordion>

        <accordion>
            <label for="write-guide" slot="header">Giv din mening til kende/dit høringssvar</label>
            <div slot="content">
            <fieldset>
                {{ review.data_answer_guide }}
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
        watch: {
            '$route': function() {
                this.getReview()
            }
        },
        methods: {
            getReview: function() {
                axios.get(`/reviews/${this.$route.params.id}/`)
                    .then(res => {
                        this.review = res.data
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        },
        created: function() {
            this.getReview()
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
