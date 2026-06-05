import axios from 'axios';

export const baseURL:string = 'http://localhost:5000/api';

const instance = axios.create({baseURL, headers: { 'Content-Type': 'application/json'}});
export default instance;