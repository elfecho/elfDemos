import axios from 'axios';

export const fetchData = () => {
  return axios.get('/user.json').then(res => res.data);
}

export const getNumber = () => {
  return 123
}