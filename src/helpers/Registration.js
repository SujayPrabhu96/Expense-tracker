import { apis } from '../apis/endPoints';
import axios from '../apis/axios';

export const register =  async ({ email, password }) => {
    const response = await axios.post(apis.userSignup, { email, password });
    return response.data;
};