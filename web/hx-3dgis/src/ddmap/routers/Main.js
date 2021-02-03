import React from 'react';
import {connect} from 'dva';
import MainForm from '../modules/root/main/MainForm';
class Main extends React.Component {
  render() {
    return (
      <div><MainForm/></div>
    )
  }
}

export default connect()(Main);