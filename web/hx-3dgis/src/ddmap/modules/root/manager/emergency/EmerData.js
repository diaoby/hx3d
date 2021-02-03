import React from 'react';
import style from '../ManIndex.less';
class EmerData extends React.Component {
  componentWillMount() {

  }
  componentDidMount() {

  };
  render() {
    return (
      <div className={style.monitorData}>
        <ul className={style.emerUl}>
          <li className={style.green}>
            <div className={style.dataNum}>300</div>
            <div className={style.dataName}>一般事件</div>
          </li>
          <li className={style.blue}>
            <div className={style.dataNum}>152</div>
            <div className={style.dataName}>重要事件</div>
          </li>
          <li className={style.orange}>
            <div className={style.dataNum}>22</div>
            <div className={style.dataName}>紧急事件</div>
          </li>
        </ul>
      </div>
    );
  }
}
export default EmerData;
