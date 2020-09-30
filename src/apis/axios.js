import axios from 'axios';
import { domain } from './config';
import { APP_URL } from '../apis/config';

const instance = axios.create({
    baseURL: APP_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

export default instance;