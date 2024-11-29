<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="nav-bar">
      <nav>
        <ul class="nav-menu">
          <li><RouterLink to="/">Tabulator</RouterLink></li>
          <li><RouterLink to="/primeVue">PrimeVue</RouterLink></li>
          <li><RouterLink to="/iconField">IconField</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
  <hr />

  <RouterView />
</template>

<style scoped>
li {
  list-style: none;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 60px;
}

.nav-menu {
  display: flex;
  padding: 0;
  margin: 0;
}

.nav-menu li {
  padding: 8px;
  margin-right: 30px;
}
</style>
