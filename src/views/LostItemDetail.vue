<template>
  <div>
    <h2>{{ item.title }}</h2>
    <p>ID: {{ item.id }}</p>
    <p>Description: {{ item.description }}</p>
    <p>Location: {{ item.location }}</p>
    <p>Date: {{ item.dateTime }}</p>
    <p>User ID: {{ item.id }}</p>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
import axios from 'axios';
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

export default {
  setup() {
    const item = ref({});
    const route = useRoute();

    onMounted(async () => {
      const id = route.params.id;
      const response = await axios.get(`/lostitems/api/${id}`);
      item.value = response.data;
    });

    return {
      item
    };
  }
};
</script>
