<template>
  <div class="nav">
    <router-link class="router-link" to="/">Домашняя</router-link> |
    <router-link class="router-link" to="/profile">Профиль</router-link>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import '@/styles/styles.scss';

  .router-link {
    color: $nav-link;
    font-size: 20px;
    font-weight: 400;

    @include mq(767) {
      font-size: 18px;
    }

    &-exact-active {
      color: $nav-link-active;
      font-weight: 700;
    }
  }
</style>
