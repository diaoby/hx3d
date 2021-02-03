import React from 'react';
import style from '../ManIndex.less';
class EnergyData extends React.Component {
  componentWillMount() {

  }
  componentDidMount() {

  };
  render() {
    return (
      <div className={style.monitorData}>
        <ul className={style.operUl}>
          <li className={style.green}>
            <div className={style.dataNum}>32</div>
            <div className={style.dataName}>充电桩总数</div>
          </li>
          <li className={style.blue}>
            <div className={style.dataNum}>76</div>
            <div className={style.dataName}>运行数</div>
          </li>
          <li className={style.orange}>
            <div className={style.dataNum}>285</div>
            <div className={style.dataName}>故障数</div>
          </li>
          <li className={style.red}>
            <div className={style.dataNum}>76</div>
            <div className={style.dataName}>今日报警数</div>
          </li>
        </ul>
      </div>
    );
  }
}
export default EnergyData;
