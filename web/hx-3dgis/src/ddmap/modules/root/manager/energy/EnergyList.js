import React from 'react';
import style from '../ManIndex.less';
import echarts from 'echarts';
import Utils from '../../../../utils/Utils';
class EnergyList extends React.Component {
  componentWillMount() {
  }
  componentDidMount() {
    this.getChart01();
    this.getChart02();
    this.getChart03();
    this.getChart04();
    this.getChart05();
  };
  getChart01() {
    var eneryChart04 = echarts.init(document.getElementById('eneryChart04'));
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
    eneryChart04.setOption({
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
        radius: [80, 80],
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
        radius: [80, 80],
        startAngle: '135',
        data: [{
          "value": data1,
          "name": "",
          "label": {
            "normal": {
              "show": true,
              "formatter": '{c|35%} {b|} \n {a|能效比}',
              rich: {
                c: {
                  color: '#ffffff',
                  fontSize: 26,
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
                  fontSize: 26,
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
      }]
    });
  };
  getChart02() {
    var eneryChart05 = echarts.init(document.getElementById('eneryChart05'));
    eneryChart05.setOption({
      xAxis: [{
        type: 'value',
        show: false,
        color: '#fff',
        fontSize: 22
      }],
      yAxis: [{
        type: 'category',
        show: false,
        color: '#fff',
        fontSize: 22

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
    var eneryChart06 = echarts.init(document.getElementById('eneryChart06'));
    eneryChart06.setOption({
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
  getChart04() {
    var eneryChart07 = echarts.init(document.getElementById('eneryChart07'));
    eneryChart07.setOption({
      color: ['#82f8d8'],
      xAxis: {
        type: 'category',
        data: ['10-27', '10-26', '10-25', '10-24', '10-23', '10-22', '10-21', '10-20', '10-19', '10-18'],
        axisLabel: {
          rotate: 45,
          fontSize: 22,
          color: '#fff'
        },
        axisLine: {
          lineStyle: {
            color: '#DDD'
          }
        },
      },
      yAxis: {
        type: 'value',
        name: '数量/天',
        nameTextStyle: {
          fontSize: 22,
          color: '#fff'
        },
        axisLine: {
          lineStyle: {
            color: '#DDD'
          }
        },
        axisLabel: {
          fontSize: 22,
          color: '#fff'
        }
      },
      series: [{
        data: [35, 55, 32, 76, 24, 45, 23, 34, 66, 45],
        type: 'bar',
        itemStyle: {
          normal: {
            label: {
              show: true, //开启显示
              position: 'top', //在上方显示
              textStyle: { //数值样式
                color: '#fff',
                fontSize: 22
              }
            }
          }
        }
      }]
    });
  }
  getChart05() {
    var eneryChart08 = echarts.init(document.getElementById('eneryChart08'));
    var giftImageUrl = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDAgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAxNCBDb3B5IDM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0xIiBwb2ludHM9IjAgNDcgNDAgNDcgNDAgMCAwIDAiPjwvcG9seWdvbj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLplKbpsqTnuqIt5a6M56i/IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTMuMDAwMDAwLCAtNDM0Mi4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE0LUNvcHktMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTMuMDAwMDAwLCA0MzQyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTMyLDIxLjk0MjQ2OTIgQzMyLDE1LjM0Njg0OTIgMjYuNjI3MzkzMiwxMCAyMC4wMDExNzgyLDEwIEMxMy4zNzI2MDY4LDEwIDgsMTUuMzQ2ODQ5MiA4LDIxLjk0MjQ2OTIgQzgsMjUuODI3MTQyNyA5Ljg3MjE2NDk1LDI5LjI2NzQxODEgMTIuNzU3NTg0NywzMS40NDgzNjk4IEMxMy44MTU2MTEyLDMyLjc1MzQyMzEgMTUuMDIwOTEzMSwzNC43MzM4Njc5IDE1LjAyMDkxMzEsMzYuOTg2MzQ1NCBMMTUuMDIwOTEzMSw0MSBMMjQuOTc5MDg2OSw0MSBMMjQuOTc5MDg2OSwzNi45ODYzNDU0IEMyNC45NzkwODY5LDM0LjczMzg2NzkgMjYuMTg0Mzg4OCwzMi43NTM0MjMxIDI3LjI0MjQxNTMsMzEuNDQ4MzY5OCBDMzAuMTI3ODM1MSwyOS4yNjc0MTgxIDMyLDI1LjgyNzE0MjcgMzIsMjEuOTQyNDY5MiIgaWQ9IkZpbGwtMSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2LjA4MDEyMDIsMzkuOTIwNTA3MyBMMjQuOTE5ODc5OCwzOS45MjA1MDczIEwyNC45MTk4Nzk4LDM2LjQ1NjMwNjQgQzI0LjkxOTg3OTgsMzQuMDM1MzQyMyAyNi4yMTEzODQsMzEuOTMyNDk1MiAyNy4yOTUwNzM1LDMwLjU5MzM2MjggTDI3LjM5MDE3NTIsMzAuNTAyMTM4MSBDMzAuMjY2NzA3NCwyOC4zMjc5NDg1IDMxLjkxNjMxMDUsMjUuMDI4NjUzOSAzMS45MTYzMTA1LDIxLjQ1MjE3NjUgQzMxLjkxNjMxMDUsMTUuMTgyMjMwMiAyNi43OTQ5MDkxLDEwLjA4MDY2MjMgMjAuNTAwNTg3LDEwLjA4MDY2MjMgQzE0LjIwNTA5MDksMTAuMDgwNjYyMyA5LjA4MzY4OTQ4LDE1LjE4MjIzMDIgOS4wODM2ODk0OCwyMS40NTIxNzY1IEM5LjA4MzY4OTQ4LDI1LjAyNzQ4NDQgMTAuNzM0NDY2NywyOC4zMjc5NDg1IDEzLjYwOTgyNDgsMzAuNTAyMTM4MSBMMTMuNzAzNzUyNCwzMC41OTMzNjI4IEMxNC43ODg2MTYsMzEuOTMxMzI1NiAxNi4wODAxMjAyLDM0LjAzNDE3MjcgMTYuMDgwMTIwMiwzNi40NTYzMDY0IEwxNi4wODAxMjAyLDM5LjkyMDUwNzMgWiBNMjYuMDAzNTY5Miw0MSBMMTQuOTk2NDMwOCw0MSBMMTQuOTk2NDMwOCwzNi40NTYzMDY0IEMxNC45OTY0MzA4LDM0LjM3OTE4OTQgMTMuODY2OTUxNiwzMi41MjY2MjU1IDEyLjkwMTg0NTcsMzEuMzIxOTkxMiBDOS43ODU3OTgxNSwyOC45Mzk2MjIxIDgsMjUuMzQ2NzcxIDgsMjEuNDUyMTc2NSBDOCwxNC41ODY5MzAzIDEzLjYwNzQ3NjYsOSAyMC41MDA1ODcsOSBDMjcuMzkyNTIzNCw5IDMzLDE0LjU4NjkzMDMgMzMsMjEuNDUyMTc2NSBDMzMsMjUuMzQ2NzcxIDMxLjIxNDIwMTksMjguOTM5NjIyMSAyOC4wOTgxNTQzLDMxLjMyMTk5MTIgQzI3LjEzMzA0ODQsMzIuNTI2NjI1NSAyNi4wMDM1NjkyLDM0LjM4MDM1ODkgMjYuMDAzNTY5MiwzNi40NTYzMDY0IEwyNi4wMDM1NjkyLDQxIFoiIGlkPSJGaWxsLTMiIGZpbGw9IiMzQzNDM0MiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtNiI+PC9nPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtNSIgZmlsbD0iIzNDM0MzQyIgbWFzaz0idXJsKCNtYXNrLTIpIiBwb2ludHM9IjE1IDQzLjkyMyAyNSA0My45MjMgMjUgNDMgMTUgNDMiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTciIGZpbGw9IiMzQzNDM0MiIG1hc2s9InVybCgjbWFzay0yKSIgcG9pbnRzPSIxOCA0Ni45MjMgMjIgNDYuOTIzIDIyIDQ2IDE4IDQ2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC04IiBmaWxsPSIjM0MzQzNDIiBtYXNrPSJ1cmwoI21hc2stMikiIHBvaW50cz0iMTUuNjM1MDM4NCAyNiAxMyAyMi4yNzEzMjcgMTMuOTE1MzggMjEuNjQ2OTE5NCAxNS42MzUwMzg0IDI0LjA4MDU2ODcgMTcuODEzNTk0NCAyMSAxOS45OTIxNTA0IDI0LjA4MDU2ODcgMjIuMTcxOTE0MSAyMS4wMDExODQ4IDI0LjM1NjUwODIgMjQuMDgyOTM4NCAyNi4wODQ2MiAyMS42NDY5MTk0IDI3IDIyLjI3MjUxMTggMjQuMzU2NTA4MiAyNS45OTc2MzAzIDIyLjE3MzEyMTcgMjIuOTE3MDYxNiAxOS45OTA5NDI4IDI2IDE3LjgxMzU5NDQgMjIuOTE5NDMxMyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtOSIgZmlsbD0iIzNDM0MzQyIgbWFzaz0idXJsKCNtYXNrLTIpIiBwb2ludHM9IjE5IDYgMTkuOTIzIDYgMTkuOTIzIDAgMTkgMCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMTAiIGZpbGw9IiMzQzNDM0MiIG1hc2s9InVybCgjbWFzay0yKSIgcG9pbnRzPSIwIDE4LjkyMyA2IDE4LjkyMyA2IDE4IDAgMTgiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTExIiBmaWxsPSIjM0MzQzNDIiBtYXNrPSJ1cmwoI21hc2stMikiIHBvaW50cz0iMTAuMTk2OTk5NSA5IDYgNC44MDMwMDA0OSA2LjgwMzAwMDQ5IDQgMTEgOC4xOTY5OTk1MSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMTIiIGZpbGw9IiMzQzNDM0MiIG1hc2s9InVybCgjbWFzay0yKSIgcG9pbnRzPSIzNCAxOC45MjMgNDAgMTguOTIzIDQwIDE4IDM0IDE4Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0xMyIgZmlsbD0iIzNDM0MzQyIgbWFzaz0idXJsKCNtYXNrLTIpIiBwb2ludHM9IjMwLjgwMzAwMDUgOSAzMCA4LjE5Njk5OTUxIDM0LjE5Njk5OTUgNCAzNSA0LjgwMzAwMDQ5Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
    var chartName = ['天棚主机', '天棚水泵', '新风主机', '新风水泵', '地源水泵', '冷却水泵'];
    var chartData = ['12', '8', '25', '6', '20', '29']
    var data = []
    var legendName = []
    for (var i = 0; i < chartData.length; i++) {
      var c = {
        value: chartData[i],
        name: chartName[i] + chartData[i] + '%'
      }
      data[i] = c;
      legendName[i] = chartName[i] + chartData[i] + '%';
    }
    eneryChart08.setOption({
      tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
      },
      graphic: {
        elements: [{
          type: 'image',
          style: {
            image: giftImageUrl,
            width: 110,
            height: 120
          },
          left: Utils.getScreenSize() > 1920 ? '24%' : '20%',
          top: 'center'
        }]
      },
      legend: {
        orient: 'vertical',
        x: '60%',
        y: 'center',
        itemWidth: 20,
        itemHeight: 20,
        align: 'left',
        textStyle: {
          fontSize: 22,
          color: '#fff'
        },
        data: legendName
      },
      series: [{
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['30%', '50%'],
        color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
        data: data,
        labelLine: {
          normal: {
            show: false,
            length: 20,
            length2: 20,
            lineStyle: {
              color: '#12EABE',
              width: 2
            }
          }
        },
        label: {
          normal: {
            show: false,
            formatter: '{c|{c}}\n{hr|}\n{d|{d}%}',
            rich: {
              b: {
                fontSize: 20,
                color: '#fff',
                align: 'left',
                padding: 4
              },
              hr: {
                borderColor: '#12EABE',
                width: '100%',
                borderWidth: 2,
                height: 0
              },
              d: {
                fontSize: 20,
                color: '#fff',
                align: 'left',
                padding: 4
              },
              c: {
                fontSize: 20,
                color: '#fff',
                align: 'left',
                padding: 4
              }
            }
          }
        }
      }]
    });
  }
  render() {
    return (
      <div className={style.operPart}>
        <div className={style.monEchartBt}></div>
        <div className={style.emerRcyy}>
          <div className={style.videoBt}>
            <h3>当代能源标识</h3>
          </div>
          <div id="eneryChart04" className={style.perceChart} style={{ width: 250 }}></div>
          <div className={style.percepeo} style={{ zoom: '0.9' }}>
            <h3 style={{ marginLeft: '20px' }}>总负荷：53667.4KW</h3>
            <div id="eneryChart05" style={{ width: '100%', height: '40px' }}></div>
            <h3 style={{ marginLeft: '10px' }}>总能耗：53667.4KW</h3>
            <div id="eneryChart06" style={{ width: '100%', height: '40px' }}></div>
          </div>

          <div className={style.videoBt}>
            <h3>系统费用统计</h3>
          </div>
          <div id="eneryChart07" className={style.emerChart}></div>
          <div className={style.videoBt}>
            <h3 style={{ margin: '20px 0 0 0' }}>各类型费用占比</h3>
          </div>
          <div id="eneryChart08" className={style.emerChart}></div>
        </div>
      </div>
    );
  }
}
export default EnergyList;
