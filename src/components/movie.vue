<script setup>
import { ref, onMounted, watch, defineProps } from 'vue';
import { useCartStore } from '@/stores/cartstore.ts'; 
const cartStore = useCartStore();

const props = defineProps({
  moviedata: Object, 
});

const addToCart = () => {
  cartStore.addToCart(props.moviedata); 
};
</script>

<template>
  <div class="movie-card">
    <div class="movie-info">
      <p class="movie-title">電影名稱: {{ moviedata.Title }}</p>
      <p>上映日期: {{ moviedata.Year }}</p>
      <p>IMDB_ID: {{ moviedata.imdbID }}</p>
      <button class="add-to-cart-button" @click="addToCart">加入收藏</button>
    </div>
    <img class="movie-poster" :src="moviedata.Poster" alt="Movie Poster" />
  </div>
</template>

<style scoped>
.movie-card {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width:500px;
}

.add-to-cart-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
  height:30px;
  transition: background-color 0.3s ease;
}

.add-to-cart-button:hover {
  background-color: #0056b3;
}

.movie-info {
  margin-right: 20px; 
}

.movie-title {
  font-size: 18px;
  font-weight: bold;
}

.movie-poster {
  max-width: 200px;
  height: auto;
  margin-top: 10px;
}
</style>





