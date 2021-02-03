import React from 'react';
import style from '../ManIndex.less';
import echarts from 'echarts';
import EnergyFloorData from  './EnergyFloorData'
import EnergyTemperature from './EnergyTemperature'
class EnergyAnaly extends React.Component {
    componentWillMount() {
    }
    componentDidMount() {
    //    this.getChart01();
       this.getChart02();
    //    this.getChart03();
    };
    getChart01() {
        var eneryChart01 = echarts.init(document.getElementById('eneryChart01'));
        eneryChart01.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            grid: {
                left: '2%',
                right: '2%',
                bottom: '3%',
                top: "10%",
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#DDD'
                    }
                },
                axisLabel: {
                    color: '#fff',
                    fontSize: 22,
                },
                data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00']
            }],
            yAxis: [{
                type: 'value',
                name: '单位：KW-h',
                nameTextStyle:{
                    color: '#fff',
                    fontSize: 24,
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#DDD'
                    }
                },
                axisLabel: {
                    color: '#fff',
                    fontSize: 22,
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#DDD'
                    }
                }
            }],
            series: [{
                name: '最高温度',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 3
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: 'rgba(16,97,204, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(17,235,210, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {

                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: 'rgba(16,97,204,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(17,235,210,1)'
                        }])
                    },
                    emphasis: {
                        color: 'rgb(0,196,132)',
                        borderColor: 'rgba(0,196,132,0.2)',
                        extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                        borderWidth: 10,

                    },
                },
                data: [3200, 4400, 5500, 3500, 2700, 4800, 3400]
            }]
        });
    };
    getChart02() {
        var eneryChart02 = echarts.init(document.getElementById('eneryChart02'));
        eneryChart02.setOption({
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['香枫',
                    '梧桐',
                    '香芸',
                    '留香',
                    '香樟',
                    '银杏',
                    '玲珑',
                    '翡翠',
                    '广场',
                ],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#fff",
                        width: 1,
                        type: "solid"
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize:22,
                    },
                    rotate:45
                },
            }],
            yAxis: [{
                type: 'value',
                name: '单位：万KW-h',
                nameTextStyle:{
                    color: '#fff',
                    fontSize: 24,
                },
                axisLabel: {
                    formatter: '{value} %',
                    color: "#fff",
                    fontSize:22
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#fff",
                        width: 1,
                        type: "solid"
                    },
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: "#063374",
                    }
                }
            }],
            series: [{
                type: 'bar',
                data: [20, 50, 80, 58, 83, 68, 57, 80, 42],
                //barWidth: 50, //柱子宽度
                //barGap: 1, //柱子之间间距
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00adff'
                        }, {
                            offset: 1,
                            color: '#047eff'
                        }]),
                        opacity: 1,
                    }
                }
            }]
        });
    };
    getChart03() {
        var m2R2Data = [
            { value: 35, legendname: '空调用电', name: "空调用电  35", itemStyle: { color: "#45a4f4" } },
            { value: 25, legendname: '公共照明', name: "公共照明  25", itemStyle: { color: "#9358e8" } },
            { value: 20, legendname: '商业用电', name: "商业用电  20", itemStyle: { color: "#6570f0" } },
            { value: 18, legendname: '一般动力', name: "一般动力  18", itemStyle: { color: "#6ad5e9" } },
            { value: 5, legendname: '其他用电', name: "其他用电  5", itemStyle: { color: "#b2d2fb" } },
        ];
        var eneryChart03 = echarts.init(document.getElementById('eneryChart03'));
        eneryChart03.setOption({
            title: [
                {
                    text: '用电总量',
                    subtext: 62 + '万KW-h',
                    textStyle: {
                        fontSize: 26,
                        color: "#fff"
                    },
                    subtextStyle: {
                        fontSize: 26,
                        color: '#fff'
                    },
                    textAlign: "center",
                    x: '34.5%',
                    y: '44%',
                }],
            tooltip: {
                trigger: 'item',
                formatter: function (parms) {
                    var str = parms.seriesName + "</br>" +
                        parms.marker + "" + parms.data.legendname + "</br>" +
                        "数量：" + parms.data.value + "</br>" +
                        "占比：" + parms.percent + "%";
                    return str;
                }
            },
            legend: {
                type: "scroll",
                orient: 'vertical',
                left: '72%',
                align: 'left',
                top: 'middle',
                textStyle: {
                    color: '#fff',
                    fontSize: 22,
                },
                height: 250
            },
            series: [
                {
                    type: 'pie',
                    center: ['35%', '50%'],
                    radius: ['50%', '70%'],
                    clockwise: false, //饼图的扇区是否是顺时针排布
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'outter',
                            formatter: function (parms) {
                                return parms.data.legendname
                            },
                            textStyle: {
                                fontSize: 22,
                                color: '#fff'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 5,
                            length2: 3,
                            smooth: true,
                        }
                    },
                    data: m2R2Data
                }
            ]
        });
    };
  
    render() {
        return (
            <div className={style.emerInfo}>
                <div className={style.monEchartBt}></div>
                <div className={style.infoVideo}>
                    <div className={style.videoBt}>
                        <h3>负一楼恒敬对接</h3>
                    </div>
                    <EnergyFloorData></EnergyFloorData>
                    <div className={style.videoBt}>
                        <h3>六楼柏顿模拟设备</h3>
                    </div>
                    <EnergyTemperature></EnergyTemperature>
                    {/* <div className={style.videoBt}>
                        <h3>今日用电趋势</h3>
                    </div>
                    <div id="eneryChart01" className={style.emerChart}></div> */}
                    <div className={style.videoBt}>
                        <h3>区域用电</h3>
                    </div>
                    <div id="eneryChart02" className={style.emerChart}></div>
                    {/* <div className={style.videoBt}>
                        <h3>分项用电占比</h3>
                    </div>
                    <div id="eneryChart03" className={style.emerChart}></div> */}
                </div>
            </div>
        );
    }
}
export default EnergyAnaly;
