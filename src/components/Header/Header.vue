<template>
  <header class="header">
    <div class="header__container">
      <nav-panel/>
    </div>
  </header>
</template>

<script>
  import NavPanel from '@/components/NavPanel/NavPanel';

  export default {
    components: { NavPanel },
  };
</script>

<style lang="scss" scoped>
  @import '@/styles/styles.scss';

  .header {
    background-color: $second-color;
    height: $header-height;

    &__container {
      height: 100%;
      padding: 10px 25px;
      background-color: rgba($color: #000000, $alpha: 0.1);
      display: flex;
      justify-content: flex-end;
      align-items: center;

      @include mq(479) {
      justify-content: center;
      }
    }
  }
</style>
