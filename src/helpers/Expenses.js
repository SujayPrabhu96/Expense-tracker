import { apis } from '../apis/endPoints';
import axios from '../apis/axios';

export const listExpenses = async () => {
    const response = await axios.get(apis.userExpenses);
    return response.data;
};