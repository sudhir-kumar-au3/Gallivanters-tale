import axios from 'axios';

const baseApi = axios.create({
    baseURL: ' http://gallivanters.herokuapp.com',
    headers: {
        "content-Type": "application/json"
    }
});
export default baseApi;
