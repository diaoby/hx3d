import React from 'react';
import {connect} from 'dva';
import LoginForm from '../modules/root/login/LoginForm';
class Login extends React.Component {
  render() {
    return (
      <div><LoginForm/></div>
    )
  }
}
export default connect()(Login);