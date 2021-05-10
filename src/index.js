import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

//Interceptors are used when you want to handle errors globally
//these are functions defined globally which will be executed for every request
//leaving your app and every response returning into it
//THis will be shared throughout all the files
//It is mainly used to add authorization Headers

//use() function is used to register 
axios.interceptors.request.use(request => {
  console.log(request);
  //you need to always return the request otherwise it will get blocked
  //We can also edit the request config
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log(response);
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
})

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
