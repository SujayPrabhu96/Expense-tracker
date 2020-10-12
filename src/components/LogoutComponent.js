import { useHistory } from 'react-router-dom';
import { userLogout } from '../actions/loginActions';
import { useDispatch } from 'react-redux';

function LogoutComponent(){

    let history = useHistory();
    let dispatch = useDispatch();
    dispatch(userLogout());
    history.push("/login");
    return null;
}

export default LogoutComponent;