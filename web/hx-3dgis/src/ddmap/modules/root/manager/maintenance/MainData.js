import React from 'react';
import style from '../ManIndex.less';
class MainData extends React.Component {
  componentWillMount() {

  }
  componentDidMount() {

  };
  render() {
    return (
      <div className={style.monitorData}>
        <ul className={style.mainUl}>
          <li className={style.green}>
            <div className={style.dataNum}>24</div>
            <div className={style.dataName}>门禁设备</div>
          </li>
          <li className={style.blue}>
            <div className={style.dataNum}>343</div>
            <div className={style.dataName}>传感设备</div>
          </li>
          <li className={style.orange}>
            <div className={style.dataNum}>76</div>
            <div className={style.dataName}>摄像头设备</div>
          </li>
          <li className={style.orange}>
            <div className={style.dataNum}>2</div>
            <div className={style.dataName}>机房设备</div>
          </li>
        </ul>
      </div>
    );
  }
}
export default MainData;
