<template>
    <div class="page">

        <navigation></navigation>

        <h1>Høring hos modtager</h1>

        <h2>{{ review.title }}</h2>
        
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
    import Http from '../services/Http'

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
            '$route': function(params) {
                this.review = Http.getReview( params.sbsys_no )[0]
            }
        },
        created: function() {
            this.review = Http.getReview( this.$route.params.sbsys_no )[0]
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
