import React from 'react';
import {connect} from 'dva';
import ManIndex from '../modules/root/manager/ManIndex';
import Home from '../modules/root/manager/Home'
import TodoList from '../modules/root/manager/demo/TodoList';
import ParkInfo from '../modules/root/manager/homepage/ParkInfo';
class Manager extends React.Component {
  render() {
    return (
      // <div><ManIndex/></div>
      // <div><Home/></div>
      <div>
        <TodoList></TodoList>
        <ParkInfo></ParkInfo>
      </div>
    )
  }
}

export default connect()(Manager);
