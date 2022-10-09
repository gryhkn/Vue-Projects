<template>
  <h1>{{ name }}</h1>
  <input type="text" />
  <button @click="placeOrder">Place Order</button>
  <br /><br />
  <label for="currencySymbol"> Currency</label>
  <select id="currencySymbol" v-model="currencySymbol">
    <option value="$">Dollar ($)</option>
    <option value="£">Pound (£)</option>
  </select>
  <YummyMeal
    v-for="meal in meals"
    :name="meal.name"
    :price="meal.price"
    @addToCart="addItemToCart"
  />
</template>

<script>
import YummyMeal from "./components/YummyMeal.vue";
import { ref, reactive, watch, provide } from "vue";

export default {
  components: { YummyMeal },

  setup() {
    const currencySymbol = ref("₺");
    provide("currencySymbol", currencySymbol);
    const name = ref("The McBurgerDonald's ");
    const cart = reactive([]);
    const meal = reactive({ name: "Pizza 🍕", price: 5 });
    const meals = reactive([
      { name: " Pizza  🍕 ", price: 5 },
      { name: " Hamburger  🍔 ", price: 5 },
      { name: " Cheeseburger  🧀 ", price: 8 },
      { name: " Fries  🍟 ", price: 3 },
    ]);

    const placeOrder = () => {
      alert("Your order has been places");
    };
    const addItemToCart = (item) => cart.push(item);

    watch(
      () => [...cart],
      (newName, oldName) => console.log(newName, oldName)
    );

    return { name, placeOrder, addItemToCart, meals, currencySymbol };
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
