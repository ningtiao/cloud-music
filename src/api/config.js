import axios from 'axios';

export const baseUrl = 'http://192.168.1.102:3000/';

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