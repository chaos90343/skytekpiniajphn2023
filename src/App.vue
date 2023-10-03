<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <div id="all">
    <header>
      <div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/cart">收藏</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
#all{
  height:5000px;
  width:1500px;
}
  
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  width:100%;
  background-color: #333;
  color: white;
  padding: 10px;
}

nav {
  display: flex;
}

nav a {
  color: white;
  text-decoration: none;
  margin-right: 20px;
}

nav a:hover {
  text-decoration: underline;
}

RouterView {
  margin: 20px;
}
</style>