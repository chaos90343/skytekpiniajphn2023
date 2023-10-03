import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const items = ref([]);

  const addToCart = (item) => {
    items.value.push(item);
  };

  const removeFromCart = (item) => {
    const index = items.value.indexOf(item);
    if (index !== -1) {
      items.value.splice(index, 1);
    }
  };

  const clearCart = () => {
    items.value = [];
  };

  return {
    items,
    addToCart,
    removeFromCart,
    clearCart,
  };
});
