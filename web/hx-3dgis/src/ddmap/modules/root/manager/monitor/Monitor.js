import React from 'react';
import style from '../ManIndex.less';
import MonitorList from './MonitorList';
import MonitorData from './MonitorData';
import MonitorInfo from './MonitorInfo';
class Monitor extends React.Component {
  state = {
    videoInfo: {
      videoSrc: './video/北侧通道2.mp4',
      videoName: '一号楼高空（北）'
    },
    defultTab: "01"
  }
  componentWillMount() {
  }
  componentDidMount() {
    this.currt = 0;
    this.openClick();
  };
  openClick() {
    if (this.currt > 1) {
      this.currt = 0;
    }
    document.querySelector('#afjkTab').children[this.currt].click();
    this.currt++;
    this.time = setTimeout(() => {
      this.openClick();
    }, 150000);
  }
  componentWillUnmount() {
    window.clearInterval(this.time);
  }
  getVideoSrc(src) {
    this.setState({
      videoSrc: src
    });
  }
  changeTab(e) {
    if (e == this.state.defultTab) {
      return;
    }
    this.setState({
      defultTab: e
    });
  }
  render() {
    return (
      <div>
        <div className={style.secondTab}>
          <ul>
            {/* <li>监控设备</li>
            <li>监控列表</li>
            <li>3D地图</li>
            <li>监控6宫格</li> */}
          </ul>
        </div>
        <div className={style.monitor}>
          <div className={style.monitorCon}>
            <div className={style.tabPoint} id="afjkTab">
              <div onClick={this.changeTab.bind(this, "01")} className={this.state.defultTab == "01" ? style.active : ""}></div>
              <div onClick={this.changeTab.bind(this, "02")} className={this.state.defultTab == "02" ? style.active : ""}></div>
            </div>
            {this.state.defultTab == "02" ? <MonitorInfo videoInfo={this.state.videoInfo} /> : <MonitorList parent={this} />}
          </div>
        </div>
        <MonitorData />
      </div>
    );
  }
}
export default Monitor;
