import React from 'react';
import MainAnaly from '../maintenance/MainAnaly';
import MainData from '../maintenance/MainData';
import MainList from '../maintenance/MainList';
import style from '../ManIndex.less';
import OperAnaly from './OperAnaly';
import OperData from './OperData';
import OperList from './OperList';
class Operation extends React.Component {
    state = {
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
        document.querySelector('#rcyyTab').children[this.currt].click();
        this.currt++;
        this.time = setTimeout(() => {
            this.openClick();
        }, 15000);
    }
    componentWillUnmount() {
        window.clearInterval(this.time);
    }
    RYGL() {
        if (this.props.parent.state.secondTab == "RYGL") return;
        this.props.parent.setSecond('RYGL');
        //设置导航
        let point = new engine.Api.Type.Vector3(120.20408190170865,30.191546531652907,277.6024169921875, "4326");
        let target = new engine.Api.Type.Vector3(120.20616463944468,30.190361083232911,-177.28524780273438, "4326");
        engine.Api.Camera.flyTo(point, target, 2, () => {
            //显示保安亭标志
        engine.Api.MeshInfo.setVisible('DeviceBA', ['baoan_icon1', 'baoan_icon2'], true);

          let points = [{
                        x: 120.20537913567834,
                        y: 30.191650862088981,
                        z: 0,
                        pid: "0000" //室外导航默认pid为 0000
                    }, {
                        x: 120.20481339223984,
                        y: 30.189894565292903,
                        z: 0,
                        pid: "0000"
                    }, {
                        x: 120.20572834258618,
                        y: 30.189910718389626,
                        z: 0,
                        pid: "0000"
                    },{
                        x: 120.20539631244911,
                        y: 30.191654640113811,
                        z: 0,
                        pid: "0000"
                    }];
                     engine.Api.Navigate.setMultiPoints(points, () => {
                          engine.Api.Navigate.setResume();
               });
        });
    }
    TCCGL() {
        if (this.props.parent.state.secondTab == "TCCGL") return;
        this.setState({ showJFYW: false });
        this.props.parent.setSecond('');
        let point = new engine.Api.Type.Vector3(120.20514875141114,30.192823328911309,153.162353515625, "4326");
        let target = new engine.Api.Type.Vector3(120.20509677965836,30.191634944574922,59.650497436523438, "4326");
        engine.Api.Camera.flyTo(point, target, 2, () => {
            this.props.parent.setSecond('TCCGL');
            engine.Api.MeshInfo.setVisible('DeviceTCC', ['tingchewei_icon1','tingchewei_icon2'], true);
        });
    }
    MJGL() {
        if (this.props.parent.state.secondTab == "MJGL") return;
        this.setState({ showJFYW: false });
        this.props.parent.setSecond('MJGL');

        let point = new engine.Api.Type.Vector3(120.20470206367858,30.192647288016236,144.9058837890625, "4326");
        let target = new engine.Api.Type.Vector3(120.20508241899827,30.191571263474462,44.814804077148438, "4326");
        engine.Api.Camera.flyTo(point, target, 2, () => {
            engine.Api.MeshInfo.setVisible('DeviceMJ', ['menjin1','menjin2','menjin3','menjin4','menjin_icon1','menjin_icon2','menjin_icon4'], true);
        });
    }
    JFSBYW() {
        if (this.props.parent.state.secondTab == "JFSBYW") return;
        this.setState({ showJFYW: true });
        this.props.parent.setSecond('JFSBYW');
        // let point = new engine.Api.Type.Vector3(120.01397880882597, 30.284115130879151, 22.870031356811523, "4326");
        // let target = new engine.Api.Type.Vector3(120.01375303583333, 30.284045682220139, -3.7999992370605469, "4326");
        // setTimeout(() => {
        //     engine.Api.Layers.showLayer(["hcyjz", "GuangFuBan"], false);
        // }, 2200);
        // engine.Api.Camera.flyTo(point, target, 3, () => {
        //     engine.Api.Layers.showLayer(["JiFang"]);
        //     engine.Api.MeshInfo.setVisible('hcyjz1', 'yt', false);
        //     engine.Api.MeshInfo.setVisible('hcyjzn', 'st', false);
        // });
    }
    changeTab(e) {
        if (e == this.state.defultTab) {
            return;
        }
        this.setState({
            defultTab: e
        });
    }
    imgClick(e) {
        e.target.parentNode.removeChild(e.target);
        this.props.parent.goRCYYPOI();
    }
    render() {
        return (
            <div>
                <div className={style.secondTab}>
                    <ul>
                        <li onClick={this.RYGL.bind(this)} className={this.props.parent.state.secondTab == "RYGL" ? style.active : ""}>人员管理</li>
                        <li onClick={this.TCCGL.bind(this)} className={this.props.parent.state.secondTab == "TCCGL" ? style.active : ""}>停车场管理</li>
                        <li onClick={this.MJGL.bind(this)} className={this.props.parent.state.secondTab == "MJGL" ? style.active : ""}>门禁管理</li>
                        {/* <li onClick={this.JFSBYW.bind(this)} className={this.props.parent.state.secondTab == "JFSBYW" ? style.active : ""}>机房设备运维</li> */}
                    </ul>
                </div>
                <div className={style.monitor}>
                    <div className={style.monitorCon}>
                        <div className={style.tabPoint} id="rcyyTab">
                            <div onClick={this.changeTab.bind(this, "01")} className={this.state.defultTab == "01" ? style.active : ""}></div>
                            <div onClick={this.changeTab.bind(this, "01")} className={this.state.defultTab == "02" ? style.active : ""}></div>
                        </div>
                        {this.state.showJFYW ? this.state.defultTab == "01" ? <MainAnaly parent={this} /> : <MainList /> : this.state.defultTab == "01" ? <OperAnaly parent={this} /> : <OperList />}

                    </div>
                </div>
                {this.props.parent.state.tab == "日常运营" ? <OperData /> : null}
                {this.state.showJFYW ? <MainData /> : null}
                {/* {this.props.parent.state.secondTab == "RYGL" ? <div className={style.ryglImg}>
                    <img src='./images/P3.png' onClick={this.imgClick.bind(this)}/>
                </div> : null} */}
                {/* {this.props.parent.state.secondTab == "TCCGL" ? <div className={style.ryglImg}>
                    <img src='./images/3.png' onClick={this.imgClick.bind(this)} />
                </div> : null} */}
            </div>
        );
    }
}
export default Operation;
3
