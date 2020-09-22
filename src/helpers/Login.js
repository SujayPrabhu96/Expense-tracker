import { apis } from '../apis/endPoints';

export const login = async({ email, password }) => {
    try{
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }
        const user = await (await fetch(apis.userLogin, requestOptions)).json();
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    } catch(error){
        throw new Error(error);
    }
}