import React from 'react';
import style from '../ManIndex.less';
class ProData extends React.Component {
  componentWillMount() {

  }
  componentDidMount() {

  };
  render() {
    return (
      <div className={style.monitorData}>
        <ul className={style.proUl}>
          <li className={style.green}>
            <div className={style.dataNum}>8</div>
            <div className={style.dataName}>路灯故障数</div>
          </li>
          <li className={style.blue}>
            <div className={style.dataNum}>2</div>
            <div className={style.dataName}>井盖故障数</div>
          </li>
          <li className={style.orange}>
            <div className={style.dataNum}>1</div>
            <div className={style.dataName}>垃圾箱故障</div>
          </li>
          <li className={style.orange}>
            <div className={style.dataNum}>5</div>
            <div className={style.dataName}>烟感故障数</div>
          </li>
        </ul>
      </div>
    );
  }
}
export default ProData;
