<template>

    <div id="app">
        <router-view></router-view>
    </div>
  
</template>

<script>

    export default {
        name: 'app'
    }

</script>

<style>

    * {
        box-sizing: border-box;
    }

    * + * {
        margin-top: 1rem;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin: 2rem;
    }

    fieldset {
        border: none;
        padding: 0;
    }

    label {
        display: block;
    }

    input[type="text"],
    input[type="password"],
    input[type="date"] {
        border: solid 1px #000;
        background-color: #eee;
        padding: .5rem;
        margin: 0;
    }

    textarea {
        width: 100%;
        min-height: 5rem;
        margin: 0;
    }

    select {
        margin: 0;
    }

    .page {
        max-width: 40rem;
    }

    button,
    .btn,
    input[type="submit"] {
        background-color: #fff;
        border: solid 1px #000;
        color: #000;
        padding: .5rem .75rem;
        border-radius: .25rem;
        display: inline-block;
        text-decoration: none;
        margin-bottom: .5rem;
        font-size: 1rem;
    }

    button:hover,
    button:active,
    .btn:hover,
    .btn:active {
        background-color: #eee;
    }

    .btn-primary {
        background-color: #3c6;
        color: #fff;
        border: none;
        font-weight: bold;
    }

    .btn-primary:hover,
    .btn-primary:active {
        background-color: #4d7;
    }

</style>
