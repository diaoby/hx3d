import React from 'react';
import echarts from 'echarts';
import style from '../ManIndex.less';
class MonitorChart extends React.Component {
  componentWillMount() {

  }
  componentDidMount() {
    this.getChart01();
    this.getChart02();
    this.getChart03();
    this.getChart04();
  };
  getChart01() {
    var Monchart1 = echarts.init(document.getElementById('Monchart1'));
    Monchart1.setOption({
      tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
      },
      title: {
        text: 'FILTER BY TRAFFIC',
        x: 'center',
        top: "5%",
        textStyle: {
          color: '#fff',
          fontSize: 16
        }
      },
      legend: {
        orient: 'horizontal',
        icon: 'circle',
        bottom: 20,
        width: '80%',
        x: 'center',
        textStyle: {
          color: '#fff'
        },
        data: ['SMM', 'SQE', 'MIL', 'Orange']
      },
      series: [{
        type: 'pie',
        radius: ['30%', '35%'],
        center: ['50%', '40%'],
        color: ['#5553ce', '#feca57', '#1cd1a1', '#fe5578'],
        data: [{
          value: 335,
          name: 'SMM'
        },
        {
          value: 310,
          name: 'SQE'
        },
        {
          value: 234,
          name: 'MIL'
        },
        {
          value: 235,
          name: 'Orange'
        }
        ]
      }]
    });
  };
  getChart02() {
    var Monchart2 = echarts.init(document.getElementById('Monchart2'));
    Monchart2.setOption({
      title: {
        text: 'TIME ON SITE',
        x: 'center',
        top: "5%",
        textStyle: {
          color: '#fff',
          fontSize: 16
        }
      },
      xAxis: {
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00']
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
      },
      series: [{
        type: 'line',
        color: '#58bafb',
        data: [45, 22, 40, 37, 45, 28, 42, 33, 37, 24, 36, 48, 64, 89]
      }]
    });
  }
  getChart03() {
    var Monchart3 = echarts.init(document.getElementById('Monchart3'));
    Monchart3.setOption({
      title: {
        text: 'INSTAGRAM VISITORS',
        x: 'center',
        top: "5%",
        textStyle: {
          color: '#fff',
          fontSize: 16
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%'
      },
      xAxis: [{
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.12)'
          }
        },
        axisLabel: {
          margin: 10,
          color: '#e2e9ff',
          textStyle: {
            fontSize: 14
          },
        },
      }],
      yAxis: [{
        axisLabel: {
          formatter: '{value}',
          color: '#e2e9ff',
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
        data: [30, 45, 77, 20, 25, 18, 15, 30, 45, 77, 20, 25],
        barWidth: '5px',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#fb6884' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#232e49' // 100% 处的颜色
            }], false),
            barBorderRadius: [30, 30, 30, 30],
            shadowColor: 'rgba(0,160,221,1)',
            shadowBlur: 4,
          }
        }
      }]
    });
  }
  getChart04(){
    return;
    var Monchart4 = echarts.init(document.getElementById('Monchart4'));
    Monchart4.setOption({
      title: {
        text: 'INSTAGRAM VISITORS',
        x: 'center',
        top: "5%",
        textStyle: {
          color: '#fff',
          fontSize: 16
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%'
      },
      xAxis: [{
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.12)'
          }
        },
        axisLabel: {
          margin: 10,
          color: '#e2e9ff',
          textStyle: {
            fontSize: 14
          },
        },
      }],
      yAxis: [{
        axisLabel: {
          formatter: '{value}',
          color: '#e2e9ff',
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
        data: [30, 45, 77, 20, 25, 18, 15, 30, 45, 77, 20, 25],
        barWidth: '5px',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#fb6884' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#232e49' // 100% 处的颜色
            }], false),
            barBorderRadius: [30, 30, 30, 30],
            shadowColor: 'rgba(0,160,221,1)',
            shadowBlur: 4,
          }
        }
      }]
    });
  }
  render() {
    return (
      <div className={style.monChart}>
        <div className={style.monEchart}>
          <div className={style.monEchartBt}></div>
          <div className={style.chartLT}>
            <div id="Monchart1" className={style.chart1}></div>
            <div id="Monchart2" className={style.chart2}></div>
          </div>
          <div className={style.chartRT}>
            <div id="Monchart3" className={style.chart3}></div>
            <div id="Monchart4" className={style.chart4}></div>
          </div>
          <div className={style.chartMid}></div>
          <div className={style.chartBot}>
            <div id="Monchart6" className={style.chartBot1}></div>
            <div className={style.chartBot2}></div>
            <div className={style.chartBot3}></div>
            <div className={style.chartBot4}></div>
          </div>
        </div>
      </div>
    );
  }
}
export default MonitorChart;