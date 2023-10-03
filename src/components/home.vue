<script setup>
import axios from 'axios'
import { ref } from 'vue';
import movie from '@/components/movie.vue';


const multiMovieData = ref({});
const insert1 = ref('')
const notfound1 = ref('')

const searchApi = async (url) => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

const searchbtnAll = async () => {
  const data = await searchApi(`https://www.omdbapi.com/?i=tt3896198&apikey=14e57704&s=${insert1.value}`)
  if (data) {
    multiMovieData.value = data.Search;
    notfound1.value = data.Error
  } else {
    multiMovieData.value = {};
  }
}

</script>

<template>
  <div>
    <p>電影查詢表(多筆查詢)</p>
    <div>
      <input v-model="insert1">
      <button @click="searchbtnAll">查詢</button>
    </div>
    <div v-show="multiMovieData.length > 0" v-for="movie in multiMovieData" :key="movie.imdbID">
      <movie :moviedata="movie"></movie>
    </div>
   <p v-if="notfound1 === 'Movie not found!' || notfound1 === 'Too many results.'">查無電影資訊</p>
  </div>
</template>
