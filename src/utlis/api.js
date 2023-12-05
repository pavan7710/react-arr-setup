import axios from "axios";


const api = axios.create({
    baseURL : 'https://eb9a-2401-4900-1f25-e78-e3ae-4b9f-67bc-5ac3.ngrok-free.app'
})


export default api