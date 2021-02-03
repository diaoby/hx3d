import React from 'react';
import style from '../ManIndex.less';
import echarts from 'echarts';
class MainAnaly extends React.Component {
    state = {
        defultTab: 'ktjz'
    }
    componentWillMount() {
    }
    componentDidMount() {
        this.getChart01();
        this.getChart02();
    };
    tabChange(e) {
        if (e == this.state.defultTab) {
            return;
        }
        this.setState({
            defultTab: e
        });
    }
    getChart01() {
        var mainChart04 = echarts.init(document.getElementById('mainChart04'));
        mainChart04.setOption({
            xAxis: {
                type: 'category',
                data: ['空调机组', '配电机组', '摄像头机组', '传感器'],
                axisLabel: {
                    color: '#fff',
                    fontSize: 20,
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    color: '#fff',
                    fontSize: 20
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
            },
            series: [
                {
                    data: [50, 39, 15, 21],
                    type: 'bar',
                    name: '柱状图',
                    barWidth: '50%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#00adff'
                                }, {
                                    offset: 1,
                                    color: '#047eff'
                                }
                                ])
                        }
                    }
                },
                {
                    data: [50, 39, 15, 21],
                    type: 'line',
                    name: '折线图',
                    symbolSize: 8 // 控制线条上 点 的大小
                }
            ]
        });
    };
    getChart02() {
        var mainChart05 = echarts.init(document.getElementById('mainChart05'));
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#283b56'
                    }
                }
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                }
            },
            dataZoom: {
                show: false,
                start: 0,
                end: 100
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    data: timesDate(),
                    axisLabel: {
                        color: '#fff',
                        fontSize: 20
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    name: '告警数量',
                    nameTextStyle: {
                        color: '#fff',
                        fontSize: 24,
                    },
                    max: 100,
                    min: 1,
                    boundaryGap: [0.2, 0.2],
                    axisLabel: {
                        color: '#fff',
                        fontSize: 20
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                },
            ],
            series: [
                {
                    type: 'line',
                    smooth: true,
                    symbolSize: 5,
                    symbol: 'circle',
                    showSymbol: false,
                    lineStyle:{
                        color:'#07f1f6'
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0, 187, 237, 0.5)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(0, 189, 237, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    markPoint: {
                        symbolSize: 0,
                        symbol: 'circle',
                        data: [{
                            coord: [9, 2]
                        }],
                        color:"#fff",
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                formatter: function (params) {
                                    if (params.dataIndex === 8) {
                                        return '{b}'
                                    }
                                }
                            }
                        },
                    },
                    markLine: {
                        label:{
                            fontSize:22,
                            color:'#fff'
                        },
                        lineStyle:{
                            color:'#fff'
                        },
                        data: [
                            { yAxis: 8, name: '实时' }
                        ]
                    },
                    data: rwD()
                }
            ]
        };
        var r = [];
        r = rwD();
        var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
        var data1 = option.series[0].data;
        data1.shift();
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);
        var markData = data1[data1.length - 1];
        option.series[0].markPoint.data[0].coord[1] = markData;
        option.series[0].markLine.data[0].yAxis = markData;
        mainChart05.setOption(option);

        setInterval(function () {
            var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
            var data1 = option.series[0].data;
            data1.shift();
            data1.push(Math.floor(Math.random() * (80 - 1)) + 1);

            option.xAxis[0].data.shift();
            option.xAxis[0].data.push(axisData);
            var markData = data1[data1.length - 1];
            option.series[0].markPoint.data[0].coord[1] = markData;
            option.series[0].markLine.data[0].yAxis = markData;

            mainChart05.setOption(option);
        }, 2100);
        function rwD() { // y轴数据内容更新
            var res = [];
            var len = 0;
            while (len < 80) {
                res.push((Math.random() * 80 + 5).toFixed(1) - 0);
                len++;
            }
            return res;
        }
        function timesDate() { // x轴曲线时间
            var now = new Date();
            var res = [];
            var len = 10;
            while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                now = new Date(now - 2000);
            }
            return res;
        }
    }
    render() {
        return (
            <div className={style.emerInfo}>
                <div className={style.monEchartBt}></div>
                <div className={style.infoVideo}>
                    <div className={style.videoBt}>
                        <h3>设备情况</h3>
                    </div>
                    <div style={{ margin: '10px 0 15px' }}>
                        <div className={style.mainIco}>
                            <div>功率</div>
                            <font>120.59</font>
                        </div>
                        <div className={style.mainIco1}>
                            <div>电量</div>
                            <font>584859.53</font>
                        </div>
                    </div>
                    <div className={style.mainType}>
                        <font>机组运行工况</font>
                        <span className={style.alarm}>制热</span>
                    </div>
                    <div className={style.mainType}>
                        <font>机组运行状态</font>
                        <span>运行</span>
                    </div>
                    <div className={style.mainType}>
                        <font>C1启用状态</font>
                        <span>启用</span>
                    </div>
                    <div className={style.mainType}>
                        <font>C2启用状态</font>
                        <span>启用</span>
                    </div>
                    <div className={style.videoBt}>
                        <h3>设备数量</h3>
                    </div>
                    <div id="mainChart04" className={style.emerChart1}></div>
                    <div className={style.videoBt}>
                        <h3>实时告警</h3>
                    </div>
                    <div id="mainChart05" className={style.emerChart}></div>
                </div>
            </div>
        );
    }
}
export default MainAnaly;
