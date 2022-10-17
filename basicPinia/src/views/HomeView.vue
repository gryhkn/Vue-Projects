<script setup>
import { usePostStore } from "../stores/post";
import { storeToRefs } from "pinia";
const { posts, loading, error } = storeToRefs(usePostStore);
const { fetchPosts } = usePostStore;
</script>

<template>
  <div>
    <h1>Hello from Home View</h1>
    <button @click="fetchPosts"></button>
  </div>
</template>
