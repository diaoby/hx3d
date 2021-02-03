import React from 'react';
import style from '../ManIndex.less';
import echarts from 'echarts';
import { Table } from 'antd';
const data01 = [0.4, 0.3, 0.1, 0.8, 0.4, 0.7, 0.9];
const data02 = [0.3, 0.5, 0.4, 0.8, 0.6, 0.2, 0.7];
const data03 = [0.6, 0.1, 0.4, 0.2, 0.6, 0.5, 0.7];
class OperList extends React.Component {
  state = {
    defultTab: '01',
  }
  componentWillMount() {
    this.currt = 0;
  }
  componentDidMount() {
    this.getChart('operChart01', data01);
    this.openClick();
  };
  openClick() {
    if (this.currt > 2) {
      this.currt = 0;
    }
    document.querySelector('#operTab').children[this.currt].click();
    this.currt++;
    this.time = setTimeout(() => {
      this.openClick();
    }, 5000);
  }
  componentWillUnmount() {
    window.clearInterval(this.time);
  }
  getChart(id, data) {
    var operChart = echarts.init(document.getElementById(id));
    if (operChart) {
      operChart.setOption({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            inside: false,
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
              fontSize: 22,
              lineHeight: 22,
            }
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          data: ['0时', '4时', '8时', '12时', '16时', '20时', '24时']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#fff',
            fontSize: 22
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
        },
        series: [{
          data: data,
          type: 'line',
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                  offset: 0,
                  color: '#4c41a7'
                },
                {
                  offset: 1,
                  color: '#6695c9'
                }
                ])
            }
          }, lineStyle: {
            normal: {
              color: "#fff", // 线条颜色
            },
          },
        }]
      });
    }
  }
  tabChange(e) {
    if (e == this.state.defultTab) {
      return;
    }
    this.setState({
      defultTab: e
    });
    setTimeout(() => {
      if (e == "01") {
        this.getChart('operChart01', data01);
      }
      if (e == "02") {
        this.getChart('operChart02', data02);
      }
      if (e == "03") {
        this.getChart('operChart03', data03);
      }
    }, 200);
  }
  render() {
    const columns = [
      { title: '停车场名称', dataIndex: 'number', key: 'number' },
      { title: '车位总数', dataIndex: 'job', key: 'job', render: text => <span className={style.numFont}>{text}</span> },
      { title: '空余车位', dataIndex: 'name', key: 'name', render: text => <span className={style.numFont}>{text}</span> },
      {
        title: '详情',
        dataIndex: '',
        key: 'x',
        render: () => <span className={style.viewInfo}>查看</span>,
      },
    ];

    const data = [
      {
        key: 1,
        number: '北区地上',
        job: '18',
        name: '15',
        description: '',
      }, {
        key: 2,
        number: '北区B1',
        job: '230',
        name: '32',
        description: '',
      }, {
        key: 3,
        number: '正门入口',
        job: '300',
        name: '12',
        description: '',
      }, {
        key: 4,
        number: '西门入口',
        job: '420',
        name: '230',
        description: '',
      }, {
        key: 5,
        number: '星光广场云台',
        job: '320',
        name: '280',
        description: '',
      }, {
        key: 6,
        number: 'A楼南侧',
        job: '400',
        name: '330',
        description: '',
      }, {
        key: 7,
        number: 'T8后山艺术空间',
        job: '500',
        name: '350',
        description: '',
      }, {
        key: 8,
        number: '南门入口',
        job: '400',
        name: '200',
        description: '',
      }
    ];
    return (
      <div className={style.operPart}>
        <div className={style.monEchartBt}></div>
        <div className={style.operRcyy}>
          <div className={style.videoBt}>
            <h3>日常运营分析</h3>
            <ul className={style.operTab} id="operTab">
              <li onClick={this.tabChange.bind(this, "01")} className={this.state.defultTab == "01" ? style.active : ""}>健康指数</li>
              <li onClick={this.tabChange.bind(this, "02")} className={this.state.defultTab == "02" ? style.active : ""}>人员统计</li>
              <li onClick={this.tabChange.bind(this, "03")} className={this.state.defultTab == "03" ? style.active : ""}>事件处理</li>
            </ul>
            <div className={style.title}>近一月报警次数</div>
            {this.state.defultTab == "01" ? <div className={style.operChart} id="operChart01"></div> : null}
            {this.state.defultTab == "02" ? <div className={style.operChart} id="operChart02"></div> : null}
            {this.state.defultTab == "03" ? <div className={style.operChart} id="operChart03"></div> : null}
          </div>
        </div>
        <div className={style.operTcc}>
          <h3 style={{marginBottom:0}}>停车场管理</h3>
          <Table
            columns={columns}
            dataSource={data}
            rowKey={record => record.key}
            pagination={false}
          />
        </div>
      </div>
    );
  }
}
export default OperList;
