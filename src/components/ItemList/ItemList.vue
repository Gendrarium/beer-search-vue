<template>
  <ul class="list">
    <li class="list__item" v-for="item in items" :key="item.value">
      <span class="list__text list__text_bold">{{ item.title }}:</span>
      <span class="list__text">{{ item.value }}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '@/styles/styles.scss';
  .list {
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    &__item {
      margin-top: 8px;
      display: flex;
      justify-content: space-between;

      &:first-of-type {
        margin-top: 0;
      }
    }

    &__text {
      font-size: 18px;
      font-weight: 400;
      text-align: right;

      @include mq(767) {
        font-size: 22px;
      }

      @include mq(479) {
        font-size: 16px;
      }

      &_bold {
        font-weight: 500;
        margin-right: 5px;
        text-align: left;
      }
    }
  }
</style>
