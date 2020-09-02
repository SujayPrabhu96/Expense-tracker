import { apis } from '../apis/endPoints';

export const register =  async ({ email, password }) => {
    try{
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        };
        return await (await fetch(apis.userSignup, requestOptions)).json();
    } catch(error){
        throw new Error(error);
    }
};