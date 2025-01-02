// src/composables/useSpaceX.js
import { ref } from 'vue'
import axios from 'axios'

export function useSpaceX() {
  const baseUrl = 'https://api.spacexdata.com/v4'
  const loading = ref(false)
  const error = ref(null)

  const fetchUpcomingLaunches = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await axios.get(`${baseUrl}/launches/upcoming`)
      return response.data
    } catch (err) {
      error.value = 'Failed to fetch upcoming launches'
      throw err
    } finally {
      loading.value = false
    }
  }

  const fetchPastLaunches = async () => {
    loading.value = true
    try {
      const response = await axios.get(`${baseUrl}/launches/past`)
      return response.data
    } catch (err) {
      error.value = 'Failed to fetch past launches'
      throw err
    } finally {
      loading.value = false
    }
  }

  const fetchLaunchDetails = async (id) => {
    loading.value = true
    try {
      const response = await axios.get(`${baseUrl}/launches/${id}`)
      return response.data
    } catch (err) {
      error.value = 'Failed to fetch launch details'
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    fetchUpcomingLaunches,
    fetchPastLaunches,
    fetchLaunchDetails
  }
}