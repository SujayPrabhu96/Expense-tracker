import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { userLogout } from '../actions/loginActions';
import { setSuccess } from "../actions/alertActions";

function LogoutComponent(props){

    let history = useHistory();
    props.userLogout();
    history.push("/login");
    props.setSuccess("Logout Successful");
    return null;
}

const mapDispatchToProps =  {
    userLogout,
    setSuccess
};

export default connect(null, mapDispatchToProps)(LogoutComponent);