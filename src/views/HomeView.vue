<template>
  <div>
    <h1>Welcome to the Lost and Found website</h1>

    <nav>
      <router-link class="nav-link" to="/users/login">login</router-link>
      <router-link class="nav-link" to="/users/register">register</router-link>
      <router-link class="nav-link" to="" @click.prevent="postLostItem">Post lostItem information</router-link>
    </nav>

    <!-- Search form -->
    <form @submit.prevent="search">
      <label for="title">Search by title:</label>
      <input type="text" id="title" v-model="title" required>
      <button type="submit">Search</button>
    </form>

    <h2>Latest lostItem information</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        <router-link :to="'/lostitems/' + item.id">
          <span>{{ item.title }}</span>
          <span>&nbsp;&nbsp;</span>
          <span v-if="item.dateTime">{{ formatDate(item.dateTime) }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import router from "@/router";

export default {
  data() {
    return {
      title: '',
      items: []
    };
  },
  methods: {
    async search() {
      const response = await axios.get(`/api/search/title?title=${this.title}`);
      this.items = response.data;
    },
    formatDate(dateTime) {
      // Format the date as you need
      return new Date(dateTime).toLocaleString();
    },
    async postLostItem() {
      try {
        await axios.get('/users/api/me');
        // If the request is successful, navigate to the post lost item page
        await router.push('/lostitems/post');
      } catch (error) {
        // If the request fails, navigate to the login page
        await router.push('/users/login');
      }
    },
  },
  async created() {
    const response = await axios.get('/api/');
    this.items = response.data;
  }
};
</script>

<style scoped>
.nav-link {
  margin-right: 20px;
}


li {
  margin-bottom: 10px;
}

li > * {
  display: block;
}

li > *:last-child {
  margin-top: 10px;
}
</style>
