import React from 'react';
import style from '../ManIndex.less';
import MainAnaly from './MainAnaly';
import MainList from './MainList';
import MainData from './MainData';
class Maintenance extends React.Component {
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
    SPYW() {
        this.props.parent.setSecond('SPYW');
        // let point = new engine.Api.Type.Vector3(120.0105661744993, 30.281851003274383, 245.457275390625, "4326");
        // let target = new engine.Api.Type.Vector3(120.01237762029302, 30.283381962021291, -3.7999999523162842, "4326");
        // engine.Api.Camera.flyTo(point, target, 2, () => {

        // });
    }
    JFSBYW() {
        this.props.parent.setSecond('JFSBYW');
        // let point = new engine.Api.Type.Vector3(120.01391005637205, 30.283917894033454, 48.011360168457031, "4326");
        // let target = new engine.Api.Type.Vector3(120.01369882137647, 30.28406215358731, -3.7999992370605469, "4326");
        // engine.Api.Camera.flyTo(point, target, 2, () => {
        //     engine.Api.Layers.showLayer(["hcyjz", "GuangFuBan"], false);
        //     engine.Api.Layers.showLayer(["JiFang", "JiFangDianLiu", "floor1", "floor2"]);
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
                        <li onClick={this.SPYW.bind(this)} className={this.props.parent.state.secondTab == "SPYW" ? style.active : ""}>视频运维</li>
                        <li onClick={this.JFSBYW.bind(this)} className={this.props.parent.state.secondTab == "JFSBYW" ? style.active : ""}>机房设备运维</li>
                    </ul>
                </div>
                <div className={style.monitor}>
                    <div className={style.monitorCon}>
                        <div className={style.tabPoint} id="rcyyTab">
                            <div onClick={this.changeTab.bind(this, "01")} className={this.state.defultTab == "01" ? style.active : ""}></div>
                            <div onClick={this.changeTab.bind(this, "02")} className={this.state.defultTab == "02" ? style.active : ""}></div>
                        </div>
                        {this.state.defultTab == "01" ? <MainAnaly /> : <MainList />}
                    </div>
                </div>
                <MainData />
            </div>
        );
    }
}
export default Maintenance;
