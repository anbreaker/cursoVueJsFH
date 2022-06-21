import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
  params: {
    key: process.env.VUE_APP_FIREBASE_APIKEY,
  },
});
