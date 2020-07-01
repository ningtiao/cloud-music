import axios from 'axios';

export const baseUrl = 'http://172.16.1.243:3000/';

const axiosInstance = axios.create({
  baseURL: baseUrl
});

axios.defaults.baseURL= baseUrl
axiosInstance.interceptors.response.use (
  res => res.data,
  err => {
      console.log(err, '网络错误');
  }
);

export {
    axiosInstance
};