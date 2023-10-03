<script setup>
import { useCartStore } from '@/stores/cartstore.ts';
import { ref, computed } from 'vue';

const cartStore = useCartStore();
const cartItems = cartStore.items;
const open = ref(false)

const removeFromCart = (item) => {
  cartStore.removeFromCart(item);
};

const faverate = computed(() => cartItems.length);
  
</script>

<template>
  <div class="popup">
    <h2>收藏</h2>
    <div>
      <div v-for="item in cartItems" :key="item.id">
        {{ item.Title }} - {{ item.Year }}
        <div class="movie-info">
        <p class="movie-title">電影名稱: {{ item.Title }}</p>
        <p>上映日期: {{ item.Year }}</p>
        <p>IMDB_ID: {{ item.imdbID }}</p>
        <button @click="removeFromCart(item)">移除</button>
        </div>
        <img class="movie-poster" :src="item.Poster" alt="Movie Poster" />
      </div>
    </div>
  </div>
</template>

<style>

  
</style>