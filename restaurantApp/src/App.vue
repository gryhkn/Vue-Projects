<template>
  <h1> {{name}} </h1>
  <input type="text" v-model="name">
  <button @click="placeOrder">Place Order</button>
  <YummyMealVue name="Pizza 🍕" :price="10" @addToCart="addItemToCart"/>
</template>



<script>
import YummyMealVue from './components/YummyMeal.vue';
import { ref, reactive, watch } from "vue"
export default {

  components: {
    YummyMealVue
  },

  setup() {
    const name = ref("The Snazzy Burger");
    const meal = reactive({ name: "Pizza 🍕", price: 5});
    const placeOrder = () => { alert("Your order has been places")}
    const addItemToCart = (item) => alert(`One ${item} added to the cart!`);

    watch(name, (newName, oldName) => console.log(newName, oldName));

    return { name, placeOrder, addItemToCart, meal };
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
