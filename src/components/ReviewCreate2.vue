<template>

    <div class="page">

        <navigation></navigation>

        <h1>Skriv høring</h1>

        <fieldset>
            <label for="write-header">Overskrift</label>
            <input id="write-header" type="text" placeholder="Overskrift" v-model="review.title">
        </fieldset>

        <accordion>
            <label for="write-abstract" slot="header">Resumé</label>
            <div slot="content">
                <fieldset>
                <textarea id="write-abstract" type="text" placeholder="Her skrives et kort resumé af sagen" v-model="review.abstract"></textarea>
                </fieldset>
            </div>
        </accordion>

        <accordion>
            <label for="write-text" slot="header">Tekst</label>
            <div slot="content">
                <fieldset>
                <textarea id="write-text" type="text" placeholder="Her skrives teksten if. til høring" v-model="review.text"></textarea>
                </fieldset>
            </div>
        </accordion>

        <accordion>
            <label for="write-guide" slot="header">Giv din mening til kende</label>
            <div slot="content">
                <fieldset>
                <textarea id="write-guide" type="text" placeholder="Vejledning til at udtrykke sin mening" v-model="review.answer_guide">Sådan giver du din mening til kende ift. en høring.</textarea>
                </fieldset>
            </div>
        </accordion>

        <accordion>
            <label for="write-complaint" slot="header">Klagevejledning</label>
            <div slot="content">
                <fieldset>
                <textarea id="write-complaint" type="text" placeholder="Vejledning til at klage" v-model="review.complaint_guide">Sådan klager du over noget, der er til høring.</textarea>
                </fieldset>
            </div>
        </accordion>

        <fieldset>
            <label for="upload-doc">Upload fil</label>
            <input id="upload-doc" type="file">
        </fieldset>

        <fieldset>
            <button @click="notPublishReview">Gem kladde</button>
            <button @click="reviewReview">Til kommentar</button>
            <button class="btn-primary" @click="publishReview">Udgiv nu</button>
        </fieldset>

    </div>

</template>

<script>

    import Accordion from './Accordion'
    import Http from '../services/Http'
    import Navigation from './Navigation'

    export default {
        name: 'Frontpage',
        components: {
            'accordion': Accordion,
            'navigation': Navigation
        },
        data () {
            return {
                review: {
                    title: '',
                    abstract: '',
                    text: '',
                    answer_guide: '',
                    complaint_guide: '',
                    attachments: '',
                    status: 'ny'
                }
            }
        },
        methods: {
            saveReview: function() {
                var complete_review = Object.assign(this.review, this.$store.state.partial_review)
                Http.post('/review', complete_review)
            },
            notPublishReview: function() {
                this.review.status = 'kladde'
                this.saveReview()
                alert('Høring gemt som kladde')
                this.$router.push('/')
            },
            reviewReview: function() {
                alert('Hvad skal der ske her?')
            },
            publishReview: function() {
                this.saveReview()
                alert('Høring udgivet')
                this.$router.push('/')
            },
            
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
