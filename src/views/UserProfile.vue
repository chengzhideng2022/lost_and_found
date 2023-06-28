<template>
  <div class="user-profile">
    <h2>User Profile</h2>
    <p>Email: {{ user.email }}</p>
    <router-link to="/lostitems/post">Post a Lost Item</router-link>
    <h3>Lost Items</h3>
    <ul>
      <li v-for="item in lostItems" :key="item.id" class="lost-item">
        <div class="item-info">
          <h4>{{ item.title }}</h4>
          <p>ID: {{ item.id }}</p>
          <p>Description: {{ item.description }}</p>
          <p>Location: {{ item.location }}</p>
          <p>Date: {{ item.dateTime }}</p>
        </div>
        <div class="item-actions">
          <button @click="deleteItem(item.id)">Delete</button>
        </div>
      </li>
    </ul>


  </div>
</template>


<script>
import axios from 'axios';
axios.defaults.withCredentials = true;
export default {
  data() {
    return {
      user: {},
      lostItems: [],
    };
  },
  async created() {
    // Fetch user data
    const userResponse = await axios.get('/users/api/me', { withCredentials: true });

    this.user = userResponse.data;

    // Fetch lost items
    const itemsResponse = await axios.get('/lostitems/api/me', { withCredentials: true });
    this.lostItems = itemsResponse.data;
  },
  methods: {
    async deleteItem(id) {
      await axios.delete(`/lostitems/api/${id}`);
      this.lostItems = this.lostItems.filter(item => item.id !== id);
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
.lost-item {
  display: flex;
  justify-content: space-around; /* Change this line */
  align-items: start;
  margin-bottom: 1em;
}

.item-info {
  flex: 1;
  text-align: left;
}

.item-actions {
  flex-shrink: 0;
  margin-left: 600px; /* Add this line */
}
</style>


