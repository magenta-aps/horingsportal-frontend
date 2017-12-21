<template>
  <div>
    <header @click="open = !open" class="btn" :class="{'open': open}">
      <slot name="header"></slot>
    </header>
    <div class="acc-content" :class="{'open': open}">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  data () {
    return {
      open: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }

  header.open {
    margin: 1rem 0 0;
    border-radius: .25rem .25rem 0 0;
  }

  header::after {
    content: '▼';
    transition: transform .25s;
  }

  header.open::after {
    transform: rotate(-180deg);
  }

  .acc-content {
    display: none;
    border: solid 1px #eee;
    padding: 1rem;
    margin: 0 0 1rem;
    border-radius: 0 0 .25rem .25rem;
  }

  .acc-content.open {
    display: block;
  }

</style>
