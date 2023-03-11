import axios from 'axios'
import store from '../store';

const axios_instance = axios.create();
axios_instance.defaults.timeout = 300000;
axios_instance.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
axios_instance.defaults.headers.post['Accept'] = 'application/json;';
axios_instance.interceptors.request.use(async function (config) {
let token = await sessionStorage.getItem('token')
//   if (!navigator.onLine) {
//     alert("Hello! Seems you're offline");

//     return {
//       headers: {},
//       method: config.method,
//       url: ""
//     };
//   };
  // token =  JSON.parse(token)?.access
  token ? config.headers.Authorization = `Bearer ${token}` : null;
  // access ? config.headers.Authorization = `JWT ${access}` : null;
  //   config.headers['Access-Key'] = 'vwznw2mw.O7U8tx23y0vyC5eUClLNyYqaIAJ08P40';
  return config;
});



// const baseUrl = process.env.API_BASE_URL || 'https://hucaplms.king.name.ng/public/api/v1/'
const baseUrl = 'https://hucaplms.king.name.ng/public/api/v1/'
axios_instance.baseUrl = baseUrl
export default {
  axios_instance,
  baseUrl,
}               