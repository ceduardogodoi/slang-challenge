import axios from 'axios'

const http = axios.create({
  baseURL: 'https://api.beta.slangapp.com'
})

export { http }
