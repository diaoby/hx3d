import React from 'react';
import style from '../ManIndex.less';
import EnergyAnaly from './EnergyAnaly';
import EnergyList from './EnergyList';
import EnergyData from './EnergyData';
import Utils from '../../../../utils/Utils';
class Energy extends React.Component {
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
        document.querySelector('#nynxTab').children[this.currt].click();
        this.currt++;
        this.time = setTimeout(() => {
            this.openClick();
        }, 15000);
    }
    componentWillUnmount() {
        window.clearInterval(this.time);
    }
    ZNPD() {
        if (this.props.parent.state.secondTab == "ZNPD") return;
        this.props.parent.setSecond('');
        this.props.parent.goNYNHPOI();
    }
    NHGL() {
        if (this.props.parent.state.secondTab == "NHGL") return;
        this.props.parent.setSecond('');
        this.props.parent.showEnergyImg('');
        // let point = new engine.Api.Type.Vector3(120.01159440350504, 30.281891498108521, 211.03744506835938, "4326");
        // let target = new engine.Api.Type.Vector3(120.01256507425015, 30.283425222469425, 0.00882720947265625, "4326");
        // engine.Api.Camera.flyTo(point, target, 2, () => {
        //     this.props.parent.setSecond('NHGL');
        //     this.props.parent.showEnergyImg('NHGL');
        //     engine.Api.Layers.showLayer(["DianWang"]);
        //     engine.Api.MeshInfo.setVisible("DianWang", "GuangFu_Out");
        //     engine.Api.MeshInfo.setVisible("MianBanWenZi", ["wsg (1)", "wsg (4)", "wsg (6)", "wsg (7)", "wsg (9)"]);
        //     engine.Api.MeshInfo.setVisible("ChuNengZhan", ["5", "6", "19"]);
        // });
    }
    GFJC() {
        if (this.props.parent.state.secondTab == "GFJC") return;
        this.props.parent.setSecond('');
        this.props.parent.showEnergyImg('');
        // let point = new engine.Api.Type.Vector3(120.01355046817662, 30.287041763208119, 256.03036499023438, "4326");
        // let target = new engine.Api.Type.Vector3(120.01295338770659, 30.28461015303731, -3.7999989986419678, "4326");
        // engine.Api.Camera.flyTo(point, target, 2, () => {
        //     this.props.parent.setSecond('GFJC');
        //     this.props.parent.showEnergyImg('GFJC');
        //     engine.Api.Layers.showLayer(["DianWang"]);
        //     engine.Api.MeshInfo.setVisible("DianWang", "GuangFu_In");
        //     engine.Api.MeshInfo.setVisible("MianBanWenZi", ["wsg (3)", "wsg (5)", "wsg (8)"]);
        //     engine.Api.MeshInfo.setVisible("ChuNengZhan", ["5", "6", "19"]);
        //     engine.Api.Models.doAction('GuangFuBan', '1', { actionName: 'guangfu', end: 100 });
        // });
    }
    CDZGL() {
        if (this.props.parent.state.secondTab == "CDZGL") return;
        this.props.parent.setSecond('');
        this.props.parent.showEnergyImg('');
        // let point = new engine.Api.Type.Vector3(120.01221007481521, 30.283156590516093, 24.683107376098633, "4326");
        // let target = new engine.Api.Type.Vector3(120.01179146922736, 30.283567302882272, -43.200000762939453, "4326");
        // engine.Api.Camera.flyTo(point, target, 2, () => {
        //     this.props.parent.setSecond('CDZGL');
        //     engine.Api.MeshInfo.setVisible('ChongDianZhuang', ['Icon_Power', 'Icon_Power2', 'Icon_Power3']);
        // });
    }
    DTGL() {
        if (this.props.parent.state.secondTab == "DTGL") return;
        this.props.parent.setSecond('');
        this.props.parent.showEnergyImg('');
        // let point = new engine.Api.Type.Vector3(120.01377004756938, 30.283510227615412, 50.973117828369141, "4326");
        // let target = new engine.Api.Type.Vector3(120.01383646417875, 30.284386155862816, -3.7999992370605469, "4326");
        // engine.Api.Camera.flyTo(point, target, 2, () => {
        //     this.props.parent.setSecond('DTGL');
        //     engine.Api.MeshInfo.setVisible('hcyjz1', 'yt', true);
        //     engine.Api.MeshInfo.setVisible('hcyjz', 'st', false);
        //     engine.Api.MeshInfo.setVisible('hcyjzn', 'st', false);
        //     engine.Api.Layers.showLayer("GuangFuBan", false);
        //     engine.Api.Layers.showLayer("DianTi");
        // });
    }
    DWGL() {
        if (this.props.parent.state.secondTab == "DWGL") return;
        this.props.parent.setSecond('DWGL');
        this.props.parent.showEnergyImg('');
        // let point = new engine.Api.Type.Vector3(120.01362265757473, 30.281420951096067, 213.023254394531253, "4326");
        // let target = new engine.Api.Type.Vector3(120.01278040406716, 30.283604384216325, -3.800000190734863, "4326");
        // engine.Api.Camera.flyTo(point, target, 2, () => {
        //     engine.Api.Layers.showLayer(["DianWang", "PeiDianFang", "ChuNengZhan"]);
        //     this.props.parent.energyTime1 = setTimeout(() => {
        //         engine.Api.MeshInfo.setVisible("DianWang", ["GuoWang_In"]);
        //         engine.Api.MeshInfo.setVisible("PeiDianFang", ["9", "10", "20", "21"]);
        //         engine.Api.MeshInfo.setVisible("MianBanWenZi", ["wsg (2)", "wsg (4)", "wsg (6)", "wsg (7)", "wsg (9)"]);
        //     }, 1000);
        //     this.props.parent.energyTime2 = setTimeout(() => {
        //         engine.Api.MeshInfo.setVisible("DianWang", ["GuangFu_Out"]);
        //         engine.Api.MeshInfo.setVisible("ChuNengZhan", ["5", "6", "19"]);
        //         engine.Api.MeshInfo.setVisible("MianBanWenZi", ["wsg (1)"]);
        //         engine.Api.Models.doAction('GuangFuBan', '1', { actionName: 'guangfu', end: 100 });
        //     }, 3000);
        //     this.props.parent.energyTime3 = setTimeout(() => {
        //         engine.Api.MeshInfo.setVisible("DianWang", ["GuangFu_In"]);
        //         engine.Api.MeshInfo.setVisible("MianBanWenZi", ["wsg (3)", "wsg (5)", "wsg (8)"]);
        //     }, 5000);
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
    closeBtnClick(e) {
        this.props.parent.showEnergyImg('');
        engine.Api.Camera.info((a, b) => {
            let p = JSON.parse(b);
            p.position.z = p.position.z - 20;
            engine.Api.Camera.flyTo(p.position, p.target, 1, () => { });
        })
    }
    render() {
        return (
            <div>
                <div className={style.enerySecondTab}>
                    <ul>
                        {/* <li onClick={this.ZNPD.bind(this)} className={this.props.parent.state.secondTab == "ZNPD" ? style.active : ""}>智能配电</li>
                        <li onClick={this.NHGL.bind(this)} className={this.props.parent.state.secondTab == "NHGL" ? style.active : ""}>能耗管理</li>
                        <li onClick={this.GFJC.bind(this)} className={this.props.parent.state.secondTab == "GFJC" ? style.active : ""}>光伏监测</li>
                        <li onClick={this.CDZGL.bind(this)} className={this.props.parent.state.secondTab == "CDZGL" ? style.active : ""}>充电桩管理</li>
                        <li onClick={this.DTGL.bind(this)} className={this.props.parent.state.secondTab == "DTGL" ? style.active : ""}>电梯管理</li>
                        <li onClick={this.DWGL.bind(this)} className={this.props.parent.state.secondTab == "DWGL" ? style.active : ""}>电网管理</li> */}
                    </ul>
                </div>
                <div className={style.monitor}>
                    <div className={style.monitorCon}>
                        <div className={style.tabPoint} id="nynxTab">
                            <div onClick={this.changeTab.bind(this, "01")} className={this.state.defultTab == "01" ? style.active : ""}></div>
                            <div onClick={this.changeTab.bind(this, "02")} className={this.state.defultTab == "02" ? style.active : ""}></div>
                        </div>
                        {this.state.defultTab == "01" ? <EnergyAnaly /> : <EnergyList />}
                    </div>
                </div>
                <EnergyData />
                {this.props.parent.state.energyImg == "ZNPD" ? <div className={style.znpdImg}>
                    <span onClick={this.closeBtnClick.bind(this)} className={style.closeBtn}></span>
                    <img src='./images/ZNPD.png' />
                </div> : null}
                {this.props.parent.state.energyImg == "NHGL" ? <div className={style.nhglImg}>
                    <span onClick={this.closeBtnClick.bind(this)} className={style.closeBtn}></span>
                    <img src='./images/NHGL.png' />
                </div> : null}
                {this.props.parent.state.energyImg == "GFJC" ? <div className={style.gfjcImg}>
                    <span onClick={this.closeBtnClick.bind(this)} className={style.closeBtn}></span>
                    <img src='./images/GFJC.png' />
                </div> : null}
                {/* {this.props.parent.state.secondTab == "CDZGL" ? <div className={style.cdzglImg}>
                    <span onClick={this.closeBtnClick.bind(this)} className={style.closeBtn}>×</span>
                    <img src='./images/CDZGL.png' />
                </div> : null} */}
                {/* {this.props.parent.state.secondTab == "DTGL" ? <div className={style.dtglImg}>
                    <span onClick={this.closeBtnClick.bind(this)} className={style.closeBtn}>×</span>
                    <img src='./images/DTGL.png' />
                </div> : null} */}
            </div>
        );
    }
}
export default Energy;
