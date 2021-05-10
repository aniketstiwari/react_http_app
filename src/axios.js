import axios from 'axios';

//The reason to create multiple instance of axiox because we can have multiple
// url and header in the application
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN from instance';

//we can also add interceptors for our instance
//instance.interceptors.request


export default instance;