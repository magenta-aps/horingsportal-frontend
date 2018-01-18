<template>

    <div class="page">
        <navigation></navigation>
        <h1>Digital Høring</h1>
        <nav class="index-nav">
            <router-link to="/review/create" class="btn">Opret høring</router-link>
            <router-link to="/reviews/current" class="btn">Aktuelle høringer</router-link>
            <router-link to="/reviews/mine" class="btn">Mine høringer</router-link>
            <router-link to="/reviews/concluded" class="btn">Afsluttede høringer</router-link>
            <hr>
            <router-link to="/review/open">Høring hos modtager</router-link>
            <router-link to="/review/answered">Høring besvaret</router-link>
            <router-link to="/review/concluded">Høring afgjort</router-link>
        </nav>
    </div>

</template>

<script>

    import Navigation from './Navigation'

    export default {
        name: 'Frontpage',
        components: {
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
<style scoped>

  .page {
    width: 20rem;
  }

  .index-nav {
    display: flex;
    flex-flow: column nowrap;
  }

</style>
