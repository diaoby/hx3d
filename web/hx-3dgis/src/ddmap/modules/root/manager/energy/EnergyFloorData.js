import React from 'react';
import style from '../ManIndex.less';
import Request from '../../../../utils/Request'
import UrlConst from '../../../../utils/UrlConst'
class EnergyFloorData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalEnergy:0,
      energyTestsList: []
    };
  }

  componentWillMount() {

  }
  componentDidMount() {
    //modify diaoby axios 请求日常运行数据
      let url = UrlConst.SERVIER_URL.GETENERGYTEST;
      Request.get(url, { asyn: true }, this.getTableDataBack.bind(this), this);
  };

  getTableDataBack(data) {
    this.setState({
      totalEnergy: data.totalEnergy,
      energyTestsList: data.energyTestsList
    });
  }

  render() {
    return (
      <div>
          <div style={{ margin: '10px 0 15px' }}>
              <div className={style.mainIco}>
                  <div>总电量</div>
                  <font>{this.state.totalEnergy}</font>
              </div>
              <div className={style.mainIco1}>
                  <div>电量</div>
                  <font>{this.state.totalEnergy}</font>
              </div>
          </div>
           {
             this.state.energyTestsList.map((item,index) =>{
                return   <div className={style.mainType} key={index}>
                            <font>{item.energyName}</font>
                            <span className={style.alarm}>{item.energyNum}</span>
                        </div>
             })
           }
      </div>
    );
  }
}
export default EnergyFloorData;
