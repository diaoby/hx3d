import React from 'react';
import echarts from 'echarts';
import style from '../ManIndex.less';
import Utils from '../../../../utils/Utils';
import Video from '../video/Video'
import CameraAddressConstant  from '../video/CameraAddressConstant.js'
class MonitorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoSrc: props.videoInfo.videoSrc,
      videoName: props.videoInfo.videoName
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ videoSrc: nextProps.videoInfo.videoSrc, videoName: nextProps.videoInfo.videoName });
  }
  componentWillMount() {
  }
  componentDidMount() {
    this.getChart01();
    this.getChart02();
    this.getChart03();
  };
  getChart01() {
    var perceChart01 = echarts.init(document.getElementById('perceChart01'));
    let data = [
      {
        value: 100,
      },
      {
        value: 340,
      }
    ];
    let color = ['#80808b', '#4bfffd'];
    let data1 = data[0].value / data[1].value;
    let baseData = [];
    for (var i = 0; i < data.length; i++) {
      baseData.push({
        value: data[i].value,
        name: data[i].name,
        itemStyle: {
          normal: {
            borderWidth: 22,
            shadowBlur: 10,
            borderColor: color[i],
          }
        }
      });
    }
    perceChart01.setOption({
      title: {
        text: '',
        textStyle: {
          color: '#fff',
          fontSize: 55,
        },
        top: '15%',
        left: '15%',
      },
      series: [{
        zlevel: 1,
        name: '',
        type: 'pie',
        selectedMode: 'single',
        radius: Utils.getScreenSize > 1920 ? [100, 100] : [80, 80],
        startAngle: '135',
        hoverAnimation: true,
        label: {
          normal: {
            show: false,
            formatter: ['{c|{c}}', '{b|{b}}'].join('\n'),
            rich: {
              b: {
                fontSize: 16,
                lineHeight: 30
              }

            }
          }
        },
        itemStyle: {
          normal: {
            shadowColor: 'rgba(8, 44, 90, 0.8)',
            shadowBlur: 200,
          }
        },
        data: baseData
      },
      {
        name: '',
        type: 'pie',
        selectedMode: 'single',
        radius: [100, 100],
        startAngle: '135',
        data: [{
          "value": data1,
          "name": "",
          "label": {
            "normal": {
              "show": true,
              "formatter": '{c|76%} {b|} \n {a|覆盖区域}',
              rich: {
                c: {
                  color: '#ffffff',
                  fontSize: 30,
                  fontWeight: 'bold',
                },
                b: {
                  color: '#FBFE27',
                  fontSize: 45,
                  lineHeight: 5
                },
                a: {
                  align: 'center',
                  color: '#fff',
                  fontSize: 30,
                  height: 50
                },
              },
              "textStyle": {
                "fontSize": 28,
                "fontWeight": "bold"
              },
              "position": "center"
            }
          }
        },]
      }
      ]
    });
  };
  getChart02() {
    var perceChart02 = echarts.init(document.getElementById('perceChart02'));
    perceChart02.setOption({
      xAxis: [{
        type: 'value',
        show: false

      }],
      yAxis: [{
        type: 'category',
        show: false,

      }],
      series: [{
        type: 'bar',
        barWidth: 16,
        silent: true,
        itemStyle: {
          normal: {
            color: '#56535b'
          }
        },
        barGap: '-100%',
        barCategoryGap: '50%',
        data: [100],
      }, {
        type: 'bar',
        barWidth: 16,
        data: [{
          value: 17,
          itemStyle: {
            normal: {
              color: '#57ffed',
            }
          }
        }]
      }]
    });
  }
  getChart03() {
    var perceChart03 = echarts.init(document.getElementById('perceChart03'));
    perceChart03.setOption({
      xAxis: [{
        type: 'value',
        show: false

      }],
      yAxis: [{
        type: 'category',
        show: false,

      }],
      series: [{
        name: '现实 ',
        type: 'bar',
        barWidth: 16,
        silent: true,
        itemStyle: {
          normal: {
            color: '#56535b'
          }
        },
        barGap: '-100%',
        barCategoryGap: '50%',
        data: [100],
      }, {
        name: ' 理想',
        type: 'bar',
        barWidth: 16,
        data: [{
          value: 49,
          itemStyle: {
            normal: {
              color: '#57ffed',
            }
          }
        }]
      }]
    });
  }
  render() {
    return (
      <div className={style.monInfo}>
        <div className={style.monEchartBt}></div>
        <div className={style.infoVideo}>
          <div className={style.videoBt}>
            <h3>当前摄像头信息</h3>
          </div>
          <div>
            {/* <video autoPlay loop muted data-keepplaying data-autoplay className={style.videoBig} src={this.state.videoSrc}>
              您的浏览器不支持 video 标签。
          </video> */}
          {
            CameraAddressConstant.CAMERA_ADDRESS_LIST.map((item,index) =>{
                return   (<li key={item.playerId + index}>
                          <Video
                              playerUrl={item.playerUrl}
                              playerId={item.playerId}
                              playerAddress={item.playerAddress}
                              playerName={item.playerName}
                              playerClassName='video-js vjs-big-play-centered vjs-fluid'
                          ></Video>
                      </li>
                )
            })
        }
          </div>
          <div className={style.fullScence}></div>
          <div className={style.videoText}>
            <h4>摄像头信息</h4>
            <div className={style.infoList}>
              <span>{this.state.videoName}</span>
              <span>网络数据</span>
            </div>
            <div className={style.infoList1}>
              <span>1920*1080</span>
              <span>5ms</span>
            </div>
          </div>
        </div>
        <div className={style.perce}>
          <div className={style.videoBt}>
            <h3>摄像头覆盖占比</h3>
          </div>
          <div id="perceChart01" className={style.perceChart}></div>
          <div className={style.percepeo}>
            <h3 style={{ marginLeft: '20px' }}>人脸识别区域：17%</h3>
            <div id="perceChart02" style={{ width: '100%', height: '40px' }}></div>
            <h3 style={{ marginLeft: '10px' }}>可控摄像头区域：49%</h3>
            <div id="perceChart03" style={{ width: '100%', height: '40px' }}></div>
          </div>
        </div>
      </div>
    );
  }
}
export default MonitorInfo;
