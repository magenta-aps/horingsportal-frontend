<template>

    <nav class="global-nav">
        <router-link to="/" >Til forside</router-link>
        <p v-if="user" class="global-nav-user">
            Hej {{ user.first_name }} <router-link to="/logout" >Log ud</router-link>
        </p>
    </nav>

</template>

<script>

    export default {
        name: 'Navigation',
        data () {
            return {
                
            }
        },
        computed: {
            user: function() {
                return this.$store.getters.user
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

    .global-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .global-nav-user {
        flex: 0 1 auto;
    }

</style>
