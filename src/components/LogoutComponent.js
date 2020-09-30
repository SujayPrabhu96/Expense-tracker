import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { logout } from '../actions/loginActions';
import { setSuccess } from "../actions/alertActions";

function LogoutComponent(props){

    let history = useHistory();
    props.logout();
    history.push("/login");
    props.setSuccess("Logout Successful");
    return null;
}

const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch(logout()),
        setSuccess: (message) => dispatch(setSuccess(message))
    };
};

export default connect(null, mapDispatchToProps)(LogoutComponent);