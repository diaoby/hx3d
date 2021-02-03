import React from 'react';
import style from '../ManIndex.less';
import echarts from 'echarts';
class EmerList extends React.Component {
  componentWillMount() {
  }
  componentDidMount() {
    this.getChart01();
    this.getChart02();
    this.getChart03();
  };
  getChart01() {
    var emerChart04 = echarts.init(document.getElementById('emerChart04'));
    emerChart04.setOption({
      color: ['#3398DB'],
      grid: {
        left: '4%',
        right: '4%',
        bottom: '2%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#fff',
            fontSize: 22
          },
          lineStyle: {
            color: '#fff'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        type: 'category',
        data: ['液压偏高',
          '液压偏低',
          '液位偏高',
          '液位偏低',
          '火情告警'],
        axisLabel: {
          show: true,
          interval: 0,
          rotate: 0,
          margin: 10,
          inside: false,
          textStyle: {
            color: '#fff',
            fontSize: 22
          },
          lineStyle: {
            color: '#fff'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        }
      },
      series: [{
        type: 'bar',
        label: {
          normal: {
            show: true,
            formatter: function (v) {
              var val = v.data;
              if (val == 0) {
                return '';
              }
              return val;
            },
            color: '#fff',
            fontSize:22
          }
        },
        data: [18, 33, 45, 36, 8]
      }]
    });
  };
  getChart02() {
    var emerChart05 = echarts.init(document.getElementById('emerChart05'));
    emerChart05.setOption({
      grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%'
      },
      xAxis: [{
        type: 'category',
        data: ['烟感', '液压', '液位', '消防栓'],
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.12)'
          }
        },
        axisLabel: {
          margin: 10,
          color: '#e2e9ff',
          fontSize: 20,
        },
      }],
      yAxis: [{
        axisLabel: {
          formatter: '{value}%',
          color: '#e2e9ff',
          fontSize: 20,
          margin: -20,
        },
        axisLine: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.12)'
          }
        }
      }],
      series: [{
        type: 'bar',
        data: [80, 45, 70, 20],
        barWidth: '50px',
        center: [50, 50],
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0,244,255,1)' // 0% 处的颜色
            }, {
              offset: 1,
              color: 'rgba(0,77,167,1)' // 100% 处的颜色
            }], false),
            shadowColor: 'rgba(0,160,221,1)',
            shadowBlur: 4,
          }
        },
        label: {
          normal: {
            show: true,
            lineHeight: 30,
            width: 80,
            height: 30,
            color:'#fff',
            fontSize:22,
            backgroundColor: 'rgba(0,160,221,0.1)',
            borderRadius: 100,
            position: ['-8', '-60'],
            distance: 1,
            formatter: [
              '    {d|●}',
              ' {a|{c}}     \n',
              '    {b|}'
            ].join(','),
            rich: {
              d: {
                color: '#3CDDCF',
              },
              a: {
                color: '#fff',
                align: 'center',
                fontSize:22
              },
              b: {
                width: 1,
                height: 30,
                borderWidth: 1,
                borderColor: '#234e6c',
                align: 'left'
              },
            }
          }
        }
      }]
    });
  };
  getChart03() {
    var emerChart06 = echarts.init(document.getElementById('emerChart06'));
    emerChart06.setOption({
      tooltip: {},
      xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
          show: true,
          lineStyle: {
            color: '#f9f9f9'
          },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
          textStyle: {
            color: '#d1e6eb',
            margin: 15,
            fontSize:22
          },
        },
        axisTick: {
          show: false,
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月',],
      }],
      yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 7,
        splitLine: {
          show: true,
          lineStyle: {
            color: '#0a3256',
            fontSize:22
          }
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          margin: 20,
          textStyle: {
            color: '#d1e6eb',
            fontSize:22
          },
        },
        axisTick: {
          show: false,
        },
      }],
      series: [{
        name: '注册总量',
        type: 'line',
        // smooth: true, //是否平滑曲线显示
        // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 10,
        lineStyle: {
          normal: {
            color: "#28ffb3", // 线条颜色
          },
          borderColor: '#f0f'
        },
        label: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#fff',
            fontSize:22
          }
        },
        itemStyle: {
          normal: {
            color: "#28ffb3",

          }
        },
        tooltip: {
          show: false
        },
        areaStyle: { //区域填充样式
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0,154,120,1)'
            },
            {
              offset: 1,
              color: 'rgba(0,0,0, 0)'
            }
            ], false),
            shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
            shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          }
        },
        data: [39, 48, 85, 61, 68, 24, 87]
      }, {
        name: '最新注册量',
        type: 'bar',
        barWidth: 20,
        tooltip: {
          show: false
        },
        label: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#fff',
          }
        },
        itemStyle: {
          normal: {
            color: function (params) {
              var colorList = ['#0ec1ff', '#10cdff', '#12daff', '#15ebff', '#17f8ff', '#1cfffb', '#1dfff1'];
              return colorList[params.dataIndex];
            }
          }
        },
        data: [20, 38, 62, 67, 86, 15, 36]
      }]
    });
  };
  render() {
    return (
      <div className={style.operPart}>
        <div className={style.monEchartBt}></div>
        <div className={style.emerRcyy}>
          <div className={style.videoBt}>
            <h3>事件统计</h3>
          </div>
          <div id="emerChart04" className={style.emerChart}></div>
          <div className={style.videoBt}>
            <h3>消防设备完好率</h3>
          </div>
          <div id="emerChart05" className={style.emerChart1}></div>
          <div className={style.videoBt}>
            <h3>消防异常变化趋势</h3>
          </div>
          <div id="emerChart06" className={style.emerChart}></div>
        </div>
      </div>
    );
  }
}
export default EmerList;
