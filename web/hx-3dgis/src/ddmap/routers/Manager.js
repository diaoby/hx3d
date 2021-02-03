import React from 'react';
import {connect} from 'dva';
import ManIndex from '../modules/root/manager/ManIndex';
import Home from '../modules/root/manager/Home'
class Manager extends React.Component {
  render() {
    return (
      <div><ManIndex/></div>
      <div><Home/></div>
    )
  }
}

export default connect()(Manager);
