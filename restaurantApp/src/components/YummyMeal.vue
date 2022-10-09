<template>
  <p>
    <strong> {{ name }}</strong>
    <YummyMealPrice :price="price" />
    <button @click="addToCart">Add to Cart</button>
  </p>
</template>

<script setup>
import YummyMealPrice from "./YummyMealPrice.vue";
const props = defineProps({
  name: String,
  price: Number,
});
const addToCart = () => emit("addToCart", props.name);
</script>
