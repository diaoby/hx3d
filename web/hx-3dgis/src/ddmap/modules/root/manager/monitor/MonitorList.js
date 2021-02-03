import React from 'react';
import style from '../ManIndex.less';
import Utils from '../../../../utils/Utils';
import Video from '../video/Video'
import CameraAddressConstant  from '../video/CameraAddressConstant.js'
import WebRtcVideo from '../video/WebRTCVideo'

import HkVideo from '../video/HkVideo'
class MonitorList extends React.Component {
  componentWillMount() {

  }
  componentDidMount() {
    this.getTimeData();
  };

  getTimeData() {
    var date, year, month, day, hours = 0, minutes = 0, seconds = 0;
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    let list = document.querySelectorAll('.monListTime___23CBg');
    if (list) {
      for (let i = 0; i < list.length; i++) {
        list[i].innerHTML = year + '年' + Utils.Appendzero(month) + '月' + Utils.Appendzero(day) + '日' + '<br/>' + Utils.Appendzero(hours) + ':' + Utils.Appendzero(minutes) + ':' + Utils.Appendzero(seconds);
      }
    }
  }

  changeSrc(name, id, e) {
    // Utils.clearAllLayers();
    engine.Api.MeshInfo.setVisible("DeviceICON", ["dw_model_1","dw_model_2","dw_model_3","dw_model_4","dw_model_5"],false);
    let me = this;
    me.props.parent.props.parent.clearTimeEvent();
    me.props.parent.props.parent.setState({ showBigVideo: false });
    let src = e.target.src;
    this.props.parent.setState({
      videoInfo: {
        videoSrc: src,
        videoName: name
      }
    });
    this.setCameraAlarm(id);
    engine.Api.Camera.lookAt('DeviceMODEL', id, false, new engine.Api.Type.Vector3(-4, 4, -4), () => {
      me.props.parent.props.parent.setState({
        showBigVideo: true,
        bigVideoSrc: src,
        goAFJK: true
      });
    });
  }

  monListClick(num, src) {
    // Utils.clearAllLayers();
    engine.Api.MeshInfo.setVisible("DeviceICON", ["dw_model_1","dw_model_2","dw_model_3","dw_model_4","dw_model_5"],false)
    let me = this;
    me.props.parent.props.parent.clearTimeEvent();
    me.props.parent.props.parent.setState({ showBigVideo: false });
    this.setCameraAlarm(num);
    engine.Api.Camera.lookAt('DeviceMODEL', num, false, new engine.Api.Type.Vector3(-4, 4, -4), () => {
      me.props.parent.props.parent.setState({
        showBigVideo: true,
        bigVideoSrc: src,
        goAFJK: true
      });
    });
  }




  setCameraAlarm(id) {
    var sxtInfo = [{
      id: id,
      isAlarm: true,
      color: 'c75d2f'
    }];
    engine.Api.MeshInfo.setAlarm("DeviceMODEL", sxtInfo);
  }

  render() {
    return (
      <div className={style.monPart}>
        {/* <ul className={style.monIco}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
        <div className={style.monListBg}>
          <div className={style.monListBorder}>
            <span className={style.monBox}></span>
            <div className={style.monEchartBt}></div>
            <div className={style.monitorBt}>
              <h3>监控列表</h3>
            </div>
            <ul className={style.monList}>
              <li className={style.bgRed} onClick={this.monListClick.bind(this, "sxt_model_1", "./video/北侧通道2.mp4")}>
                <div className={style.monListIco}></div>
                <div className={style.monListName}>北侧通道2</div>
                <div className={style.monListTime}>2020年6月19日<br />16:15:30</div>
              </li>
              <li>
                <div className={style.monListIco}></div>
                <div className={style.monListName}>垃圾房停车位1</div>
                <div className={style.monListTime}>2020年6月19日<br />16:15:30</div>
              </li>
              <li>
                <div className={style.monListIco}></div>
                <div className={style.monListName}>南侧通道1</div>
                <div className={style.monListTime}>2020年6月19日<br />16:15:30</div>
              </li>
              <li>
                <div className={style.monListIco}></div>
                <div className={style.monListName}>第3出入口处1</div>
                <div className={style.monListTime}>2020年6月19日<br />16:15:30</div>
              </li>
              <li>
                <div className={style.monListIco}></div>
                <div className={style.monListName}>北门客车停车位1</div>
                <div className={style.monListTime}>2020年6月19日<br />16:15:30</div>
              </li>
              <li className={style.bgRed} onClick={this.monListClick.bind(this, "sxt_model_2", "./video/东侧通道1.mp4")}>
                <div className={style.monListIco}></div>
                <div className={style.monListName}>东侧通道1</div>
                <div className={style.monListTime}>2020年6月19日<br />16:15:30</div>
              </li>
              <li>
                <div className={style.monListIco}></div>
                <div className={style.monListName}>北侧通道1</div>
                <div className={style.monListTime}>2020年6月19日<br />16:15:30</div>
              </li>
              <li>
                <div className={style.monListIco}></div>
                <div className={style.monListName}>西门1</div>
                <div className={style.monListTime}>2020年6月19日<br />16:15:30</div>
              </li>
            </ul>
          </div>
        </div>
        {/* {
            CameraAddressConstant.CAMERA_ADDRESS_LIST.map((item,index) =>{
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
        }  */}
         {/* < WebRtcVideo gateway="http://localhost:8083" streamId="demo1"></WebRtcVideo> */}
         <HkVideo></HkVideo>
       {/* <ul className={style.videoUl}>
          <li>
            <video autoPlay loop muted data-keepplaying data-autoplay onClick={this.changeSrc.bind(this, "北侧通道2", "sxt_model_1")} src="./video/北侧通道2.mp4">
              您的浏览器不支持 video 标签。
          </video>
          </li>
          <li>
            <video autoPlay loop muted data-keepplaying data-autoplay onClick={this.changeSrc.bind(this, "西门2", "sxt_model_4")} src="./video/西门2.mp4">
              您的浏览器不支持 video 标签。
          </video>
          </li>
          <li>
            <video autoPlay loop muted data-keepplaying data-autoplay onClick={this.changeSrc.bind(this, "东侧通道1", "sxt_model_2")} src="./video/东侧通道1.mp4">
              您的浏览器不支持 video 标签。
          </video>
          </li>
          <li>
            <video autoPlay loop muted data-keepplaying data-autoplay onClick={this.changeSrc.bind(this, "第3出入口处1", "sxt_model_5")} src="./video/第3出入口处1.mp4">
              您的浏览器不支持 video 标签。
          </video>
          </li>
        </ul> */}
      </div>
    );
  }
}
export default MonitorList;
