import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_URL

axios.interceptors.request.use(
  (confing) => {
    console.log('攔截請求')
    console.log('process', process.env.VUE_APP_API_URL)
    return confing
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    console.log('攔截回應')
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default axios