import axios from 'axios';
import { APP_URL } from '../apis/config';
import { getLoginInitialState } from '../helpers/Login';

const instance = axios.create({
    baseURL: APP_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

instance.interceptors.request.use(
    (config) => {
      if (!config.headers.Authorization) {
        const token = getLoginInitialState().token;
        if (token) {
          config.headers.Authorization = token;
        }
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

export default instance;