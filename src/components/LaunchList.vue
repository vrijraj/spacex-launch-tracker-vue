<!-- src/components/LaunchList.vue -->
<template>
  <div class="launch-list">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="launches">
      <table class="launch-table">
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Launch Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="launch in launches" :key="launch.id">
            <td>{{ launch.name }}</td>
            <td>{{ formatDate(launch.date_utc) }}</td>
            <td>
              <RouterLink :to="`/launch/${launch.id}`">View Details</RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, onMounted } from "vue";
import { useSpaceX } from "../composables/useSpaceX";

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ["upcoming", "past"].includes(value),
  },
});

const { loading, error, fetchUpcomingLaunches, fetchPastLaunches } =
  useSpaceX();
const launches = ref([]);

const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

onMounted(async () => {
  try {
    launches.value = await (props.type === "upcoming"
      ? fetchUpcomingLaunches()
      : fetchPastLaunches());
  } catch (err) {
    console.error(err);
  }
});
</script>
  
  <style scoped>
.launch-list {
  /* padding: 0px;
  padding-top: 5%; */
}

.launch-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.launch-table th,
.launch-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.launch-table th {
  background-color: #f5f5f5;
}
</style>