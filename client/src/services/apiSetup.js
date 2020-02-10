import axios from 'axios';
const apiSetup = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        "content-Type": "application/x-form-urlencoded"
    }
});
export default apiSetup;
