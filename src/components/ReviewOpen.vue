<template>
    <div class="page">

        <navigation></navigation>

        <h1>Høring hos modtager</h1>

        <h2>Lorem ipsum høring høring</h2>
        
        <accordion>
            <label for="write-abstract" slot="header">Resumé</label>
            <div slot="content">
            <p>Lorem ipsum</p>
            </div>
        </accordion>

        <accordion>
            <label for="write-text" slot="header">Tekst</label>
            <div slot="content">
            <p>Lorem ipsum</p>
            </div>
        </accordion>

        <accordion>
            <label for="write-complaint" slot="header">Klagevejledning</label>
            <div slot="content">
            <p>Lorem ipsum</p>
            </div>
        </accordion>

        <accordion>
            <label for="write-guide" slot="header">Giv din mening til kende/dit høringssvar</label>
            <div slot="content">
            <fieldset>
                <p>Vejledning i, hvordan du svarer på en høring</p>
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


</style>
