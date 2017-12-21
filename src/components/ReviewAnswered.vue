<template>

    <div class="page">

        <navigation></navigation>

        <h1>Høringssvar modtaget</h1>
        
        <h2>Lorem ipsum høring høring</h2>
        
        <accordion>
            <label for="write-abstract" slot="header">Høringsmateriale</label>
            <div slot="content">
                <h3>Resumé</h3>
                <p>Lorem ipsum</p>
                <h3>Tekst</h3>
                <p>Lorem ipsum</p>
                <h3>Klagevejleding</h3>
                <p>Lorem ipsum</p>
            </div>
        </accordion>

        <accordion>
            <label for="write-complaint" slot="header">Svar modtaget</label>
            <div slot="content">
                <ul>
                    <li>
                    Horingssvar
                    </li>
                    <li>
                    Horingssvar
                    </li>
                    <li>
                    Horingssvar
                    </li>
                    <li>
                    Horingssvar
                    </li>
                </ul>
            </div>
        </accordion>

        <accordion>
            <label for="ans-conclusion" slot="header">Konklusion</label>
            <div slot="content">
                <fieldset>
                    <textarea id="ans-conclusion" type="text" placeholder="Tekst til konklusion skrives her"></textarea>
                </fieldset>
            </div>
        </accordion>

        <fieldset>
            <button>Gem kladde</button>
            <button class="btn-primary">Udgiv nu</button>
        </fieldset>

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
<style>


</style>
