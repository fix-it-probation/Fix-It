import axios from 'axios';
const baseURL = axios.create({
  baseURL: 'http://api-fixit.herokuapp.com',
});

export default baseURL;
