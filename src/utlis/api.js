import axios from "axios";


const api = axios.create({
    baseURL : 'https://newuatapi.arrivae.com/'
})

api.interceptors.request.use((config) => {
    if(!config.url.endsWith('/login')){
      config.headers['access-token'] =  localStorage.getItem('token')
      config.headers['client'] = localStorage.getItem('client')
      config.headers['uid'] = localStorage.getItem('id')
    }
    return config;
  });


export default api