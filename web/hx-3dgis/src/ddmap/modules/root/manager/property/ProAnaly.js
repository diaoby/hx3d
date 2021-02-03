import React from 'react';
import style from '../ManIndex.less';
import echarts from 'echarts';
import { Table } from 'antd';
class ProAnaly extends React.Component {
    componentWillMount() {
    }
    componentDidMount() {
        this.getChart01();
        this.getChart02();
    };
    getChart01() {
        var proChart01 = echarts.init(document.getElementById('proChart01'));
        var originalData = [{
            value: 35,
            name: '果壳箱'
        }, {
            value: 32,
            name: '路灯'
        }, {
            value: 81,
            name: "井盖"
        }];
        proChart01.setOption({
            title: [{
                left: '49%',
                top: '40%',
                textAlign: 'center',
                textBaseline: 'middle',
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: 20
                }
            }, {
                left: '49%',
                top: '60%',
                textAlign: 'center',
                textBaseline: 'middle',
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: 40
                }
            }],
            series: [{
                hoverAnimation: false, //设置饼图默认的展开样式
                radius: [90, 120],
                name: 'pie',
                type: 'pie',
                selectedMode: 'single',
                selectedOffset: 16, //选中是扇区偏移量
                clockwise: true,
                startAngle: 90,
                color: ['#c5e383', '#ee7433', '#00c2c1'],
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 26,
                            color: '#fff'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#fff',
                        }
                    }
                },
                data: originalData
            }]
        });
    };
    getChart02() {
        var proChart02 = echarts.init(document.getElementById('proChart02'));
        proChart02.setOption({
            grid: {
                top: '15%',
                right: '3%',
                left: '5%',
                bottom: '12%'
            },
            xAxis: [{
                type: 'category',
                data: ['果壳箱', '井盖', '路灯'],
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.12)'
                    }
                },
                axisLabel: {
                    margin: 10,
                    color: '#e2e9ff',
                    textStyle: {
                        fontSize: 22,
                        color:'#fff'
                    },
                },
            }],
            yAxis: [{
                axisLabel: {
                    formatter: '{value}%',
                    margin: -25,
                    color: '#e2e9ff',
                    textStyle: {
                        fontSize: 22,
                        color:'#fff'
                    },
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
                data: [35, 32, 81],
                barWidth: '60px',
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
    render() {
        const columns = [
            {
                title: '运行状态',
                dataIndex: 'name',
            },
            {
                title: (<div className={style.zxTh}><i></i>在线</div>),
                dataIndex: 'age', 
                render: text => <span className={style.numFont}>{text}</span> 
            },
            {
                title: (<div className={style.lxTh}><i></i>离线</div>),
                dataIndex: 'address',
                render: text => <span className={style.numFont}>{text}</span> 
            }, {
                title: (<div className={style.gjTh}><i></i>告警</div>),
                dataIndex: 'alarm',
                render: text => <span className={style.numFont}>{text}</span> 
            }
        ];
        const data = [
            {
                key: '1',
                name: '路灯',
                age: 18,
                address: 0,
                alarm: 2
            },
            {
                key: '2',
                name: '井盖',
                age: 35,
                address: 0,
                alarm: 5
            },
            {
                key: '3',
                name: '果壳箱',
                age: 18,
                address: 1,
                alarm: 6
            },
        ];
        return (
            <div className={style.emerInfo}>
                <div className={style.monEchartBt}></div>
                <div className={style.infoVideo}>
                    <div className={style.videoBt}>
                        <h3>公共设施信息</h3>
                    </div>
                    <Table columns={columns} dataSource={data} className={style.peoTable}
                        pagination={false}
                    />
                    <div className={style.videoBt} style={{marginTop:'10px'}}>
                        <h3>公共设施建设概况</h3>
                    </div>
                    <div id="proChart01" className={style.emerChart}></div>
                    <div className={style.videoBt}>
                        <h3>公共设施故障上报情况</h3>
                    </div>
                    <div id="proChart02" className={style.emerChart}></div>
                </div>
            </div>
        );
    }
}
export default ProAnaly;
