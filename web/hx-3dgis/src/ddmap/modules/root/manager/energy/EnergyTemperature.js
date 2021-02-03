import React from 'react';
import style from '../ManIndex.less';
import echarts from 'echarts';
import { Row,Col,Switch,Slider  } from 'antd';
import UrlConst from '../../../../utils/UrlConst';
import Request from '../../../../utils/Request';


const energrId = '8d78e04fc1984e4f8d3ea1dd6cbc8599'//'a4c6d0a154e7454baf3717d5dc4e4030';
const WD_SD_METHOD = 'WD_SD';
const QTFORCE_MENTHOD = 'QTFORCE'

class EnergyTemperature  extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      tempValue:22,
      tempStatus:true
    };
    this.onChangeTempValue = this.onChangeTempValue.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onAfterChange = this.onAfterChange.bind(this);
  }

  componentWillMount() {
   
  }


  componentDidMount() {
    let url = UrlConst.SERVIER_URL.GETTEMPERATRUE+energrId;;
    // let url = `http://localhost:8082/web/home/energytest/gettemperatrue/`+energrId;
    Request.get(url,{ asyn: true }, this.onChangeTempValue.bind(this), this);
  };

  
/**
 * 调整温度
 * @param  value 
 */
  onChangeTempValue(data){
    console.log(data.tempValue)
    console.log(data.tempStatus)
    const tempStatus = data.tempStatus==1?true:false;
    this.setState({
      tempValue:data.tempValue,
      tempStatus:tempStatus
    },() => { // 在状态更新且界面更新之后回调
      this.temperature()
    });
  }


  onAfterChange(value){
    this.setState({
      tempValue:value
    },() => { // 在状态更新且界面更新之后回调
      this.temperature();
      let url = UrlConst.SERVIER_URL.INVOKEMETHOD+WD_SD_METHOD+`/`+energrId+`/`+value;
      // let url = `http://localhost:8082/web/home/energytest/invokemethod/`+WD_SD_METHOD+`/`+energrId+`/`+value;
      Request.get(url,{ asyn: true }, null, this);
    });
  }

  /**
   * 开关
   * @param  value 
   */
  onChangeStatus(value){
    console.log(value)
    this.setState({
      tempStatus:value
    },() => { // 在状态更新且界面更新之后回调
     //更新后台方法
     const tempStatus = value==true?'1':'0';
     let url = UrlConst.SERVIER_URL.INVOKEMETHOD+QTFORCE_MENTHOD+`/`+energrId+`/`+tempStatus;
    //  let url = `http://localhost:8082/web/home/energytest/invokemethod/`+QTFORCE_MENTHOD+`/`+energrId+`/`+tempStatus;
     Request.get(url,{ asyn: true }, null, this);
    });
  }
  
  //温度仪表盘
  temperature(){
      /*仪表盘*/
        var eneryChart = echarts.init(document.getElementById('eneryChart'));
        eneryChart.setOption({
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
            {
                name: "当前温度",
                type: "gauge",
                min: 0,
                max: 40,
                detail: { formatter: "{value}℃" },
                data: [{ value: this.state.tempValue, name: "温度" }],
                axisLine: {
                    lineStyle: {
                        color: [
                            [0.5, "#4dabf7"],
                            [0.65, "#69db7c"],
                            [0.8, "#ffa94d"],
                            [1, "#ff6b6b"]
                        ]
                    }
                }
            }
        ]
    })
  };

  render() {
    return (
      <div>
              <div>
                <Row>
                <Col span={12}>
                  <Switch 
                    checkedChildren="开启" 
                    unCheckedChildren="关闭" 
                    checked={this.state.tempStatus} 
                    onChange={this.onChangeStatus}/>
                 </Col> 
                <Col span={12}>
                    <Slider 
                      min={0} 
                      max={40} 
                      defaultValue={this.state.tempValue} 
                      onAfterChange={this.onAfterChange}
                      />
                 </Col> 
               </Row>
              <div className={style.monChart}>
                <div id="eneryChart" className={style.emerChart}></div>
              </div>
          </div>
      </div>
    );
  }
}
export default EnergyTemperature;
