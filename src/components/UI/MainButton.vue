<template>
  <button class="main-button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'main-button',
  };
</script>

<style lang="scss" scoped>
  @import '@/styles/styles.scss';

  .main-button {
    width: 100%;
    height: 40px;
    padding: 10px 15px;
    background: none;
    color: $main-color;
    border: 1px solid $main-color;
    cursor: pointer;
    transition: color 0.5s, background-color 0.5s;
    border-radius: 2px;
    font-size: 16px;
    font-weight: 400;

    &:hover {
      color: $background-color;
      border: 1px solid $background-color;
      background-color: $main-color;
    }
  }
</style>
