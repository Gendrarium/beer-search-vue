<template>
  <div class="beer-search">
    <div class="beer-search__container" v-if="!isBeerLoading">
      <h2 class="beer-search__title">Вам подходит:</h2>
      <item-list :items="sortedBeer" />
      <p class="beer-search__caption">Не угадали?</p>
      <p class="beer-search__caption">Попробуйте подобрать сами!</p>
      <main-button class="beer-search__button" @click="fetchBeer"
        >Попробовать</main-button
      >
    </div>
    <preloader v-else class="beer-search__loading" />
  </div>
</template>

<script>
  import ItemList from '@/components/ItemList/ItemList';
  import { getBeer } from '@/utils/api';

  export default {
    components: {
      ItemList,
    },
    data() {
      return {
        isBeerLoading: true,
        beer: {
          alcohol: '',
          blg: '',
          brand: '',
          hop: '',
          ibu: '',
          malts: '',
          name: '',
          style: '',
          yeast: '',
        },
      };
    },
    methods: {
      async fetchBeer() {
        try {
          this.isBeerLoading = true;

          const json = await getBeer();

          this.beer = json;
          localStorage.setItem('beer', JSON.stringify(json));
        } catch (e) {
          alert(e);
        } finally {
          this.isBeerLoading = false;
        }
      },
    },
    mounted() {
      const currentBeer = localStorage.getItem('beer');
      if (currentBeer) {
        this.beer = JSON.parse(currentBeer);
        this.isBeerLoading = false;
      } else {
        this.fetchBeer();
      }
    },
    computed: {
      sortedBeer() {
        return [
          { title: 'Название', value: this.beer.name },
          { title: 'Брэнд', value: this.beer.brand },
          { title: 'Стиль', value: this.beer.style },
          { title: 'Дрожжи', value: this.beer.yeast },
          { title: 'Солод', value: this.beer.malts },
          { title: 'Хмель', value: this.beer.hop },
          { title: 'Горечь', value: this.beer.ibu },
          { title: 'Экстракт', value: this.beer.blg },
          { title: 'Крепкость', value: this.beer.alcohol },
        ];
      },
    },
  };
</script>

<style lang="scss" scoped src="./BeerSearch.scss"></style>
