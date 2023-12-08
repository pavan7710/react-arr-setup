import axios from "axios";


const api = axios.create({
    baseURL : 'https://cbf4-2401-4900-1cb9-6867-65d8-a444-973d-b21e.ngrok-free.app'
})

api.interceptors.request.use((config) => {
    if(!config.url.endsWith('/login')){
      config.headers['Authorization'] = "Bearer " + localStorage.getItem('token')
    }
    return config;
  });


export default api