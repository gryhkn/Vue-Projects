<template>
  <div>
    <header class="bg-green-800 p-4">
      <div>
        <nav>
          <RouterLink to="/posts">Posts</RouterLink>
          <RouterLink to="/authors"> Authors</RouterLink>
        </nav>
      </div>
    </header>

    <PostsView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
import PostsView from "./views/PostsView.vue";
</script>
