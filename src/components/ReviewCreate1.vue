<template>

    <div class="page">

        <navigation></navigation>

        <h1>Opret høring</h1>
        
        <accordion>
            <label for="choose-templ" slot="header">Vælg skabelon</label>
            <div slot="content">
            <fieldset>
                <select id="choose-templ" v-model="review.template">
                <option>Budget</option>
                <option>MED høring</option>
                </select>
            </fieldset>
            </div>
        </accordion>
        
        <accordion>
            <div slot="header">SBSYS nr.</div>
            <div slot="content">
            <fieldset>
                <strong>Indsæt automatisk SBSYS nr. her</strong>
                <p>
                Indsæt hjælpetekst her.
                </p>
            </fieldset>
            </div>
        </accordion>

        <accordion>
            <div slot="header">Deltagerkreds</div>
            <div slot="content">
            <fieldset>
                <div>
                <label for="choose-groups">Gruppe</label>
                <select id="choose-groups" v-model="review.groups">
                    <option>Ejer af høring</option>
                    <option>Interessenter</option>
                    <option>Outlookgruppe A</option>
                    <option>Outlookgruppe B</option>
                    <option>Egen gruppe A</option>
                    <option>Egen gruppe B</option>
                </select>
                </div>
                <div>
                <label for="choose-sort">Rækkefølge</label>
                <select id="choose-sort" v-model="review.sort_option">
                    <option>Alfabetisk</option>
                </select>
                </div>
            </fieldset>
            </div>
        </accordion>

        <accordion>
            <div slot="header">Svarfrist</div>
            <div slot="content">
            <fieldset>
                <div>
                <label for="choose-date-1">Kommentarer</label>
                <input id="choose-date-1" type="date" v-model="review.deadline_comment">
                </div>
                <div>
                <label for="choose-date-1">Høringsperiode</label>
                <input id="choose-date-1" type="date" v-model="review.deadline_review">
                </div>
                <div>
                <label for="choose-date-1">Behandling</label>
                <input id="choose-date-1" type="date" v-model="review.deadline_process">
                </div>
                <div>
                <label for="choose-date-1">Svarfrist</label>
                <input id="choose-date-1" type="date" v-model="review.deadline_answer">
                </div>
                <div>
                <label for="choose-date-1">Afgørelse</label>
                <input id="choose-date-1" type="date" v-model="review.deadline_conclude">
                </div>
            </fieldset>
            </div>
        </accordion>

        <fieldset>
            <label for="choose-contact">Kontaktperson</label>
            <input id="choose-contact" type="text" placeholder="Kontaktperson" v-model="review.contact">
        </fieldset>

        <accordion>
            <label for="choose-medium" slot="header">Udgives på</label>
            <div slot="content">
            <fieldset>
                <select id="choose-medium" v-model="review.channels">
                <option>Hjemmeside</option>
                <option>Facebook</option>
                <option>Intranet</option>
                </select>
            </fieldset>
            </div>
        </accordion>

        <fieldset>
            <label>
                <input type="radio" name="intern-ekstern" v-model="review.public" value="false">
                Intern høring
            </label>
            <label>
                <input type="radio" name="intern-ekstern" v-model="review.public" value="true">
                Ekstern høring
            </label>
        </fieldset>

        <button @click="proceed" class="btn btn-primary">Næste</button>
        
    </div>

</template>

<script>

    import Accordion from './Accordion'
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
                    template: '',
                    sbsys_no: 6324972562937743,
                    public: false,
                    groups: '',
                    sort_option: '',
                    deadline_answer: '',
                    deadline_comment: '',
                    deadline_conclude: '',
                    deadline_process: '',
                    deadline_review: '',
                    contact: '',
                    channels: ''
                }
            }
        },
        methods: {
            proceed: function() {
                this.$store.commit('storePartialReview', this.review)
                this.$router.push('/review/create-part2')
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
