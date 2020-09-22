import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { logout } from '../actions/loginActions';
import { success } from "../actions/alertActions";

function LogoutComponent(props){

    let history = useHistory();
    props.logout();
    history.push("/login");
    props.success("Logout Successful");
    return null;
}

const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch(logout()),
        success: (message) => dispatch(success(message))
    };
};

export default connect(null, mapDispatchToProps)(LogoutComponent);