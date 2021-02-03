import React from 'react';
import style from '../ManIndex.less';
class MonitorData extends React.Component {
  componentWillMount() {

  }
  componentDidMount() {

  };
  render() {
    return (
      <div className={style.monitorData}>
        <ul>
          <li className={style.blue}>
            <div className={style.dataNum}>367</div>
            <div className={style.dataName}>监控总数</div>
          </li>
          <li className={style.blue}>
            <div className={style.dataNum}>5</div>
            <div className={style.dataName}>监控类型</div>
          </li>
          <li className={style.red}>
            <div className={style.dataNum}>23</div>
            <div className={style.dataName}>监控故障</div>
          </li>
          <li className={style.blue}>
            <div className={style.dataNum}>43</div>
            <div className={style.dataName}>人脸识别</div>
          </li>
          <li className={style.blue}>
            <div className={style.dataNum}>245</div>
            <div className={style.dataName}>可控监控</div>
          </li>
        </ul>
      </div>
    );
  }
}
export default MonitorData;
