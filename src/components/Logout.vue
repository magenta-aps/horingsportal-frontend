<template>

    <div class="page">
        <h1>Digital Høring</h1>
        <p><strong>Du er blevet logget ud</strong></p>
        <router-link to="/login">Log ind</router-link>
    </div>

</template>

<script>

    export default {
        name: 'Logout',
        data () {
            return {
                msg: 'hest'
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .page {
    width: 20rem;
  }

</style>
