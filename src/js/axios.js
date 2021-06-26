import axios from 'axios'

axios.defaults.baseURL = 'https://vue3-course-api.hexschool.io'

axios.interceptors.request.use(
  (confing) => {
    console.log('攔截請求')
    console.log(process.env.VUE_APP_API_URL)
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
