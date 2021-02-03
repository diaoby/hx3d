import React from 'react';
import style from '../ManIndex.less';
import echarts from 'echarts';
class MainList extends React.Component {
  componentWillMount() {
  }
  componentDidMount() {
    this.getChart01();
    this.getChart02();
    this.getChart03();
  };
  getChart01() {
    var mainChart01 = echarts.init(document.getElementById('mainChart01'));
    mainChart01.setOption({
      title: {
        subtext: '单位：V',
        subtextStyle:{
          color:'#fff',
          fontSize:26,
        },
        left: 'right',
        color: '#fff'
      },

      grid: {
        left: '3%',
        right: '4%',
        top: 55,
        bottom: '10%',
        containLabel: true
      },

      tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      xAxis: {
        type: 'value',
        axisTick: {
          show: true
        },
        axisLabel: {
          color: "#fff",
          fontSize:22
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff',
          }
        },
        splitLine: {
          show: true
        },
      },
      yAxis: [{
        type: 'category',
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff",
          fontSize:22
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff',
          }
        }, data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00',
          '14:00', '16:00', '18:00', '20:00', '22:00', '24:00']

      }
      ],
      series: [{
        type: 'bar',
        itemStyle: {
          normal: {
            show: true,
            color: '#07f1f6',
            barBorderRadius: 50,
            borderWidth: 0,
            borderColor: '#82f8d8',
          }
        },
        barGap: '0%',
        barCategoryGap: '50%',
        data: [110, 119, 125, 233, 345, 300, 235, 250, 157, 160, 266, 171, 151]
      }]
    });
  };
  getChart02() {
    var lineColor = '#2F5384';
    var labelColor = '#fff';
    var fontSize = '22';
    var mainChart02 = echarts.init(document.getElementById('mainChart02'));
    mainChart02.setOption({
      xAxis: [
        {
          type: 'category',
          axisLabel: {
            color: labelColor,
            fontSize: fontSize
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: lineColor,
              width: 2
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#195384'
            }
          },
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '单位A',
          nameTextStyle: {
            fontSize: 26,
            color: '#fff'
          },
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: labelColor,
              fontSize: fontSize
            }
          },
          axisLine: {
            lineStyle: {
              color: lineColor,
              width: 2
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#142B57'
            }
          }
        }
      ],
      series: [
        {
          name: '完成率',
          type: 'line',
          stack: '总量',
          symbol: 'circle',
          symbolSize: 10,
          smooth: true,
          itemStyle: {
            normal: {
              color: 'rgba(3,240,254,1)',
              lineStyle: {
                color: "rgba(3,240,254,1)",
                width: 2
              },
              areaStyle: {
                //color: '#94C9EC'
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(3,240,254,.7)'
                }, {
                  offset: 1,
                  color: 'rgba(3,240,254,0)'
                }])
              },
              shadowColor: 'rgba(3,240,254,1)',
              shadowBlur: 20,
            }
          },
          markPoint: {
            itemStyle: {
              normal: {
                color: 'red'
              }
            }
          },
          data: [12, 13, 10, 13, 9, 23, 21, 12, 19, 23, 29, 33]
        }]
    });
  }
  getChart03() {
    var mainChart03 = echarts.init(document.getElementById('mainChart03'));
    var normalcolor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      offset: 0,
      color: '#7aeac4'
    }, {
      offset: 1,
      color: '#7aeac4'
    }]);
    var maxcolor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      offset: 0,
      color: '#64a9f6'
    }, {
      offset: 1,
      color: '#64a9f6'
    }]);
    mainChart03.setOption({
      timeline: {
        data: ['10月16日', '10月17日', '10月18日', '10月19日', '10月20日', '10月21日', '10月22日', '10月23日', '10月24日', '10月25日'],
        axisType: 'category',
        show: false,
        autoPlay: true,
        playInterval: 3000,
        checkpointStyle: {
          color: '#04a5f1',
          borderColor: 'rgba(4, 165, 261, .5)'
        },
        itemStyle: {
          normal: {
            color: '#04a5f1'
          },
          emphasis: {
            color: '#04a5f1'
          }
        },
        lineStyle: {
          color: '#ddd'
        },
      },
      options: [{
        xAxis: [{
          'type': 'category',
          'axisLabel': {
            'interval': 0
          },
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: "#fff",
              fontSize: 22
            },
            rotate: 45
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
              width: 2
            }
          },
          'data': [
            '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', "24:00"
          ]
        }],
        yAxis: [{
          'type': 'value',
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: "#fff",
              fontSize: 16
            }
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
              width: 2
            }
          },
          'max': 200
        }, {
          'type': 'value',
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: "#fff",
              fontSize: 22
            }
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
              width: 2
            }
          },
        }],
        series: [{
          'yAxisIndex': 1,
          'type': 'bar',
          'data': [5, 6, 8, 28, 8, 24, 11, 16],
          itemStyle: {
            normal: {
              color: function (params) {
                if (params.value < 60)
                  return normalcolor
                else
                  return maxcolor
              }
            },
            emphasis: {
              color: new echarts.graphic.LinearGradient(
                0, 1, 0, 0, [{
                  offset: 0,
                  color: '#2af598'
                }, {
                  offset: 1,
                  color: '#009efd'
                }]
              ),
              barBorderRadius: 4
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{c}',
              color: '#fff',
              fontSize:22
            }
          },
        }]
      }, {
        title: {
          'text': '10月16日',
          textStyle: {
            color: '#fff',
            fontSize:26
          }
        },
        series: [{
          'data': [45, 43, 64, 134, 188, 43, 109, 12]
        }]
      }, {
        title: {
          'text': '10月17日'
        },
        series: [{
          'data': [110, 32, 111, 176, 73, 59, 181, 9]
        }]
      }, {
        title: {
          'text': '10月18日'
        },
        series: [{
          'data': [94, 37, 64, 55, 56, 41, 70, 17]
        }]
      }, {
        title: {
          'text': '10月19日'
        },
        series: [{
          'data': [5, 6, 5, 28, 8, 24, 11, 16]
        }]
      }, {
        title: {
          'text': '10月20日'
        },
        series: [{
          'data': [45, 34, 64, 134, 188, 43, 109, 12]
        }]
      }, {
        title: {
          'text': '10月21日'
        },
        series: [{
          'data': [5, 6, 34, 28, 8, 24, 11, 16]
        }]
      }, {
        title: {
          'text': '10月22日'
        },
        series: [{
          'data': [94, 37, 64, 55, 56, 41, 70, 17]
        }]
      }, {
        title: {
          'text': '10月23日'
        },
        series: [{
          'data': [45, 40, 64, 134, 188, 43, 109, 12]
        }]
      }, {
        title: {
          'text': '10月24日'
        },
        series: [{
          'data': [5, 6, 10, 28, 8, 24, 11, 16]
        }]
      }, {
        title: {
          'text': '10月25日'
        },
        series: [{
          'data': [8, 24, 11, 16, 5, 6, 34, 28]
        }]
      }, {
        title: {
          'text': '10月26日'
        },
        series: [{
          'data': [5, 6, 10, 18, 8, 33, 11, 16]
        }]
      }]
    });
  }
  render() {
    return (
      <div className={style.operPart}>
        <div className={style.monEchartBt}></div>
        <div className={style.emerRcyy}>
          <div className={style.videoBt}>
            <h3>三箱电压</h3>
          </div>
          <div id="mainChart01" className={style.emerChart}></div>
          <div className={style.videoBt}>
            <h3>三箱电流</h3>
          </div>
          <div id="mainChart02" className={style.emerChart}></div>
          <div className={style.videoBt}>
            <h3>功率</h3>
          </div>
          <div id="mainChart03" className={style.emerChart}></div>
        </div>
      </div>
    );
  }
}
export default MainList;
