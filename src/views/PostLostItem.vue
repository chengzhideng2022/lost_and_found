<template>
  <div>
    <h2>Post a Lost Item</h2>
    <form @submit.prevent="postLostItem">
      <p>Title: <input v-model="title" required /></p>
      <p>Description: <input v-model="description" required /></p>
      <p>Location: <input v-model="location" required /></p>
      <p>Date and Time: <input v-model="dateTime" type="datetime-local" required /></p>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import router from "@/router";

export default {
  data() {
    return {
      title: '',
      description: '',
      location: '',
      dateTime: '', // Add this line
    };
  },
  methods: {
    async postLostItem() {
      const params = {
        title: this.title,
        description: this.description,
        location: this.location,
        dateTime: this.dateTime,
      };
      await axios.post('/lostitems', null, { params });
      await router.push('/user-profile');
    },
  },
};
</script>

<style scoped>
form p {
  text-align: left;
}
form {
  width: 50%; /* 调整这个值来改变表单的宽度 */
  margin: 0 auto; /* 这会使表单水平居中 */
}
</style>
