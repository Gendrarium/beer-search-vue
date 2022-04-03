<template>
  <div class="preloader"></div>
</template>

<script>
  export default {
    name: 'preloader',
  };
</script>

<style lang="scss" scoped>
  .preloader {
    display: inline-block;
    width: 95px;
    height: 95px;
    margin: auto;

    &:after {
      content: ' ';
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #dfc;
      border-color: #dfc transparent #dfc transparent;
      animation: preloader 1.2s linear infinite;
    }

    &_yellow {
      &:after {
        border: 6px solid yellow;
        border-color: yellow transparent yellow transparent;
      }
    }
  }
  @keyframes preloader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
