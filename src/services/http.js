import Constants from 'expo-constants'
import axios from 'axios'

const http = axios.create({
  baseURL: Constants.manifest.extra.API_URL,
})

export default http
