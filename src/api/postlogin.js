import axios from '@/js/axios.js'

export const postLogin = (data) => axios.post('/admin/signin', data)
