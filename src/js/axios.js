import axios from 'axios'
import Cookies from 'js-cookie'

axios.defaults.baseURL = process.env.VUE_APP_API_URL
if (Cookies.get('token')) {
  axios.defaults.headers.common.Authorization = Cookies.get('token')
}

axios.interceptors.request.use(
  (confing) => {
    // console.log('攔截請求')
    // console.log('process', process.env.VUE_APP_API_URL)
    return confing
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    // console.log('攔截回應')
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default axios
