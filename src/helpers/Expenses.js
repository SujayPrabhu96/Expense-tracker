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

export const getExpense = async (id) => {
    try{
        const get_url = `${apis.getExpense}${id}`;
        const response = await axios.get(get_url);
        return response.data;
    } catch(error){
        throw new Error(error);
    }
};

export const deleteExpense = async (id) => {
    try{
        const delete_url = `${apis.deleteExpense}${id}`;
        const response = await axios.delete(delete_url);
        return response.data;
    } catch(error){
        throw new Error(error);
    }
}