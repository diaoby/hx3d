import React from 'react';
import style from './ManIndex.less';
import Utils from "../../../utils/Utils";
import Monitor from './monitor/Monitor';
import Operation from './operation/Operation';
import Emergency from './emergency/Emergency';
import Energy from './energy/Energy';
import Property from './property/Property';
import Maintenance from './maintenance/Maintenance';
import { hashHistory } from 'react-router';

var time;
class ManIndex extends React.Component {
  state = {
    tab: "",
    secondTab: "",
    loadingIco: false,
    bigVideoSrc: "./video/北侧通道2.mp4",
    whiteSky: true
  };
  componentWillMount() {
    this.emergenTime = null;
  }
  componentDidMount() {
    let json = Utils.getInitParams();
    let me = this;
    var cfg = {
      dom: document.getElementById("glCanvas"),
    };
    Object.assign(cfg,json);
    window.engine = new Engine(cfg);
    window.engine.open();
    this.setZoom();
    this.getTimeData();
    window.onresize = function () {
      me.setZoom();
    };
    this.full = false;
    this.firstFly = true;
    this.Icon_Power = false;
    this.Icon_Power2 = false;
    this.Icon_Power3 = false;
    engine.on('EngineFinish', () => {
      engine.Api.Camera.setLookDistance(1); //设置最小缩放高度
      // this.goRCYYPOI();
      this.goDefulatPoint();
      // this.setMoveCar();
      Utils.getIconList();

    });

    window.engine.on('MeshClick', (geo, shapes) => {
      console.log(geo, shapes);
      engine.Api.Camera.info((a, b) => {
        const point = b; // 相机点
        console.log('相机点-目标点', point);
      });
      let vs = geo.split(':');
      this.firstFly = false;
      if (vs[0] == "DeviceTCC") {
        this.goParking();
      }
      // if (geo == "DeviceBA:baoan_icon1") {
      //   let list = [{
      //     id: vs[1],
      //     src: "./images/jgInfo.png",
      //     popSize: 338,
      //     popTop: -350,
      //     popLeft: 0,
      //     point: new engine.Api.Type.Vector3(120.20585062646703, 30.191884305673288,37.934757232666016, "4326"),
      //     target: new engine.Api.Type.Vector3(120.20551558472029, 30.191830509391291, 23.354293823242188, "4326"),
      //     clickInfo: () => {
      //       this.goBackBA();
      //     }
      //   }];
      //   Utils.setFlyPop(vs[0], list);
      // }
      // if (geo == "DeviceBA:baoan_icon2") {
      //   let list = [{
      //     id: vs[1],
      //     src: "./images/jgInfo.png",
      //     popSize: 338,
      //     popTop: -350,
      //     popLeft: -200,
      //     point: new engine.Api.Type.Vector3(120.20449051351154,30.191766799745682,51.855716705322266, "4326"),
      //     target: new engine.Api.Type.Vector3(120.20478735187731,30.191456496803671,35.806453704833984, "4326"),
      //     clickInfo: () => {
      //       this.goBackBA();
      //     }
      //   }];
      //   Utils.setFlyPop(vs[0], list);
      // }

      // if (geo == "YanGan:broken01" || geo == "YanGan:broken02") {
      //   this.yanGanClick(geo);
      // }
      if (geo == "JG_Icon:1") {
        this.JG1Click();
      }
      // if (geo == "JG_Icon:3") {
      //   let list = [{
      //     id: vs[1],
      //     src: "./images/jgInfo.png",
      //     popSize: 338,
      //     popTop: -320,
      //     popLeft: 120,
      //     point: new engine.Api.Type.Vector3(120.01373207971244, 30.282433467676547, 23.101491928100586, "4326"),
      //     target: new engine.Api.Type.Vector3(120.0134229641815, 30.283045364577571, -43.200000762939453, "4326"),
      //     clickInfo: () => {
      //       this.goBackYJZH();
      //     }
      //   }];
      //   Utils.setFlyPop(vs[0], list);
      // }
      // if (geo == "JG_Icon:4") {
      //   let list = [{
      //     id: vs[1],
      //     src: "./images/jgInfo.png",
      //     popSize: 338,
      //     popTop: -190,
      //     popLeft: 80,
      //     point: new engine.Api.Type.Vector3(120.01159478161824, 30.281780438820405, 30.470781326293945, "4326"),
      //     target: new engine.Api.Type.Vector3(120.01154550278264, 30.282212831705959, -12.781139373779297, "4326"),
      //     clickInfo: () => {
      //       this.goBackYJZH();
      //     }
      //   }];
      //   Utils.setFlyPop(vs[0], list);
      // }
      // if (geo == "JG_Icon:5") {
      //   let list = [{
      //     id: vs[1],
      //     src: "./images/jgInfo.png",
      //     popSize: 338,
      //     popTop: -190,
      //     popLeft: 80,
      //     point: new engine.Api.Type.Vector3(120.01329928662075, 30.284826499489114, 30.28297996520996, "4326"),
      //     target: new engine.Api.Type.Vector3(120.01329475515637, 30.285295182904026, -3.7999992370605469, "4326"),
      //     clickInfo: () => {
      //       this.goBackYJZH();
      //     }
      //   }];
      //   Utils.setFlyPop(vs[0], list);
      // }

      if (vs[0] == "DeviceICON") {
        var imagePath;
        var point;
        var target;
        if (vs[1] == "jg_icon_1") {
          imagePath = "./images/jgInfo.png";
          point= new engine.Api.Type.Vector3(120.20603184597682,30.189736927204084,41.005668640136719, "4326");
          target= new engine.Api.Type.Vector3(120.20577612829611,30.189966102167276,-1.0107107162475586, "4326");

        } else if (vs[1] == "jg_icon_2") {
          imagePath = "./images/jgInfo.png";
          point= new engine.Api.Type.Vector3(120.2057757722515,30.191214350346566,20.746906280517578, "4326");
          target= new engine.Api.Type.Vector3(120.20572910223939,30.191035238776809,12.629557609558105, "4326");
        } else if (vs[1] == "ljt_icon_5") {
          imagePath = "./images/ljtInfo.png";
          point= new engine.Api.Type.Vector3(120.20593842562839,30.190306505575418,23.752201080322266, "4326");
          target= new engine.Api.Type.Vector3(120.20573338073734,30.190255492228921,12.160807609558105, "4326");
        } else if (vs[1] == "ljt_icon_1") {
          imagePath = "./images/ljtInfo.png";
          point= new engine.Api.Type.Vector3(120.20590746132999,30.191309766349093,40.993869781494141, "4326");
          target= new engine.Api.Type.Vector3(120.20560824897937,30.191124216056679,15.95836067199707, "4326");
        } else if (vs[1] == "ld_icon_13") {
          imagePath = "./images/ldInfo.png";
          point= new engine.Api.Type.Vector3(120.20454906968227,30.190804377376455,41.206993103027344, "4326");
          target= new engine.Api.Type.Vector3(120.2047531876751,30.190537459423787,21.515560150146484, "4326");
        } else if (vs[1] == "ld_icon_2") {
          imagePath = "./images/ldInfo.png";
          point= new engine.Api.Type.Vector3(120.20501943518666,30.192030628331239,48.553779602050781, "4326");
          target= new engine.Api.Type.Vector3(120.20503666870525,30.191653924151588,20.587182998657227, "4326");
        } else if (vs[1] == "ld_icon_5") {
          imagePath = "./images/ldInfo.png";
          point= new engine.Api.Type.Vector3(120.20591065579374,30.191416955471507,35.797752380371094, "4326");
          target= new engine.Api.Type.Vector3(120.20559791772307,30.191352236034287,9.8448371887207031, "4326");
        } else if (vs[1] == "ld_icon_8") {
          imagePath = "./images/ldInfo.png";
          point= new engine.Api.Type.Vector3(120.20610542446292,30.19073864910963,49.440971374511719, "4326");
          target= new engine.Api.Type.Vector3(120.205673495816,30.190649263202225,13.596893310546875, "4326");
        } else if (vs[1] == "ld_icon_10") {
          imagePath = "./images/ldInfo.png";
          point= new engine.Api.Type.Vector3(120.2054276608919,30.189718687996631,27.731742858886719, "4326");
          target= new engine.Api.Type.Vector3(120.20550099100348,30.189924476943116,10.716373443603516, "4326");
        }else if(vs[1] == "xfs_icon_12"){
          imagePath = "./images/xfsInfo.png"
          point= new engine.Api.Type.Vector3(120.20475038421789,30.189957989131933,23.274927139282227, "4326");
          target= new engine.Api.Type.Vector3(120.20461098677362,30.189823293347384,-19.595388412475586, "4326");
        }
        else if(vs[1] == "xfs_icon_11"){
          imagePath = "./images/xfsInfo.png"
          point= new engine.Api.Type.Vector3(120.2048891962789,30.190424680255028,12.068330764770508, "4326");
          target= new engine.Api.Type.Vector3(120.20471034169005,30.190334244185866,2.4279823303222656, "4326");
        }
        else if(vs[1] == "menjin_icon1"){
          imagePath = "./images/mjInfo.png"
          point= new engine.Api.Type.Vector3(120.2048891962789,30.190424680255028,12.068330764770508, "4326");
          target= new engine.Api.Type.Vector3(120.20471034169005,30.190334244185866,2.4279823303222656, "4326");

        }
        else if (vs[1] == "ld_icon_12") {

          imagePath = "./images/ldInfo.png";
          point= new engine.Api.Type.Vector3(120.20534672143195,30.189562467363533,38.912059783935547, "4326");
          target= new engine.Api.Type.Vector3(120.20509580970237,30.189772830979802,27.468898773193359, "4326");
        }
        else if(vs[1] == "ljt_icon_3"){
          imagePath = "./images/ljtInfo.png";
          point= new engine.Api.Type.Vector3(120.20473484965576,30.190044559518448,23.697277069091797, "4326");
          target= new engine.Api.Type.Vector3(120.20484564977863,30.190201672901441,12.64409351348877, "4326");
        }
        else if(vs[1] == "ljt_icon_7"){
          imagePath = "./images/ljtInfo.png";
          point= new engine.Api.Type.Vector3(120.2055402923657,30.18971577385572,25.554332733154297, "4326");
          target= new engine.Api.Type.Vector3(120.20543060485652,30.189890079400591,8.22209358215332, "4326");
        }
        if(vs[1] == "ljt_icon_7" || vs[1] == "ljt_icon_3"  || vs[1] == "ld_icon_13" || vs[1] == "ld_icon_12" || vs[1] == "jg_icon_1"){
          let list = [{
            id: vs[1],
            src: imagePath,
            popSize: 338,
            popTop: -190,
            popLeft: 80,
            point: point,
            target: target,
            clickInfo: () => {
              this.goBackGGZC();
            }
          }];
          Utils.setFlyPop(vs[0], list);
        }else{
          let list = [{
            id: vs[1],
            src: imagePath,
            popSize: 338,
            popTop: -190,
            popLeft: 80,
            point: point,
            target: target,
            clickInfo: () => {
              this.goBackYJZH();
            }
          }];
          Utils.setFlyPop(vs[0], list);
        }
      }



      if (vs[0] == "DeviceMJ") {
        var imagePath;
        var point;
        var target;
        if (vs[1] == "menjin_icon1") {
          imagePath = "./images/mjInfo.png";
          point= new engine.Api.Type.Vector3(120.20499746325918,30.191983304380287,24.375324249267578, "4326");
          target= new engine.Api.Type.Vector3(120.20500350035705,30.191792048904379,20.154052734375, "4326");
        }
        else if (vs[1] == "menjin_icon2") {
          imagePath = "./images/mjInfo.png";
          point= new engine.Api.Type.Vector3(120.20544350121033,30.191836396312826,21.254253387451172, "4326");
          target= new engine.Api.Type.Vector3(120.205441396949,30.191655723831584,12.116103172302246, "4326");
        }
        else if (vs[1] == "menjin_icon4") {
          imagePath = "./images/mjInfo.png";
          point= new engine.Api.Type.Vector3(120.20468065409769,30.191513501025817,47.264556884765625, "4326");
          target= new engine.Api.Type.Vector3(120.20494963505692,30.191229549712215,5.6749496459960938, "4326");
        }
        let list = [{
          id: vs[1],
          src: imagePath,
          popSize: 338,
          popTop: -190,
          popLeft: 80,
          point: point,
          target: target,
          clickInfo: () => {
            this.goBackMJ();
          }
        }];
        Utils.setFlyPop(vs[0], list);
      }


      if(vs[0] == "DeviceICON" && (vs[1] == "dw_model_1" || vs[1] == "dw_model_2" || vs[1] == "dw_model_3")){
        engine.Api.MeshInfo.setVisible("DeviceICON", ["dw_model_1","dw_model_2","dw_model_3","dw_model_4","dw_model_5"],false);
        let src;
        let id;
        let name;
        if(vs[1] == "dw_model_1"){
          src="./video/北侧通道2.mp4";
          id="sxt_model_1";
          name="北侧通道2";
        }else if(vs[1] == "dw_model_2"){
          src="./video/东侧通道1.mp4";
          id="sxt_model_2";
          name="东侧通道1";
        }else if(vs[1] == "dw_model_3"){
          src="./video/西门2.mp4";
          id="sxt_model_4";
          name="西门2";
        }
        // this.clearTimeEvent();
        this.setState({ showBigVideo: false });
        this.setState({
          videoInfo: {
            videoSrc: src,
            videoName: name
          }
        });
        // this.setCameraAlarm(id);
        engine.Api.Camera.lookAt('DeviceMODEL', id, false, new engine.Api.Type.Vector3(-4, 4, -4), () => {
          this.setState({
            showBigVideo: true,
            bigVideoSrc: src,
            goAFJK: true
          });
        });

      }
      // if (geo == "LJT_Icon:1") {
      //   let list = [{
      //     id: vs[1],
      //     src: "./images/ljtInfo.png",
      //     popSize: 338,
      //     popTop: -300,
      //     popLeft: 120,
      //     point: new engine.Api.Type.Vector3(120.01401547710294, 30.282532105823478, 18.625919342041016, "4326"),
      //     target: new engine.Api.Type.Vector3(120.01377123680635, 30.2837057147763, -43.200000762939453, "4326"),
      //     clickInfo: () => {
      //       this.goBackYJZH();
      //     }
      //   }];
      //   Utils.setFlyPop(vs[0], list);
      // }
      // if (geo == "LJT_Icon:2") {
      //   let list = [{
      //     id: vs[1],
      //     src: "./images/ljtInfo.png",
      //     popSize: 338,
      //     popTop: -290,
      //     popLeft: 100,
      //     point: new engine.Api.Type.Vector3(120.01255192045792, 30.282189551036495, 24.008111953735352, "4326"),
      //     target: new engine.Api.Type.Vector3(120.0125715735892, 30.283140430008118, -43.200000762939453, "4326"),
      //     clickInfo: () => {
      //       this.goBackYJZH();
      //     }
      //   }];
      //   Utils.setFlyPop(vs[0], list);
      // }
      // if (geo == "LD_Icon:1") {
      //   let list = [{
      //     id: vs[1],
      //     src: "./images/ldInfo.png",
      //     popSize: 338,
      //     popTop: -190,
      //     popLeft: 80,
      //     point: new engine.Api.Type.Vector3(120.01331801388183, 30.282283489123554, 30.402669906616211, "4326"),
      //     target: new engine.Api.Type.Vector3(120.01286962302066, 30.282971571195144, -43.200008392333984, "4326"),
      //     clickInfo: () => {
      //       this.goBackYJZH();
      //     }
      //   }];
      //   Utils.setFlyPop(vs[0], list);
      // }
      // if (geo == "LD_Icon:2") {
      //   let list = [{
      //     id: vs[1],
      //     src: "./images/ldInfo.png",
      //     popSize: 338,
      //     popTop: -190,
      //     popLeft: 80,
      //     point: new engine.Api.Type.Vector3(120.01322735464393, 30.28288073962597, 39.633174896240234, "4326"),
      //     target: new engine.Api.Type.Vector3(120.01277420333955, 30.283273357824807, -43.200008392333984, "4326"),
      //     clickInfo: () => {
      //       this.goBackYJZH();
      //     }
      //   }];
      //   Utils.setFlyPop(vs[0], list);
      // }
      // if (geo == "LD_Icon:4") {
      //   let list = [{
      //     id: vs[1],
      //     src: "./images/ldInfo.png",
      //     popSize: 338,
      //     popTop: -190,
      //     popLeft: 80,
      //     point: new engine.Api.Type.Vector3(120.01295173492626, 30.282259516486917, 32.747219085693359, "4326"),
      //     target: new engine.Api.Type.Vector3(120.01255330024216, 30.282545400258137, -43.200000762939453, "4326"),
      //     clickInfo: () => {
      //       this.goBackYJZH();
      //     }
      //   }];
      //   Utils.setFlyPop(vs[0], list);
      // }
      // if (geo == "LD_Icon:5") {
      //   let list = [{
      //     id: vs[1],
      //     src: "./images/ldInfo.png",
      //     popSize: 338,
      //     popTop: -280,
      //     popLeft: 100,
      //     point: new engine.Api.Type.Vector3(120.01350101697294, 30.283300076991658, 23.377044677734375, "4326"),
      //     target: new engine.Api.Type.Vector3(120.01338171845246, 30.2836556295822, 0.00882720947265625, "4326"),
      //     clickInfo: () => {
      //       this.goBackYJZH();
      //     }
      //   }];
      //   Utils.setFlyPop(vs[0], list);
      // }
      if (geo == "XFS_Icon:1") {
        this.XFS1Click();
      }
      if (geo == "XFS_Icon:3") {
        let list = [{
          id: vs[1],
          src: "./images/xfsInfo.png",
          popSize: 338,
          popTop: -300,
          popLeft: 100,
          point: new engine.Api.Type.Vector3(120.01203575448359, 30.284795128787227, 24.489480972290039, "4326"),
          target: new engine.Api.Type.Vector3(120.01187347853454, 30.284948655236803, 0.0088267326354980469, "4326"),
          clickInfo: () => {
            this.goBackYJZH();
          }
        }];
        Utils.setFlyPop(vs[0], list);
      }
      if (geo == "Camera:23:23") {
        this.goSeeCamera(geo);
      }
    });
  };
  goParking() {
      let point = new engine.Api.Type.Vector3(120.20432997772625, 30.190718548026179, 171.70025634765625);
      let target = new engine.Api.Type.Vector3(120.20587121400122, 30.190770542997981, -96.8388671875);
      engine.Api.Camera.flyTo(point, target, 2, () => {
          engine.Api.Layers.showLayer("Build", false);
          engine.Api.Layers.showLayer("Inner");
          let div = document.createElement('div');
          div.className = "exitBtn";
          div.onclick = (e) => {
              e.target.parentNode.removeChild(e.target);
              let point = new engine.Api.Type.Vector3(120.20331097651267, 30.190684171006097,
                  349.246826171875);
              let target = new engine.Api.Type.Vector3(120.20644592743365, 30.190789931486346, -
                  196.97491455078125);
              engine.Api.Camera.flyTo(point, target, 2, () => {
                  engine.Api.Layers.showLayer("Inner", false);
                  engine.Api.Layers.showLayer("Build");
                  engine.Api.Layers.showLayer("DeviceCAR",false);


              });
          }
          document.body.appendChild(div);
          let point2 = new engine.Api.Type.Vector3(120.20385732453245,30.190702602859467,254.0535888671875);
          let target2 = new engine.Api.Type.Vector3(120.20613779073409,30.190779536872547,-143.28631591796875);
          engine.Api.Camera.flyTo(point2, target2, 2, () => {
            engine.Api.Layers.showLayer("DeviceCAR");
          })
      });
    }


    Personnel_locus() { //人员轨迹
      //设置导航
      let point = new engine.Api.Type.Vector3(120.20408190170865,30.191546531652907,277.6024169921875, "4326");
      let target = new engine.Api.Type.Vector3(120.20616463944468,30.190361083232911,-177.28524780273438, "4326");
      engine.Api.Camera.flyTo(point, target, 2, () => {
        let points = [{
                      x:120.20532414237816,
                      y:30.191785317411281,
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
                        x: 120.20538258331415,
                        y:30.19178590316546,
                        z: 0,
                        pid: "0000"
                    }];
                   engine.Api.Navigate.setMultiPoints(points, () => {
                        engine.Api.Navigate.setResume();
                                   //显示保安亭标志
                                   engine.Api.MeshInfo.setVisible('DeviceBA', ['baoan_icon1', 'baoan_icon2'], true);
                    });
      });
  }




  MenJinClick() {
    let mjList = [{
      id: "menjin_icon1",
      src: "./images/mjInfo.png",
      popSize: 338,
      popTop: -300,
      popLeft: 30,
      point: new engine.Api.Type.Vector3(120.20499746325918,30.191983304380287,24.375324249267578, "4326"),
      target: new engine.Api.Type.Vector3(120.20500350035705,30.191792048904379,20.154052734375, "4326"),
      clickInfo: () => {
        let point = new engine.Api.Type.Vector3(120.20415411954919,30.19256735551004,123.92019653320313, "4326");
        let target = new engine.Api.Type.Vector3(120.20479263199489,30.191779188436534,67.934402465820313, "4326");
        engine.Api.Camera.flyTo(point, target, 2, () => { });
      }
    }];
    Utils.setFlyPop("DeviceMJ", mjList);
  }
  XFS1Click() {
    let list = [{
      id: "1",
      src: "./images/xfsInfo.png",
      popSize: 338,
      popTop: -300,
      popLeft: 100,
      point: new engine.Api.Type.Vector3(120.01245371269307, 30.28340635512064, 21.891538619995117, "4326"),
      target: new engine.Api.Type.Vector3(120.01184536814442, 30.284132630643793, -43.200000762939453, "4326"),
      clickInfo: () => {
        this.goBackYJZH();
      }
    }];
    Utils.setFlyPop("XFS_Icon", list);
  }
  yanGanClick(geo) {
    let vs = geo.split(':');
    engine.Api.Pop.setPop(vs[0], vs[1], function (result) {
      let div = document.createElement('div');
      div.className = 'videoPop';
      div.innerHTML = `
        <div class="text">烟感异常告警</div>
        <div class="line1"></div>`;
      result.appendChild(div);
    });
    engine.Api.Pop.show(vs[0], vs[1]);
  }
  goSeeCamera() {
    let me = this;
    var sxtInfo = [{
      id: "23",
      isAlarm: true,
      color: 'c75d2f'
    }];
    engine.Api.MeshInfo.setAlarm("Camera", sxtInfo);
    engine.Api.Camera.lookAt('Camera', "23", false, new engine.Api.Type.Vector3(8, 8, 8), () => {
      me.setState({
        showBigVideo: true,
        bigVideoSrc: "./video/西门2.mp4"
      });
    });
  }
  JG1Click() {
    let list = [{
      id: "1",
      src: "./images/jgInfo.png",
      popSize: 338,
      popTop: -320,
      popLeft: 120,
      point: new engine.Api.Type.Vector3(120.01390550092006, 30.281911878684692, 24.407045364379883, "4326"),
      target: new engine.Api.Type.Vector3(120.01344369385939, 30.282840158081182, -43.200008392333984, "4326"),
      clickInfo: () => {
        this.state.tab = "日常运营" ? this.goBackYJZH() : this.goBackGGZC();
      }
    }];
    Utils.setFlyPop("JG_Icon", list);
  }
  goBackYJZH() {
    const point = new engine.Api.Type.Vector3(120.20629515792798, 30.192448319260073, 154.4622802734375, '4326');
    const target = new engine.Api.Type.Vector3(120.2055054487231, 30.19146217818794, 68.3288345336914, '4326');
    // let point = new engine.Api.Type.Vector3(120.0145662380198, 30.281235007346723, 290.43209838867188, "4326");
    // let target = new engine.Api.Type.Vector3(120.01256777011439, 30.283714104573054, -3.7999992370605469, "4326");
    engine.Api.Camera.flyTo(point, target, 2, () => { });
  }
  goBackBA() {
    let point = new engine.Api.Type.Vector3(120.2039906049487, 30.19240467054939,166.80593872070313, "4326");
    let target = new engine.Api.Type.Vector3(120.20490501440879, 30.19137861229429, 61.386329650878906, "4326");
    engine.Api.Camera.flyTo(point, target, 2, () => { });
  }
  goBackMJ() {
    let point = new engine.Api.Type.Vector3(120.20415411954919,30.19256735551004,123.92019653320313, "4326");
    let target = new engine.Api.Type.Vector3(120.20479263199489,30.191779188436534,67.934402465820313, "4326");
    engine.Api.Camera.flyTo(point, target, 2, () => { });
  }
  goBackGGZC() {
    let point = new engine.Api.Type.Vector3(120.20406310378692,30.188847460404578,196.33755493164063, "4326");
    let target = new engine.Api.Type.Vector3(120.20503310856756,30.190120704970195,49.426895141601563, "4326");
    engine.Api.Camera.flyTo(point, target, 2, () => { });
  }
  setMoveCar() {
    let carList = [{
      id: "Car01",
      name: "car01"
    }, {
      id: "Car02",
      name: "car02"
    }, {
      id: "Car03",
      name: "car03"
    }, {
      id: "Car04",
      name: "car04"
    }, {
      id: "Car05",
      name: "car05"
    }, {
      id: "Car06",
      name: "car06"
    }, {
      id: "Car07",
      name: "car07"
    }, {
      id: "Car08",
      name: "car08"
    }, {
      id: "Car09",
      name: "car09"
    }, {
      id: "Car10",
      name: "car10"
    }];
    carList.map((ele) => {
      engine.Api.MeshInfo.setVisible("XingChe", ele.id);
      engine.Api.Models.doAction('XingChe', ele.id, { actionName: ele.name, end: 3 }, () => {
        if (ele.id == "Car08") {
          this.setMoveCar(); //最慢车辆行驶完成重复动画
        } else {
          engine.Api.MeshInfo.setVisible("XingChe", ele.id, false);
        }
      });
    });

  }

  //设置缩放比例
  setZoom() {
    let width = (window.innerWidth) ? window.innerWidth : ((document.body) && (document.body.clientWidth)) ? document.body.clientWidth : 0;
    if (width < 1920) {
      width = 1920;
    }
    let zoom = width / 4000; //5000
    let compassZoom = width / 7680; //5000
    this.setState({ zoom: zoom, compassZoom: compassZoom });
  };

  getTimeData() {
    setInterval(function () {
      var date, year, month, day, hours = 0, minutes = 0, seconds = 0;
      date = new Date();
      year = date.getFullYear();
      month = date.getMonth() + 1;
      day = date.getDate();
      hours = date.getHours();
      minutes = date.getMinutes();
      seconds = date.getSeconds();
      if (document.querySelector('#nowTime')) {
        document.querySelector('#nowTime').innerText = year + '年' + Utils.Appendzero(month) + '月' + Utils.Appendzero(day) + '日' + Utils.Appendzero(hours) + ':' + Utils.Appendzero(minutes) + ':' + Utils.Appendzero(seconds);
      }

    }, 1000);
  }

  goDefulatPoint() {
    // engine.Api.Camera.SwitchToEffect(0);
    Utils.clearAllLayers();
    this.setState({
      tab: "",
      secondTab: ""
    });
    // let point = new engine.Api.Type.Vector3(120.01387304911593, 30.282005355279754, 9.920445442199707, "4326");
    // let target = new engine.Api.Type.Vector3(120.01240513085592, 30.285559283560186, -36.020706176757813, "4326");
    // engine.Api.Camera.flyTo(point, target, 3, () => { });
  }
  changeTab(tab) {
    if (this.state.tab == tab) {
      return;
    }
    this.setState({ loadingIco: false, showBigVideo: false });
    this.tab = tab;
    Utils.clearAllLayers();
    this.setState({ tab: tab, secondTab: "" });
    switch (tab) {
      case "日常运营":
        this.goRCYYPOI();
        break;
      case "应急中心":
        this.goYJZXPOI();
        break;
      case "安防监控":
        this.goAFJKPOI();
        break;
      case "能源能效":
        this.goNYNHPOI();
        break;
      case "公共资产":
        this.goGGZCPOI();
        break;
      case "运维管理":
        this.goYWGLPOI();
        break;
    }
  }
  returnClick() {
    this.setState({ tab: "日常运营" });
    this.goRCYYPOI();
  }
  fullBtn() {
    if (Utils.IsFullScreen()) {
      engine.Api.Screen.full(false);
    } else {
      engine.Api.Screen.full(true);
    }
  }

  setSecond(tab) {
    Utils.clearAllLayers();
    this.setState({ loadingIco: false, showBigVideo: false });
    this.setState({
      secondTab: tab
    })
  }

  goRCYYPOI() {
    this.setSecond('RYGL');
    this.Personnel_locus();


  }
  goYJZXPOI() {
    this.setSecond('YJZX');
    const point = new engine.Api.Type.Vector3(120.20629515792798, 30.192448319260073, 154.4622802734375, '4326');
    const target = new engine.Api.Type.Vector3(120.2055054487231, 30.19146217818794, 68.3288345336914, '4326');
    // engine.Api.Layers.showLayer(["DeviceICON"]);
    // engine.Api.MeshInfo.setVisible("DeviceICON", Utils.iconList,false);
    Utils.job2 = setInterval(() => {
      var num = Math.floor(Math.random()*1000);
      if(num % 5 == 0){
        console.log("摄像头红色开启");
        engine.Api.MeshInfo.setVisible('DeviceMODEL','dwred_model_1');
        setTimeout(() => {
          console.log("摄像头红色关闭");
          engine.Api.MeshInfo.setVisible('DeviceMODEL','dwred_model_1', false);
        },3000);
      }
    }, 5000);
    engine.Api.Camera.flyTo(point, target, 2, () => {
        // alert(1)
        engine.Api.MeshInfo.setVisible("DeviceICON", ["ljt_icon_1", "ljt_icon_5",
          "ld_icon_8","ld_icon_5","ld_icon_13","ld_icon_2","ld_icon_10",
          "jg_icon_1","jg_icon_2","xfs_icon_11","xfs_icon_12","dwred_model_1"]);
    });
  }
  goAFJKPOI() {
    // Utils.clearAllLayers();
    // hashHistory.push({ pathname: '/webvideo' });
    // return;
    let point = new engine.Api.Type.Vector3(120.20543795890823,30.192260379502191,78.3412094116211, "4326");
    let target = new engine.Api.Type.Vector3(120.20545052841378,30.191652192537141,28.644985198974609, "4326");
    engine.Api.Layers.showLayer(["DeviceICON"]);
    engine.Api.MeshInfo.setVisible("DeviceICON", Utils.iconList,false);
    engine.Api.Camera.flyTo(point, target, 2, () => {
    engine.Api.MeshInfo.setVisible("DeviceICON", ["dw_model_1","dw_model_2","dw_model_3","dw_model_4","dw_model_5"]);
    //   engine.Api.Layers.showLayer(["CameraIcon", "Camera"]);
      this.setVideoPop();
    });
  }
  setVideoPop() {
    let me = this;
    let popList = [{
      id: "dw_model_1",
      src: "北侧通道2"
    }, {
      id: "dw_model_2",
      src: "东侧通道1"
    }, {
      id: "dw_model_3",
      src: "西门2"
    // }, {
    //   id: "dw_model_5",
    //   src: "video07"
    }];
    this.current = 0;
    popList.map((ele) => {
      me.current++;
      me.monVideoTime = setTimeout(() => {
        if (me.tab !== "安防监控") return;
        engine.Api.Pop.setPop("DeviceICON", ele.id, function (result) {
          let div = document.createElement('div');
          div.className = 'videoPop';
          div.innerHTML = `
        <video autoPlay loop muted data-keepplaying data-autoplay onClick={this.changeSrc.bind(this, "1号楼高空（北）", "dw_model_1")} src="./video/${ele.src}.mp4">
        您的浏览器不支持 video 标签。
        </video>
        <div class="line"></div>
        <div class="icon1">·</div>`;
          result.appendChild(div);
        });
        engine.Api.Pop.display("DeviceICON", ele.id);
      }, me.current * 500);
    });
    this.clearVideo = setTimeout(() => {
      engine.Api.Pop.clearAllPop(["DeviceICON"]);
    }, 5000);
  }
  goNYNHPOI() {
    this.showEnergyImg('');
    let point = new engine.Api.Type.Vector3(120.20292259482864,30.190903728277469,190.85226440429688, "4326");
    let target = new engine.Api.Type.Vector3(120.20463161087177,30.190785782181809,77.956855773925781, "4326");
    engine.Api.Camera.flyTo(point, target, 2, () => {
    //   this.setSecond('ZNPD');
    //   this.showEnergyImg('ZNPD');
    //   engine.Api.Layers.showLayer(["DianWang", "PeiDianFang"]);
    //   engine.Api.MeshInfo.setVisible("DianWang", "GuoWang_In");
    //   engine.Api.MeshInfo.setVisible("MianBanWenZi", ["wsg (2)", "wsg (4)", "wsg (6)", "wsg (7)", "wsg (9)"]);
    //   engine.Api.MeshInfo.setVisible("PeiDianFang", ["9", "10", "20", "21"]);
    });
  }
  goGGZCPOI() {
    this.setSecond('GGSS');
    let point = new engine.Api.Type.Vector3(120.20406310378692,30.188847460404578,196.33755493164063, "4326");
    let target = new engine.Api.Type.Vector3(120.20503310856756,30.190120704970195,49.426895141601563, "4326");
    engine.Api.Layers.showLayer(["DeviceICON"]);
    engine.Api.MeshInfo.setVisible("DeviceICON", Utils.iconList,false);
    engine.Api.Camera.flyTo(point, target, 2, () => {
      engine.Api.MeshInfo.setVisible("DeviceICON", ["ljt_icon_3", "ljt_icon_7",
          "ld_icon_12","ld_icon_13","jg_icon_1","jg_icon_2"]);
    });
  }
  goYWGLPOI() {
    this.setSecond("JFSBYW");
  }

  step0() { //起始位置
    // engine.Api.Camera.SwitchToEffect(0);
    Utils.clearAllLayers();
    if (!this.state.loadingIco) {
      // this.setSecond("");
      //东南角高空视角
      let point = new engine.Api.Type.Vector3(120.20669415447036, 30.188404529774438, 230.73451232910156, "4326");
      let target = new engine.Api.Type.Vector3(120.20574194273635, 30.189995879676502, 59.388153076171875, "4326");
      engine.Api.Camera.flyTo(point, target, 4, this.step1.bind(this));
      this.setState({ loadingIco: true });
    }
    else {
      this.setState({ loadingIco: false });
      engine.Api.Camera.setFlyStop();
      engine.Api.Camera.stopRoate();
      if (time != null) {
        window.clearTimeout(time);
        time = null;
      }
    }
  }
  step1() {
    //南边大门视角
    let point = new engine.Api.Type.Vector3(120.20533899522967, 30.189720151820435, 8.29277515411377, "4326");
    let target = new engine.Api.Type.Vector3(120.20532604363582,30.189906312531342, 1.3565716743469238, "4326");


    engine.Api.Camera.flyTo(point, target, 6, this.step2.bind(this));
  }
  step2() {
    //南门
    // let point = new engine.Api.Type.Vector3(120.20522226372572,30.18986360360368, 3, "4326");
    // let target = new engine.Api.Type.Vector3(120.20543699255039, 30.189917770558612, 3, "4326");

    let point = new engine.Api.Type.Vector3(120.20516739379038, 30.189874026771584, 8.29277515411377, "4326");
    let target = new engine.Api.Type.Vector3(120.20538810649471,30.189887494876309, 1.3565716743469238, "4326");
    engine.Api.Camera.flyTo(point, target, 4, this.step3.bind(this));

  }

  step3() {
     //东南角
    let point = new engine.Api.Type.Vector3(120.20577070805666,30.189847014729313, 3, "4326");
    let target = new engine.Api.Type.Vector3(120.20575073261763, 30.190040362960865, 3, "4326");
    engine.Api.Camera.flyTo(point, target, 6, this.step4.bind(this));
  }
  step4() {
    //东面
   let point = new engine.Api.Type.Vector3(120.20576318115711,30.1902133664912, 3, "4326");
   let target = new engine.Api.Type.Vector3(120.20575637902594, 30.190404494824183, 3, "4326");
   engine.Api.Camera.flyTo(point, target, 4, this.step5.bind(this));
 }

 step5() {
  //东北角
//  let point = new engine.Api.Type.Vector3(120.20570281970485,30.191552178791813, 3, "4326");
//  let target = new engine.Api.Type.Vector3(120.205684260357, 30.191742671677066, 3, "4326");
 let point = new engine.Api.Type.Vector3(120.20571503803184,30.191656903871927, 3, "4326");
 let target = new engine.Api.Type.Vector3(120.20549048436351,30.191653999266595, 3, "4326");

 engine.Api.Camera.flyTo(point, target,12, this.step6.bind(this));
}

step6() {
   //西北角
 let point = new engine.Api.Type.Vector3(120.20490506406314,30.191650700781246, 3, "4326");
 let target = new engine.Api.Type.Vector3(120.20491774595062,30.191457101160889, 3, "4326");
 engine.Api.Camera.flyTo(point, target,12, this.step7.bind(this));
}

step7() {
  //西边车库入口
let point = new engine.Api.Type.Vector3(120.20489023977403,30.191022932557207, 3, "4326");
let target = new engine.Api.Type.Vector3(120.20488992407999,30.190831735906929, 3, "4326");

engine.Api.Camera.flyTo(point, target,12, this.step8.bind(this));
}


step8() {
  //西边车库入口拐角1
let point = new engine.Api.Type.Vector3(120.20495341296778,30.190868356253475, 3, "4326");
let target = new engine.Api.Type.Vector3(120.20482323161315,30.190713621414432, 3, "4326");
engine.Api.Models.doAction('DeviceMODEL', 'zhezha_model_5', { actionName: 'Take 001', start: 0, end: 1, speed: 1 });//打开车闸
engine.Api.Camera.flyTo(point, target,4, this.step9.bind(this));
}


step9() {
  engine.Api.Models.doAction('DeviceMODEL', 'zhezha_model_5', { actionName: 'Take 001', start: 1, end: 0, speed: 1 });// 关闭车闸
  //西边车库入口拐角2
let point = new engine.Api.Type.Vector3(120.20479220357625,30.190741952912663, 3, "4326");
let target = new engine.Api.Type.Vector3(120.20480039506955,30.190550672055725, 3, "4326");
engine.Api.Camera.flyTo(point, target,4, this.step10.bind(this));
}

step10() {
  //西南角
let point = new engine.Api.Type.Vector3(120.20478245741192,30.189857277358438, 3, "4326");
let target = new engine.Api.Type.Vector3(120.20500487618332,30.189860364002204, 3, "4326");
engine.Api.Camera.flyTo(point, target,12, this.step11.bind(this));
}

step11() {
  //西北高空视角
let point = new engine.Api.Type.Vector3(120.20424230874903,30.191808721866504,298.5621337890625, "4326");
let target = new engine.Api.Type.Vector3(120.20604166376128,30.190089633402785, -127.50381469726563, "4326");
engine.Api.Camera.flyTo(point, target,8, this.step12.bind(this));
}


step12() {
  let me = this;
  let target = new engine.Api.Type.Vector3(120.20539650106024, 30.19054930575269,-12.04271125793457, "4326");
  engine.Api.Camera.startRoate(target, 15);
  time = window.setTimeout(() => {
    time = null;
    engine.Api.Camera.stopRoate();
    this.setState({ loadingIco: false });
  }, 18000);
}

  changeSky() {
    if (this.state.whiteSky) {
      engine.Api.Camera.SwitchToEffect(1);
      setTimeout(() => {
        if (this.state.secondTab == "DTGL") {
          engine.Api.MeshInfo.setVisible('hcyjzn', 'st', false);
        } else {
          engine.Api.MeshInfo.setVisible('hcyjzn', 'st');
        }
      }, 1000);
    } else {
      engine.Api.Camera.SwitchToEffect(0);
    }
    this.setState({
      whiteSky: !this.state.whiteSky
    });
  }

  closeClick() {
    this.setState({
      showBigVideo: false
    });
    this.state.goAFJK ? this.goAFJKPOI() : this.goRCYYPOI();
  }

  showEnergyImg(tab) {
    this.setState({
      energyImg: tab
    });
  }

  clearTimeEvent() {
    window.clearTimeout(this.emergenTime1),
    window.clearTimeout(this.emergenTime2),
    window.clearTimeout(this.emergenTime3),
    window.clearTimeout(this.emergenTime4),
    window.clearTimeout(this.energyTime1),
    window.clearTimeout(this.energyTime2),
    window.clearTimeout(this.energyTime3),
    window.clearTimeout(this.operaTime),
    window.clearTimeout(this.clearVideo),
    window.clearTimeout(this.openAutoTime),
    engine.Api.MeshInfo.clearAlarm("LuDeng"),
    engine.Api.MeshInfo.clearAlarm("Camera"),
    window.clearTimeout(this.monVideoTime),
    engine.Api.Camera.setFlyStop(),
    engine.Api.Camera.stopRoate()
  }

  // 模拟物联网设备传入数据进行联动
  job = setInterval(() => {
    // console.log("测试日志打印！！！")
    var num = Math.floor(Math.random()*1000);
    if (num % 3 == 0) {
     // console.log("车辆出库，道闸开启！")
      engine.Api.Models.doAction('DeviceMODEL', 'zhezha_model_6', { actionName: 'Take 001', start: 0, end: 1, speed: 1 });// 关闭车闸
      setTimeout(() => {
       // console.log("车辆通过，道闸关闭！")
        engine.Api.Models.doAction('DeviceMODEL', 'zhezha_model_6', { actionName: 'Take 001', start: 1, end: 0, speed: 1 });// 关闭车闸
      },3000);
    }
  }, 5000);
  render() {
    return (
      <div>
        <div className={style.mainContent}></div>
        <div id="glCanvas" className={style.glcanvas}></div>
        <section style={{ zoom: this.state.zoom }}>
          <div className={style.top_bg}>华信智慧园区</div>
          <div className={style.firstTab}>
            <ul>
              <li onClick={this.changeTab.bind(this, "日常运营")} className={this.state.tab == "日常运营" ? style.active : ""}>日常运营</li>
              <li onClick={this.changeTab.bind(this, "应急中心")} className={this.state.tab == "应急中心" ? style.active : ""}>应急中心</li>
              <li onClick={this.changeTab.bind(this, "安防监控")} className={this.state.tab == "安防监控" ? style.active : ""}>安防监控</li>
              <li onClick={this.changeTab.bind(this, "能源能效")} className={this.state.tab == "能源能效" ? style.active : ""}>能源能效</li>
              <li onClick={this.changeTab.bind(this, "公共资产")} className={this.state.tab == "公共资产" ? style.active : ""}>公共资产</li>
              <li onClick={this.changeTab.bind(this, "运维管理")} className={this.state.tab == "运维管理" ? style.active : ""}>运维管理</li>
              {/* <li onClick={this.changeTab.bind(this, "运维管理")} className={this.state.tab == "运维管理" ? style.active : ""}>运维管理</li> */}
            </ul>
          </div>
          <div className={style.infoContent}>
            <div className={style.title}>{this.state.tab}</div>
          </div>
          <div className={style.topIco}>
            <ul>
              <li onClick={this.step0.bind(this)} className={this.state.loadingIco ? style.loadingIco : ""}></li>
              <li onClick={this.fullBtn.bind(this)}></li>
              <li onClick={this.changeSky.bind(this)} className={this.state.whiteSky ? style.loadingSky : style.loadingSky1}></li>
              <li></li>
            </ul>
          </div>
          <div className={style.nowTime} id="nowTime"></div>
          {this.state.tab == "日常运营" ? <Operation parent={this} /> : null}
          {this.state.tab == "安防监控" ? <Monitor parent={this} /> : null}
          {this.state.tab == "应急中心" ? <Emergency parent={this} /> : null}
          {this.state.tab == "能源能效" ? <Energy parent={this} /> : null}
          {this.state.tab == "公共资产" ? <Property parent={this} /> : null}
          {this.state.tab == "运维管理" ? <Maintenance parent={this} /> : null}
          {this.state.showBigVideo ? <div className={style.bigVideo}>
            <div className={style.close} onClick={this.closeClick.bind(this)}>×</div>
            <video autoPlay loop muted data-keepplaying data-autoplay src={this.state.bigVideoSrc}>
              您的浏览器不支持 video 标签。
          </video>
          </div> : null}
        </section>
        {/* <div className={style.compass}  style={{ zoom: this.state.compassZoom }}>
          <div className={style.compassBg}></div>
        </div> */}
      </div>
    );
  }
}
export default ManIndex;
