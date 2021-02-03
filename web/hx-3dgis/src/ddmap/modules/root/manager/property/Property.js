import React from 'react';
import style from '../ManIndex.less';
import ProAnaly from './ProAnaly';
import ProData from './ProData';
import Utils from '../../../../utils/Utils';
class Property extends React.Component {
    componentWillMount() {

    }
    componentDidMount() {

    };
    GGSS() {
        if (this.props.parent.state.secondTab == "GGSS") return;
        this.props.parent.goGGZCPOI();
    }
    DXGW() {
        if (this.props.parent.state.secondTab == "DXGW") return;
        this.props.parent.setSecond('DXGW');
        // let point = new engine.Api.Type.Vector3(120.01394077462616, 30.281622532060133, 228.83709716796875, "4326");
        // let target = new engine.Api.Type.Vector3(120.01270398469462, 30.283449554302923, 0.0088267326354980469, "4326");
        // engine.Api.Camera.flyTo(point, target, 2, () => {
        //     engine.Api.Layers.showLayer(["zgw", "wsg"]);
        //     engine.Api.Models.doAction('GD', 'wsg', { actionName: 'wsg', end: 0.6 }, () => {
        //         engine.Api.MeshInfo.setVisible("MianBanWenZi", "wsg");
        //         engine.Api.Models.doAction('GD', 'zgw', { actionName: 'ZGW', end: 0.6 }, () => {
        //             engine.Api.MeshInfo.setVisible("MianBanWenZi", "ysg");
        //             engine.Api.Models.doAction('GD', 'gsg', { actionName: 'gsg', end: 0.6 }, () => {
        //                 engine.Api.MeshInfo.setVisible("MianBanWenZi", "gsg");
        //             });
        //         });
        //     });
        // });
    }
    LDXLGL() {
        if (this.props.parent.state.secondTab == "LDXLGL") return;
        this.props.parent.setSecond('LDXLGL');
        // let point = new engine.Api.Type.Vector3(120.0146761670499, 30.284061262327366, 87.1608657836914, "4326");
        // let target = new engine.Api.Type.Vector3(120.01397553513456, 30.284404176911977, -3.800000190734863, "4326");
        // engine.Api.Camera.flyTo(point, target, 2, () => {
        //     engine.Api.Layers.showLayer(["hcyjz", "GuangFuBan"], false);
        //     engine.Api.Layers.showLayer(["floor1", "floor2", "RuoDian"]);
        // });
    }
    render() {
        return (
            <div>
                <div className={style.secondTab}>
                    <ul>
                        <li onClick={this.GGSS.bind(this)} className={this.props.parent.state.secondTab == "GGSS" ? style.active : ""}>公共设施</li>
                        {/* <li onClick={this.DXGW.bind(this)} className={this.props.parent.state.secondTab == "DXGW" ? style.active : ""}>智能管网</li> */}
                        {/* <li onClick={this.LDXLGL.bind(this)} className={this.props.parent.state.secondTab == "LDXLGL" ? style.active : ""}>弱电线路管理</li> */}
                    </ul>
                </div>
                <div className={style.monitor}>
                    <div className={style.monitorCon}>
                        <ProAnaly />
                    </div>
                </div>
                <ProData />
            </div>
        );
    }
}
export default Property;
