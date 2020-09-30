import { apis } from '../apis/endPoints';
import axios from '../apis/axios';

export const login = async({ email, password }) => {
    const response = await axios.post(apis.userLogin, { email, password });
    return response.data;
}