<!-- src/App.vue -->
<template>
  <div class="app">
    <nav>
      <RouterLink class="nav-list" to="/upcoming">Upcoming Launches</RouterLink>
      <RouterLink class="nav-list" to="/past">Past Launches</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
nav{
  background-color: #fafafa;
  padding: 3%;
  text-align: center;
  border-radius: 12px;
}
.nav-list {
  margin-right: 3%;
  text-decoration: none;
}
</style>