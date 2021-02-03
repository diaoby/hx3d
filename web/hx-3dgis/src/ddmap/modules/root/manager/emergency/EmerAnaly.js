import React from 'react';
import style from '../ManIndex.less';
import echarts from 'echarts';
class EmerAnaly extends React.Component {
    componentWillMount() {
    }
    componentDidMount() {
        this.getChart01();
        this.getChart02();
        this.getChart03();
    };
    getChart01() {
        var emerChart01 = echarts.init(document.getElementById('emerChart01'));
        var total = {
            name: '告警总数',
            value: '1894'
        }

        var originalData = [{
            value: 799,
            name: '紧急事件'
        }, {
            value: 170,
            name: '重要事件'
        }, {
            value: 925,
            name: "一般事件"
        }];
        emerChart01.setOption({
            title: [{
                text: total.name,
                left: '49%',
                top: '40%',
                textAlign: 'center',
                textBaseline: 'middle',
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: 30
                }
            }, {
                text: total.value,
                left: '49%',
                top: '60%',
                textAlign: 'center',
                textBaseline: 'middle',
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: 50
                }
            }],
            series: [{
                hoverAnimation: false, //设置饼图默认的展开样式
                radius: [120, 150],
                name: 'pie',
                type: 'pie',
                selectedMode: 'single',
                selectedOffset: 16, //选中是扇区偏移量
                clockwise: true,
                startAngle: 90,
                color: ['#45a4f4', '#9358e8', '#6570f0', '#6ad5e9'],
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 28,
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
        var emerChart02 = echarts.init(document.getElementById('emerChart02'));
        emerChart02.setOption({
            legend: {
                data: ['折线图', '柱状图'],
                x: '20px', // 对齐方式
                itemGap: 20, // item之间的距离
                textStyle:{//图例文字的样式
                    color:'#fff',
                    fontSize:26
                }
            },
            xAxis: {
                type: 'category',
                data: ['周界入侵', '危险区域', '火情告警', '手机报警', '一键报警', '胁迫报警'],
                axisLabel: {
                    color: '#fff',
                    fontSize: 20,
                    rotate:25
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
                    data: [5000, 6000, 1500, 80, 2000, 30],
                    type: 'bar',
                    name: '柱状图',
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
                    data: [5000, 6000, 1500, 80, 2000, 30],
                    type: 'line',
                    name: '折线图',
                    symbolSize: 8 // 控制线条上 点 的大小
                }
            ]
        });
    };
    getChart03() {
        var dataAxis = ['摄像头', '路灯', '井盖', '门禁', '车闸', '烟感', '充电桩', '液压', '液位', '消防栓',];
        var dataAP = [65, 104, 83, 83, 83, 78, 67, 83, 90, 76];
        var yMax = 120;
        var dataShadow = [];

        for (var i = 0; i < dataAP.length; i++) {
            dataShadow.push(yMax);
        }
        var emerChart03 = echarts.init(document.getElementById('emerChart03'));
        emerChart03.setOption({
            grid: {
                bottom: "30px",
                left: '30px',
                right: '5%',
                top: '5%',
            },
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    interval: 0,
                    formatter: function (value) {
                        //debugger
                        var ret = ""; //拼接加\n返回的类目项
                        var maxLength = 2; //每项显示文字个数
                        var valLength = value.length; //X轴类目项的文字个数
                        var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                        if (rowN > 1) //如果类目项的文字大于3,
                        {
                            for (var i = 0; i < rowN; i++) {
                                var temp = ""; //每次截取的字符串
                                var start = i * maxLength; //开始截取的位置
                                var end = start + maxLength; //结束截取的位置
                                //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                                temp = value.substring(start, end) + "\n";
                                ret += temp; //凭借最终的字符串
                            }
                            return ret;
                        } else {
                            return value;
                        }
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize:22,
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },

                /*z: 10*/
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize:22
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#013168'],
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            series: [{ // For shadow
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0.15)'
                    }
                },
                barGap: '-100%',
                barCategoryGap: '40%',
                data: dataShadow,
                animation: false
            },
            {
                type: 'bar',
                label: {
                    normal: {
                        show: true,//是否在柱状顶部显示数值
                        position: "top",
                        distance: 12,
                        formatter: function (params) {
                            return params.data.value;
                        },
                        textStyle: {
                            color: "#fff",
                            fontSize: 12
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00adff'
                        }, {
                            offset: 1,
                            color: '#047eff'
                        }]),
                    },
                },
                data: dataAP
            }
            ]
        });
        setInterval(function () { //数据动态展现
            for (var i = 0; i < dataAP.length; i++) {
                if (dataAP[i] % 2 == 0) {
                    dataAP[i] -= Math.round(Math.random() * 10);
                } else {
                    dataAP[i] += Math.round(Math.random() * 20);
                }

            }
            var Max = Math.max(...dataAP); // 取数组里最大值
            var _yMax = Math.ceil(Max / 50); // 若有余数则加1

            yMax = _yMax * 50; //生成阴影的值和y轴的最大值相同

            dataShadow = []; //清空之前的数据
            for (var i = 0; i < dataAP.length; i++) {
                dataShadow.push(yMax);
            }
            emerChart03.setOption({
                series: [{ // For shadow
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,0,0,0.15)'
                        }
                    },
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    data: dataShadow,
                    animation: false
                },
                {
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: "top",
                            distance: 12,
                            formatter: function (params) {
                                return params.data.value;
                            },
                            textStyle: {
                                color: "#fff",
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00adff'
                            }, {
                                offset: 1,
                                color: '#047eff'
                            }]),
                        },
                    },
                    data: dataAP
                }]
            });
        }, 1000);
    };
    render() {
        return (
            <div className={style.emerInfo}>
                <div className={style.monEchartBt}></div>
                <div className={style.infoVideo}>
                    <div className={style.videoBt}>
                        <h3>安全态势</h3>
                    </div>
                    <div id="emerChart01" className={style.emerChart}></div>
                    <div className={style.videoBt}>
                        <h3>事件分布</h3>
                    </div>
                    <div id="emerChart02" className={style.emerChart}></div>
                    <div className={style.videoBt}>
                        <h3>设备异常</h3>
                    </div>
                    <div id="emerChart03" className={style.emerChart}></div>
                </div>
            </div>
        );
    }
}
export default EmerAnaly;
