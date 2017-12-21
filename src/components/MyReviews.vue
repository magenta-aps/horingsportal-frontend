<template>

    <div class="page">

        <navigation></navigation>
        
        <h1>Mine høringer</h1>

        <accordion>
            <h2 for="write-abstract" slot="header">Interne høringer</h2>
            <div slot="content">
                <ul>
                    <li>
                        <h3>Høring om xxxxx</h3>
                        <dl>
                        <dt>Oprettet</dt>
                        <dd>xxxxxxxxx</dd>
                        <dt>Kommentarer</dt>
                        <dd>xxxxxxx</dd>
                        <dt>Høringsperiode</dt>
                        <dd>xxxxxxx</dd>
                        <dt>Behandling</dt>
                        <dd>xxxxxxx</dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </accordion>

        <accordion>
            <h2 for="write-abstract" slot="header">Eksterne høringer</h2>
            <div slot="content">
                <ul>
                    <li>
                        <h3>Høring om xxxxx</h3>
                        <dl>
                        <dt>Oprettet</dt>
                        <dd>xxxxxxxxx</dd>
                        <dt>Kommentarer</dt>
                        <dd>xxxxxxx</dd>
                        <dt>Høringsperiode</dt>
                        <dd>xxxxxxx</dd>
                        <dt>Behandling</dt>
                        <dd>xxxxxxx</dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </accordion>

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
        
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    h2 {
        font-size: 1rem;
        margin: 0;
        padding: 0;
        font-weight: normal;
    }

</style>
