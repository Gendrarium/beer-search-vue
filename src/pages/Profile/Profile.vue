<template>
  <div class="profile">
    <div class="profile__user-container">
      <div v-if="!isUserLoading" class="profile__user">
        <h2 class="profile__title">Добрый день, {{ user.first_name }} {{ user.last_name }}</h2>
        <img class="profile__img" :src="user.avatar" alt="Аватар" />
        <item-list :items="sortedUser" />
        <main-button @click="fetchUser">Сменить пользователя</main-button>
      </div>
      <preloader class="preloader_yellow" v-else />
    </div>
    <div class="profile__beer-container">
      <beer-search />
    </div>
  </div>
</template>

<script>
  import BeerSearch from '@/components/BeerSearch/BeerSearch';
  import ItemList from '@/components/ItemList/ItemList';
  import { getUser } from '@/utils/api';

  export default {
    data() {
      return {
        isUserLoading: true,
        user: {
          avatar: '',
          first_name: '',
          last_name: '',
          date_of_birth: '',
        },
      };
    },
    methods: {
      getCurrentAge(date) {
        return (
          ((new Date().getTime() - new Date(date)) /
            (24 * 3600 * 365.25 * 1000)) |
          0
        );
      },
      async fetchUser() {
        try {
          this.isUserLoading = true;
          const json = await getUser();

          const newUser = {
            first_name: json.first_name,
            last_name: json.last_name,
            avatar: json.avatar,
            date_of_birth: json.date_of_birth,
            employment: json.employment.title,
            address: `${json.address.country} ${json.address.city}`,
          };
          this.user = newUser;
          localStorage.setItem('user', JSON.stringify(newUser));
        } catch (e) {
          alert(e);
        } finally {
          this.isUserLoading = false;
        }
      },
    },
    mounted() {
      const currentUser = localStorage.getItem('user');
      if (currentUser) {
        this.user = JSON.parse(currentUser);
        this.isUserLoading = false;
      } else {
        this.fetchUser();
      }
    },
    computed: {
      sortedUser() {
        return [
          {
            title: 'Возраст',
            value: this.getCurrentAge(this.user.date_of_birth),
          },
          { title: 'Должность', value: this.user.employment },
          { title: 'Адрес', value: this.user.address },
        ];
      },
    },
    components: { BeerSearch, ItemList },
  };
</script>

<style lang="scss" scoped src="./Profile.scss"></style>
