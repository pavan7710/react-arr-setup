import axios from "axios";


const api = axios.create({
    baseURL : 'https://ff84-2401-4900-1cb9-6867-3b35-956e-3a2f-c211.ngrok-free.app'
})

api.interceptors.request.use((config) => {
      console.log(config)
    if(!config.url.endsWith('/login')){
      config.headers['Authorization'] = "Bearer " + localStorage.getItem('token')
    }
    return config;
  });


export default api