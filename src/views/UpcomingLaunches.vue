<!-- src/views/UpcomingLaunches.vue -->
<template>
    <div>
      <h1>Upcoming Launches</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur accusantium id dolores consequatur, incidunt doloribus quasi vitae reprehenderit.</p>
      <LaunchList type="upcoming" />
    </div>
  </template>
  
  <script setup>
  import LaunchList from '../components/LaunchList.vue'
  </script>