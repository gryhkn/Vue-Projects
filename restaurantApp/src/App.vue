<template>
  <h1> {{name}} </h1>
  <button @click="placeOrder">Place Order</button>
  <YummyMealVue name="Pizza 🍕" :price="10" @addToCart="addItemToCart"/>
</template>



<script>
import YummyMealVue from './components/YummyMeal.vue';

export default {

  components: {
    YummyMealVue
  },

  setup() {
    const name = "The Snazzy Burger";

    const placeOrder = () => { alert("Your order has been places")}
    const addItemToCart = (item) => alert("One ${item} added to the cart!");

    return { name, placeOrder, addItemToCart };
  },


}
 
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
