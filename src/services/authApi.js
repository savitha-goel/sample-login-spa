import axios from 'axios';

let authApi = axios.create({
  baseURL: 'http://5edsoijsi3.execute-api.us-west-2.amazonaws.com'
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login(values) {
    return authApi.post('/prod/check-login', values);
  }
};
