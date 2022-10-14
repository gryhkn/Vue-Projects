<template>
  <header class="navbar">
    <div>
      <nav>
        <RouterLink to="/">Posts</RouterLink>
        <RouterLink to="/authors">Authors</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView></RouterView>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style>
.navbar {
  background-color: ligthgreen;
  padding: 1.2rem;
}
</style>
