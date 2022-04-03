<template>
  <div class="home">
    <h1 class="home__title">Добро пожаловать на сервис BeerSearch!</h1>
    <p class="home__subtitle">Здесь каждый сможет найти пиво себе по вкусу</p>
    <beer-search class="home__beer-search" />
  </div>
</template>

<script>
  import BeerSearch from '@/components/BeerSearch/BeerSearch';

  export default {
    components: { BeerSearch },
  };
</script>

<style lang="scss" scoped src='./Home.scss'>
</style>
