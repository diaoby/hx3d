import React from 'react';
import style from '../ManIndex.less';
import Request from '../../../../utils/Request';
class OperData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {number: 1.0};
  }
  componentWillMount() {

  }
  componentDidMount() {
      //modify diaoby axios 请求日常运行数据
      let url = `https://fb02227e-b7c2-41b0-86cc-2a4e283fe591.mock.pstmn.io`;
      Request.get(url, { asyn: true }, this.getTableDataBack.bind(this), this);
  }

  
  getTableDataBack(data) {
    this.setState({
      opacity: data.number,
    });
  }

  render() {
    return (
      <div className={style.monitorData}>
        <ul className={style.energyUl}>
          <li className={style.green}>
            <div className={style.dataNum}>{this.state.opacity}</div>
            <div className={style.dataName}>企业人数</div>
          </li>
          <li className={style.blue}>
            <div className={style.dataNum}>55</div>
            <div className={style.dataName}>访客人数</div>
          </li>
          <li className={style.orange}>
            <div className={style.dataNum}>8</div>
            <div className={style.dataName}>访客企业</div>
          </li>
          <li className={style.orange}>
            <div className={style.dataNum}>3</div>
            <div className={style.dataName}>巡逻人数</div>
          </li>
        </ul>
      </div>
    );
  }

}
export default OperData;
