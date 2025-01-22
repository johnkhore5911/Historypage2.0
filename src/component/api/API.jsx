// api.js
import axios from 'axios';

const API = axios.create({
  baseURL:'https://historypage-cyan.vercel.app/api/user/createImg',
});

export default API;
