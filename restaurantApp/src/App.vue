<template>
  <h1>{{ name }}</h1>
  <input type="text" v-model="name" />
  <button @click="placeOrder">Place Order</button>
  <YummyMeal
    v-for="meal in meals"
    :name="meal.name"
    :price="meal.price"
    @addToCart="addItemToCart"
  />
</template>

<script>
import YummyMeal from "./components/YummyMeal.vue";
import { ref, reactive, watch } from "vue";

export default {
  components: { YummyMeal },

  setup() {
    const name = ref("The Snazzy Burger");
    const meal = reactive({ name: "Pizza 🍕", price: 5 });
    const meals = reactive([
      { name: "Pizza 🍕", price: 5 },
      { name: "Hamburger 🍔", price: 5 },
      { name: "Cheeseburger 🧀", price: 8 },
      { name: "Fries", price: 3 },
    ]);
    const placeOrder = () => {
      alert("Your order has been places");
    };
    const addItemToCart = (item) => alert(`One ${item} added to the cart!`);

    watch(name, (newName, oldName) => console.log(newName, oldName));

    return { name, placeOrder, addItemToCart, meal, meals };
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
