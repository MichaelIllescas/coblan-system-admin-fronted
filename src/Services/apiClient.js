import axios from 'axios';

const apiClient= axios.create({
    baseURL:"http://localhost:8080",
    withCredentials: true
});
export default apiClient;