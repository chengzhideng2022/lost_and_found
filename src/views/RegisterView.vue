<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <p>Username: <input v-model="username" required /></p>
      <p>Password: <input v-model="password" type="password" required /></p>
      <p>Email: <input v-model="email" type="email" required /></p>
      <button type="submit">Submit</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p>Already have an account? <router-link to="/users/login">Login</router-link></p>
  </div>
</template>

<script>
import axios from 'axios';
import router from "@/router";

export default {
  data() {
    return {
      username: '',
      password: '',
      email: '',
      errorMessage: '', // Add this line
    };
  },
  methods: {
    async register() {
      const user = {
        username: this.username,
        password: this.password,
        email: this.email,
      };
      try {
        await axios.post('/users/api/register', user);
        await router.push('/users/login');
      } catch (error) {
        this.errorMessage = error.response.data.error; // Add this line
      }
    },
  },
};
</script>

<style scoped>
form {
  width: 50%; /* Adjust this value to change the form's width */
  margin: 0 auto; /* This will center the form horizontally */
}

.error {
  color: red;
}
</style>
