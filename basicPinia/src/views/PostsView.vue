<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { usePostStore } from "../stores/post";

const { posts, loading, error } = storeToRefs(usePostStore);
const { fetchPosts } = usePostStore;
</script>

<template>
  <div>
    <h1>Hello from PostsView</h1>
    <button @click="fetchPosts"></button>
    <p v-if="loading">Loading posts...</p>
    <p v-if="error">{{ error.message }}</p>
    <div v-if="posts">
      <ul v-for="post in posts" :key="post.id">
        <li>
          <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
          <p>{{ post.body }}</p>
          >
        </li>
      </ul>
    </div>
  </div>
</template>
