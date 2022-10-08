import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

api.interceptors.response.use((response) => response)
