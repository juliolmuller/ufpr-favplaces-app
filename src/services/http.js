import axios from 'axios'

const http = axios.create({
  baseURL: 'http://192.168.15.8:8080',
})

export default http
