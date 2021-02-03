import React from 'react';
import style from '../ManIndex.less';
import EmerAnaly from './EmerAnaly';
import EmerList from './EmerList';
import Utils from '../../../../utils/Utils';
import EmerData from './EmerData';
class Emergency extends React.Component {
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
        document.querySelector('#yjzxTab').children[this.currt].click();
        this.currt++;
        this.time = setTimeout(() => {
            this.openClick();
        }, 15000);
    }
    componentWillUnmount() {
        window.clearInterval(this.time);
        window.clearInterval(this.time1);
        Utils.clearAllLayers();
    }
    YJZX() {
        if (this.props.parent.state.secondTab == "YJZX") return;
        Utils.clearAllLayers();
        // this.props.parent.clearTimeEvent();
        this.props.parent.goYJZXPOI();
    }
    XFGJ() {
        if (this.props.parent.state.secondTab == "XFGJ") return;
        this.props.parent.setSecond('XFGJ');
        var alarmInfo = [{
            id: 'ld_icon_3',
            isAlarm: true,
            color: 'c75d2f'
        }]; //设置告警对象信息    
        engine.Api.MeshInfo.setAlarm("DeviceICON", alarmInfo); 
        // engine.Api.MeshInfo.setAlarm("Camera", xjInfo);
        let point = new engine.Api.Type.Vector3(120.20606757352843,30.193323018922712,299.69985961914063, "4326");
        let target = new engine.Api.Type.Vector3(120.2052923664077,30.191094544216117,54.98736572265625, "4326");
        engine.Api.Camera.flyTo(point, target, 2, () => {
        
            this.props.parent.emergenTime2 = setTimeout(() => {
                //清除水波纹告警
                engine.Api.MeshInfo.clearAlarm("DeviceICON");
                let point = new engine.Api.Type.Vector3(120.205205806823,30.1917205840284,28.031196594238281, "4326");
                let target = new engine.Api.Type.Vector3(120.20545471795198,30.191687661333837,6.2410068511962891, "4326");
                engine.Api.Camera.flyTo(point, target, 2, () => {
                engine.Api.Layers.showLayer("SDGJ",true);
                let list = [{
                    id: 'zsp',
                    src: "./images/rygjInfo.png",
                    popSize: 338,
                    popTop: -280,
                    popLeft: -200,
                    point :new engine.Api.Type.Vector3(120.205205806823,30.1917205840284,28.031196594238281, "4326"),
                    target : new engine.Api.Type.Vector3(120.20545471795198,30.191687661333837,6.2410068511962891, "4326"),
                    clickInfo: () => {
                        let point = new engine.Api.Type.Vector3(120.20606757352843,30.193323018922712,299.69985961914063, "4326");
                        let target = new engine.Api.Type.Vector3(120.2052923664077,30.191094544216117,54.98736572265625, "4326");
                        engine.Api.Camera.flyTo(point, target, 2, () => {});
                    }
                  }];
                  Utils.setFlyPop('DeviceICON', list);
                });
            }, 500);

        });

        //     this.props.parent.emergenTime2 = setTimeout(() => {
        //         engine.Api.Camera.lookAt('shiyu', '8', false, new engine.Api.Type.Vector3(8, 8, 8), () => {
        //             engine.Api.MeshInfo.setVisible('Camera', '8_1');
        //             engine.Api.Layers.showLayer(["SDXR"], true);
        //             let sxtList = [{
        //                 id: '8',
        //                 name: './images/rygjInfo.png',
        //                 nameSize: 400,
        //                 nameTop: -250,
        //                 nameLeft: -10,
        //             }];
        //             engine.Api.Pop.initCZDPop('Camera', sxtList, []);
        //             engine.Api.Models.doAction('Camera', '8', { actionName: 'LudENG', end: 50 }, () => {});
        //         }, 4);
        //     }, 5000);
        //     this.props.parent.emergenTime3 = setTimeout(() => {
        //         engine.Api.Pop.clearAllPop(["Camera"]);
        //         let point = new engine.Api.Type.Vector3(120.01337621165203, 30.283129634811445, 40.958675384521484, "4326");
        //         let target = new engine.Api.Type.Vector3(120.01381165743027, 30.2838767701613, 27.572063446044922, "4326");
        //         engine.Api.Camera.flyTo(point, target, 2, () => {
        //             engine.Api.Models.doAction('hcyjz', '', { actionName: 'dljb', end: 100 });
        //         });
        //     }, 17000);
        //     this.props.parent.emergenTime4 = setTimeout(() => {
        //         let point1 = new engine.Api.Type.Vector3(120.01444680139925, 30.283969373135648, 92.876792907714844, "4326");
        //         let target1 = new engine.Api.Type.Vector3(120.01398520104321, 30.284427877699734, -3.8000001907348633, "4326");
        //         engine.Api.Camera.flyTo(point1, target1, 2, () => {
        //             engine.Api.Layers.showLayer(["hcyjz", "GuangFuBan"], false);
        //             engine.Api.Layers.showLayer(["floor1", "floor2", "RuoDian"]);
        //         });
        //     }, 22000);
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
    render() {
        return (
            <div>
                <div className={style.secondTab}>
                    <ul>
                        <li onClick={this.YJZX.bind(this)} className={this.props.parent.state.secondTab == "YJZX" ? style.active : ""}>应急中心</li>
                        <li onClick={this.XFGJ.bind(this)} className={this.props.parent.state.secondTab == "XFGJ" ? style.active : ""}>安全告警</li>
                    </ul>
                </div>
                <div className={style.monitor}>
                    <div className={style.monitorCon}>
                        <div className={style.tabPoint} id="yjzxTab">
                            <div onClick={this.changeTab.bind(this, "01")} className={this.state.defultTab == "01" ? style.active : ""}></div>
                            <div onClick={this.changeTab.bind(this, "02")} className={this.state.defultTab == "02" ? style.active : ""}></div>
                        </div>
                        {this.state.defultTab == "01" ? <EmerAnaly /> : <EmerList />}
                    </div>
                </div>
                <EmerData />
            </div>
        );
    }
}
export default Emergency;
