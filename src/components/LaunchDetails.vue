<!-- src/components/LaunchDetails.vue -->
<template>
    <div class="launch-details">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-if="launch && Object.keys(launch).length" class="details">
        <h2>{{ launch?.name }}</h2>
        <img :src="launch?.links.patch.small" :alt="launch.name">
        <p>{{ launch.details }}</p>
        
        <div class="info">
          <h3>Mission Info</h3>
          <p>Date: {{ formatDate(launch.date_utc) }}</p>
          <p>Success: {{ launch.success ? 'Yes' : 'No' }}</p>
        </div>
        
        <div class="links" v-if="launch.links">
          <h3>Links</h3>
          <a v-if="launch.links.webcast" 
             :href="launch.links.webcast" 
             target="_blank">
            Watch Webcast
          </a>
          <a v-if="launch.links.article" 
             :href="launch.links.article" 
             target="_blank">
            Read Article
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useSpaceX } from '../composables/useSpaceX'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const { loading, error, fetchLaunchDetails } = useSpaceX()
  const launch = ref(null)
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString()
  }
  
  onMounted(async () => {
    console.log('route.params.id',route.params.id);
    
    try {
      launch.value = await fetchLaunchDetails(route.params.id)
    } catch (err) {
      console.error(err)
    }
  })
  </script>
  
  <style scoped>
  .launch-details {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .info {
    margin: 20px 0;
    padding: 15px;
    background: #f5f5f5;
    border-radius: 8px;
  }
  
  .links {
    margin-top: 20px;
  }
  
  .links a {
    display: inline-block;
    margin-right: 15px;
    color: #2196f3;
    text-decoration: none;
  }
  </style>