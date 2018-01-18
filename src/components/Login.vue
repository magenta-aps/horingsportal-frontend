<template>

    <div class="page">
        <h1>Digital Høring Login</h1>
        <form @submit="logIn($event)">
            <fieldset>
                <label for="login-user">Brugernavn</label>
                <input type="text" id="login-user" v-model="username">
            <fieldset>
            </fieldset>
                <label for="login-passw">Kodeord</label>
                <input type="password" id="login-passw" v-model="password">
            </fieldset>
            <p class="error" v-if="error_msg">{{ error_msg }}</p>
            <input type="submit" value="Log ind">
        </form>
    </div>

</template>

<script>

    //import Store from '../services/Store'

    export default {
        name: 'Login',
        data () {
            return {
                username: '',
                password: '',
                error_msg: false
            }
        },
        methods: {
            logIn: function(ev) {
                ev.preventDefault()
                this.$store.dispatch('login', {user: this.username, passwd: this.password})
                this.$router.push('/')
                this.resetForm()
            },
            resetForm: function() {
                this.error_msg = false
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .page {
    width: 20rem;
  }

  .error {
      color: red;
  }

</style>
