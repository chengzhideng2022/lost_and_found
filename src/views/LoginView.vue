<template>
  <div>
    <h1>Login</h1>

    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>

      <button type="submit">Login</button>
    </form>

    <p v-if="errorMessage">{{ errorMessage }}</p>

    <p>Don't have an account? <router-link to="/users/register">Register</router-link></p>

    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
axios.defaults.withCredentials = true;
export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const router = useRouter();

    const login = async () => {
      try {
        await axios.post('http://localhost:8080/users/api/login', {
          username: username.value,
          password: password.value
        });

        await router.push({name: 'user-home'});
      } catch (error) {
        if (error.response && error.response.data) {
          errorMessage.value = error.response.data.message;
        } else {
          errorMessage.value = 'An error occurred while trying to log in.';
        }
      }
    };

    return {
      username,
      password,
      errorMessage,
      login
    };
  }
};
</script>
