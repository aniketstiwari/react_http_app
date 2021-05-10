import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

//Interceptors are used when you want to handle errors globally
//these are functions defined globally which will be executed for every request
//leaving your app and every response returning into it
//THis will be shared throughout all the files

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
