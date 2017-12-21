<template>
  
    <div class="page">
    
        <navigation></navigation>

        <h1>Afsluttede høringer</h1>

        <accordion>
            <span slot="header">Mine egne høringer</span>
            <div slot="content">
                Afgørelse på høring
            </div>
        </accordion>

        <accordion>
            <span slot="header">C-BEM</span>
            <div slot="content">
                Afgørelse på høring
            </div>
        </accordion>

        <accordion>
            <span slot="header">C-SIK</span>
            <div slot="content">
                Afgørelse på høring
            </div>
        </accordion>

        <accordion>
            <span slot="header">C-SS</span>
            <div slot="content">
                Afgørelse på høring
            </div>
        </accordion>

        <accordion>
            <span slot="header">MED udvalg</span>
            <div slot="content">
                Afgørelse på høring
            </div>
        </accordion>

        <fieldset>
            <input type="text">
            <input type="submit" value="Søg" class="btn">
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
                msg: 'hest'
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
