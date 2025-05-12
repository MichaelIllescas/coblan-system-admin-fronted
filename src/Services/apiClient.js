import axios from 'axios';

// Cambiá este valor según el entorno en que estés trabajando
const isProduction = true;

const apiBaseURL = isProduction
  ? 'https://app.coblan.org/'
  : 'http://localhost:8080';

const apiClient = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true,
});

export default apiClient;
