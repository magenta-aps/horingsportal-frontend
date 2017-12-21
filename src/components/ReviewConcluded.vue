<template>

    <div class="page">

        <navigation></navigation>
    
        <h1>Afgørelse på Høring</h1>
        
        <h2>Lorem ipsum høring høring</h2>

        <accordion>
        <label for="write-abstract" slot="header">Resumé</label>
        <div slot="content">
            <p>Lorem ipsum</p>
        </div>
        </accordion>

        <accordion>
        <label for="write-abstract" slot="header">Konklusion</label>
        <div slot="content">
            <p>Lorem ipsum</p>
        </div>
        </accordion>

        <accordion>
            <label for="write-abstract" slot="header">Høringsmateriale</label>
            <div slot="content">
                <h3>Resumé</h3>
                <p>Lorem ipsum</p>
                <h3>Tekst</h3>
                <p>Lorem ipsum</p>
                <h3>Klagevejleding</h3>
                <p>Lorem ipsum</p>
                <h3>Svar</h3>
                <ul>
                    <li>
                        Høringssvar
                    </li>
                    <li>
                        Høringssvar
                    </li>
                    <li>
                        Høringssvar
                    </li>
                    <li>
                        Høringssvar
                    </li>
                </ul>
            </div>
        </accordion>

        <p><strong>Høring sendt til XXXX</strong></p>

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
            msg: 'hest'
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
