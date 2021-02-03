import React from 'react';
import style from '../ManIndex.less';
import { Tabs, Table } from 'antd';
import Video from '../video/Video'
import CameraAddressConstant  from '../video/CameraAddressConstant.js'


const { TabPane } = Tabs;
class OperAnaly extends React.Component {

    state = {
        defaultExpandedRowKeys: [],
        playerInit: ""
    }
    componentWillMount() {
        this.dbClickOwn = undefined;
    }

    componentDidMount() {
        
    };
    showInfo(cabinet, record, rowkey) {
        let me = this;
        if (me.dbClickOwn !== record.key) {
            me.dbClickOwn = record.key;
            me.setState({ defaultExpandedRowKeys: [record.key], rowkey: rowkey });
        } else {
            me.dbClickOwn = undefined;
            me.setState({ defaultExpandedRowKeys: [], rowkey: '' });
        }
    };

    videoClick(num, e) {
        this.props.parent.props.parent.setState({ showBigVideo: false });
        let src = e.target.src;
        let me = this;
        var sxtInfo = [{
            id: num,
            isAlarm: true,
            color: 'c75d2f'
        }];
        engine.Api.MeshInfo.setAlarm("Camera", sxtInfo);
        engine.Api.Camera.lookAt('Camera', num, false, new engine.Api.Type.Vector3(8, 8, 8), () => {
            me.props.parent.props.parent.setState({
                showBigVideo: true,
                bigVideoSrc: src
            });
        });
    }

  componentWillUnmount() {
    
  }

//     // 调整实时视频样式
//   delClass = setTimeout(()=>{
//     var dom = document.getElementById("videojs-flvjs-player");
//     dom.setAttribute("class","");
//     dom.removeChild(dom.lastChild);
//     dom.removeChild(dom.lastChild);
//     dom.removeChild(dom.lastChild);
//     dom.removeChild(dom.lastChild);
//     dom.removeChild(dom.lastChild);
//     dom.removeChild(dom.lastChild);
//     dom.removeChild(dom.lastChild);
//     // dom.parentNode.style.visibility = 'visible';
//   },5000);

    render() {
        const columns = [
            { title: '编号', dataIndex: 'number', key: 'number', render: text => <span className={style.numFont}>{text}</span> },
            { title: '岗位', dataIndex: 'job', key: 'job' },
            { title: '姓名', dataIndex: 'name', key: 'name' },
            { title: '备注', dataIndex: 'description', key: 'x' },
        ];

        const data = [
            {
                key: 1,
                number: '001',
                job: '安保',
                name: '李泽江',
                description: '在岗',
            }, {
                key: 2,
                number: '002',
                job: '安保',
                name: '郑跃鹏',
                description: '在岗',
            }, {
                key: 3,
                number: '003',
                job: '安保',
                name: '黄石',
                description: '在岗',
            }, {
                key: 4,
                number: '004',
                job: '安保',
                name: '蒋月萌',
                description: '在岗',
            }, {
                key: 5,
                number: '005',
                job: '安保',
                name: '方思柳',
                description: '在岗',
            }, {
                key: 6,
                number: '006',
                job: '安保',
                name: '刘月喜',
                description: '在岗',
            }
        ];
        return (
            <div className={style.operInfo}>
                <div className={style.monEchartBt}></div>
                <div className={style.infoVideo}>
                    {/* <div className={style.videoBt}>
                        <h3>监控录像</h3>
                    </div> */}
                    <ul className={style.videoList}>
                     {
                         CameraAddressConstant.CAMERA_ADDRESS.map((item,index) =>{
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
                      
                        {/*
                        <li onClick={this.videoClick.bind(this, "6")}>
                            <video autoPlay loop muted data-keepplaying data-autoplay src="./video/北侧通道2.mp4">
                                您的浏览器不支持 video 标签。
                            </video>
                            <div className={style.videoName}>北侧通道2</div>
                        </li>
                        <li onClick={this.videoClick.bind(this, "20")}>
                            <video autoPlay loop muted data-keepplaying data-autoplay src="./video/东侧通道1.mp4">
                                您的浏览器不支持 video 标签。
                            </video>
                            <div className={style.videoName}>东侧通道1</div>
                        </li>
                        */}
                        {/*<li onClick={this.videoClick.bind(this, "23")}>*/}
                        {/*    <video autoPlay loop muted data-keepplaying data-autoplay src="./video/video06.mp4">*/}
                        {/*        您的浏览器不支持 video 标签。*/}
                        {/*    </video>*/}
                        {/*    <div className={style.videoName}>4号楼高空(南)</div>*/}
                        {/*</li>*/}
                      {/*<li>
                        <video id="videojs-flvjs-player" muted autoPlay>您的浏览器不支持 video 标签。</video>
                        <div className={style.videoName}>5G实验室测试</div>
                      </li>
                      */}
                      {/*
                        <li onClick={this.videoClick.bind(this, "23")}>
                            <video autoPlay loop muted data-keepplaying data-autoplay src="./video/西门2.mp4">
                                您的浏览器不支持 video 标签。
                            </video>
                            <div className={style.videoName}>西门2</div>
                        </li>
                      */}
                        {/*<li onClick={this.videoClick.bind(this, "26")}>*/}
                        {/*    <video autoPlay loop muted data-keepplaying data-autoplay src="./video/东侧通道2.mp4">*/}
                        {/*        您的浏览器不支持 video 标签。*/}
                        {/*    </video>*/}
                        {/*    <div className={style.videoName}>东侧通道2</div>*/}
                        {/*</li>*/}
                        {/*<li onClick={this.videoClick.bind(this)}>
                            <video autoPlay loop muted data-keepplaying data-autoplay src="./video/第3出入口处1.mp4">
                                您的浏览器不支持 video 标签。
                            </video>
                            <div className={style.videoName}>第3出入口处1</div>
                        </li>
                        <li onClick={this.videoClick.bind(this)}>
                            <video autoPlay loop muted data-keepplaying data-autoplay src="./video/南侧通道1.mp4">
                                您的浏览器不支持 video 标签。
                            </video>
                            <div className={style.videoName}>南侧通道1</div>
                        </li>
                        */}
                    </ul>
                </div>
                <div className={style.operaPeo}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="值班人员" key="1">
                            <Table
                                columns={columns}
                                dataSource={data}
                                rowKey={record => record.key}
                                pagination={false}
                                expandRowByClick={false}
                                expandedRowKeys={this.state.defaultExpandedRowKeys}
                                onRow={(record, rowkey) => {
                                    return {
                                        onClick: () => this.showInfo(this, record, rowkey),       // 点击行
                                    };
                                }}
                            />
                        </TabPane>
                        <TabPane tab="事件概览" key="2">
                            事件概览
                        </TabPane>
                        <TabPane tab="数据概览" key="3">
                            数据概览
                        </TabPane>
                        <TabPane tab="应急事件" key="4">
                            应急事件
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}
export default OperAnaly;
