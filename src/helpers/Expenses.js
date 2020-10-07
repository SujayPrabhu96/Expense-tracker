import { apis } from '../apis/endPoints';
import axios from '../apis/axios';

export const listExpenses = async () => {
    try{
        const response = await axios.get(apis.userExpenses);
        return response.data;
    } catch(error){
        throw new Error(error);
    }
};

export const saveExpense = async (expense) => {
    try{
        const response = await axios.post(apis.saveExpense, expense);
        return response.data;
    } catch(error){
        throw new Error(error);
    }
}

export const deleteExpense = async (id) => {
    try{
        const delete_url = `${apis.deleteExpense}${id}`;
        const response = axios.delete(delete_url);
    } catch(error){
        throw new Error(error);
    }
}