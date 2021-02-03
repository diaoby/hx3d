import React from 'react';
import style from './Home.less';
import FlyStep from './FlyStep'
import Utils from "../../../utils/Utils";

import { hashHistory } from 'react-router';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  componentWillMount() {
    
  }

  componentDidMount() {
    let json = Utils.getInitParams();
    var cfg = {
      dom: document.getElementById("glCanvas"),
    };
    Object.assign(cfg,json);
    window.engine = new Engine(cfg);
    window.engine.open();
    this.full = false;
    this.firstFly = true;
    engine.on('EngineFinish', () => {
      engine.Api.Camera.setLookDistance(1); //设置最小缩放高度
      Utils.getIconList();
      this.goDefulatPoint();
    });
  }


  
  goDefulatPoint() {
    Utils.clearAllLayers();
    FlyStep.flyTo();
  }


  render() {
    return (
      <div>
        <div className={style.mainContent}></div>
        <div id="glCanvas" className={style.glcanvas}></div>
      </div>
    );
  }
}
export default Home;
