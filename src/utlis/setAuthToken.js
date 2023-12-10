import api from './api';
const setAuthToken = (token , id , role) => {
  if (token) {
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
    localStorage.setItem('role' , role)
  } else {
    delete api.defaults.headers.common['x-auth-token'];
    localStorage.removeItem('token');
  }
};

export default setAuthToken;
