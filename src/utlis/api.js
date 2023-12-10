import axios from "axios";


const api = axios.create({
    baseURL : 'https://newuatapi.arrivae.com/'
})

api.interceptors.request.use((config) => {
    if(!config.url.endsWith('/login')){
      config.headers['Authorization'] = "Bearer " + localStorage.getItem('token')
    }
    return config;
  });


export default api