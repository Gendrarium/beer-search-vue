<template>
  <Header />
  <main class="main">
    <router-view />
  </main>
</template>

<script>
  import Header from '@/components/Header/Header';

  export default {
    components: { Header },
  };
</script>

<style lang="scss">
  @import '@/vendor/fonts/fonts.css';
  @import '@/styles/styles.scss';

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button, input {
    font-family: inherit;
  }

  #app {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: $main-color;
    min-height: 100vh;
    background-color: $background-color;
  }
</style>
