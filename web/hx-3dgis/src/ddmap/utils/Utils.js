import { message } from 'antd';
import { hashHistory } from 'react-router';
import Request from './Request';

/**
 * 系统辅助类
 */
export default class Utils {
  /**
   * 判断是否为空
   * @param {字符串} str
   */
  static isEmpty(str) {
    if (str == null || str.length == 0)
      return true;
    return false;
  };

  /**
   * 获取参数值
   * @param {*} key
   */
  static getParameter(key) {
    let url = window.location.href;
    let cond = url.split("?");
    let kv = cond[1].split("&");
    let value = "";
    kv.forEach(function (v) {
      if (v.split("=")[0] == key) {
        value = v.split("=")[1];
        return;
      }
    }, this);
    return value;
  };

  /**
   * 获取token
   */
  static getToken() {
    return window.sessionStorage.getItem("ddmap_token");
  };

  /** 设置token */
  static setToken(token) {
    window.sessionStorage.setItem("ddmap_token", token);
  };

  /**
   * 提示框
   * @param {提示内容} m
   */
  static alert(m) {
    message.info(m);
  };

  static confirm(m) {
    message.confirm(m);
  };

  /**
   * 失败
   * @param message
   */
  static error(m) {
    message.error(m);
  }

  /**
   * 警告
   * @param message
   */
  static warning(m) {
    message.warning(m);
  }

  static success(m) {
    message.success(m);
  }

  static getDomId() {
    return "ID" + this.getUUID(12);
  };

  /** 获取UUID */
  static getUUID(len = 32) {
    let radix = 16;
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [], i;
    radix = radix || chars.length;
    if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    return uuid.join('');
  };

  /** 标识是否打印日志信息 */
  static isDebug = true;

  /**
   * 设置设置是否打印日志信息
   * @param {boolean} debug
   */
  static setDebug(debug) {
    this.isDebug = debug;
  };

  /**
   * 控制台打印日志
   * @param {打印信息} info
   */
  static print(info) {
    if (this.isDebug)
      console.log(info);
  };

  /**
   * 定时器
   * @param {被执行方法} fn
   * @param {毫秒} mill
   * @param {作用域} scope
   */
  static defer(fn, mill, scope) {
    let int = window.setInterval(function () {
      if (fn.call(scope) == false) {
        window.clearInterval(int);
      }
    }, mill);
  };

  /**
   * 先把中文替换成两个字节的英文，在计算长度
   * @param {字符串内容} str
   */
  static getStrLength(str) {
    //return str.replace(/[\u0391-\uFFE5]/g, "aa").length;

    if (str == null) return 0;
    if (typeof str != "string") {
      str += "";
    }
    return str.replace(/[^\x00-\xff]/g, "01").length;
  };

  /**
   *
   * @param {*字条串以 开头判断} str
   */
  static startWith(wholeStr, str) {
    var reg = new RegExp("^" + str);
    return reg.test(wholeStr);
  }

  /**
   *
   * @param {*字符串以什么结尾} str
   */
  static endWith(str) {
    var reg = new RegExp(str + "$");
    return reg.test(this);
  }

  /**
   * 阻止鼠標冒泡
   * @param {事件} event
   */
  static stopEvents(event) {
    if (event.preventDefault)
      event.preventDefault();
    event.cancelbubble = true;
    if (event.stopPropagation)
      event.stopPropagation();
  };

  /**
   * 判断返回数据是否成功
   * @param {返回数据} data
   */
  static isSuccess(data) {
    if (!data.success) {
      message.error(data.message);
      if (data.code == '000') {//token失效
        hashHistory.push({ pathname: '/login' });
      }
      return false;
    }
    return true;
  };

  static tableCache = {};

  /** 数据返回回调 */
  static getTableDataBack(table, callback, data) {
    if (!this.isSuccess(data))
      return
    this.tableCache[table] = data.values;
    callback();
  };

  /** 获取表数据 */
  static getTableData(table, callback) {
    let list = this.tableCache[table];
    if (list == undefined) {
      let url = `${Utils.getAppServerIP()}/com/ddmap/system/core/controls/BasicController/getTableData?table_name=${table}&token=${this.getToken()}`;
      Request.get(url, { asyn: true }, this.getTableDataBack.bind(this, table, callback), this);
    } else {
      callback();
    }
  };

  static getFormatData(table, value) {
    let list = this.tableCache[table];
    if (list != undefined) {
      for (let i = 0; i < list.length; i++) {
        if (list[i]['id'] == value) {
          return list[i]['name'];
        }
      }
    }
  };

  /** 数据翻译 */
  static formatData(json, text, record, index) {
    if (this.isEmpty(text))
      return (text);
    let value = text;
    if (!this.isEmpty(json['table']))
      value = this.getFormatData(json['table'], text);
    if (!this.isEmpty(json['color']))
      value = `<div style='color:#${json['color']}'>${value}</div>`;
    return (value);
  };
  /**
    * 判断当前客户端类别
    * 返回 true为PC,否则为移动端
    */
  static isPC() {
    let userAgentInfo = navigator.userAgent;
    let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  };

  /**
   * DOM移动
   * */
  static moveModal(moveBtn, moveDom) {
    moveBtn.onmousedown = function (ev) {
      var ov = ev || event;
      var disX = ov.clientX - moveDom.offsetLeft;
      var disY = ov.clientY - moveDom.offsetTop;
      document.onmousemove = function (e) {
        var ov = e || event;
        moveDom.style.left = ov.clientX - disX + 'px';
        moveDom.style.top = ov.clientY - disY + 'px';
        if ((ov.clientY + 100 - disY) > document.body.clientHeight) {
          document.body.scrollTop = (ov.clientY + 100 - disY) - document.body.clientHeight;
        }
      };
      document.onmouseup = function (ov) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
      return false;
    };
  }

  /**
   * 获取secretKey
   */
  static getSecretKey() {
    return window.sessionStorage.getItem("ddmap_secretKey");
  };

  /** 设置secretKey */
  static setSecretKey(key) {
    window.sessionStorage.setItem("ddmap_secretKey", key);
  };

  /**
   * 参数说明：
   * s：要格式化的数字
   * n：保留几位小数
   * */
  static formatNum(s, n) {
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    let l = s.split(".")[0].split("").reverse(),
      r = s.split(".")[1];
    let t = "";
    for (let i = 0; i < l.length; i++) {
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;
  }

  /**
   * Modal移动
   * */
  static moveModal(node) {
    var modalNode = node.parentNode.parentNode;
    node.onmousedown = function (ev) {
      var ov = ev || event;
      var disX = ov.clientX - modalNode.offsetLeft;
      var disY = ov.clientY - modalNode.offsetTop;
      document.onmousemove = function (e) {
        var ov = e || event;
        modalNode.style.left = ov.clientX - disX + 'px';
        modalNode.style.top = ov.clientY - disY + 'px';
        if ((ov.clientY + 100 - disY) > document.body.clientHeight) {
          document.body.scrollTop = (ov.clientY + 100 - disY) - document.body.clientHeight;
        }
      };
      document.onmouseup = function (ov) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
      return false;
    };
  }

  /**
   * 获取GIS_ROLE
   */
  static getGisRoleId() {
    return window.sessionStorage.getItem("ddmap_GisRoleId");
  };

  /** 获取GIS_ROLE */
  static setGisRoleId(token) {
    window.sessionStorage.setItem("ddmap_GisRoleId", token);
  };

  /**
   * 获取ddmap_params
   */
  static getInitParams() {
    let params = window.sessionStorage.getItem("ddmap_params") || '{}'
    return JSON.parse(params);
  };

  /**
   * 获取AppServerIP
   */
  static getAppServerIP() {
    let json = this.getInitParams();
    return json.AppServerIP;
  };
  /**
     * 对数组对象里的某个字段进行排序 floors[{high:''},{high:''}]
     * 调用示例 : floors.sort(Utils.compareArray("high"));
     * @param {*} name
     * @param {*} desc
     */
  static compareArray(name, desc) {
    let me = this;
    return function (o, p) {
      let a, b;
      if (typeof o === "object" && typeof p === "object" && o && p) {
        a = o[name];
        b = p[name];
        if (a === b) {
          return 0;
        }
        if (typeof a === typeof b) {
          if (me.isEmpty(desc)) {
            return a < b ? -1 : 1;
          } else {
            return a < b ? 1 : -1;
          }
        }
        if (me.isEmpty(desc)) {
          return typeof a < typeof b ? -1 : 1;
        } else {
          return typeof a < typeof b ? 1 : -1;
        }
      }
      else {
        throw ("error");
      }
    }
  };
  static getEngineUUID() {
    if (!this.engineUUId) {
      this.engineUUId = this.getUUID();
    }
    return this.engineUUId;
  };
  static getEngine() {
    return window[this.getEngineUUID()];
  };
  static getEngineApi(name) {
    return window[this.getEngineUUID()].Map3D.API[name];
  };
  static getEngineApi2D(name) {
    return window[this.getEngineUUID()].Map2D.API[name];
  };
  /**
     * @param {*} string
     */
  static getSkinColor(str) {
    if (str.indexOf("skin1") != -1) {
      return '00dfde';
    }
    else if (str.indexOf("skin2") != -1) {
      return 'fea922';
    }
    else if (str.indexOf("skin3") != -1) {
      return 'f15362';
    }
    else if (str.indexOf("skin4") != -1) {
      return 'f05362';
    }
    else if (str.indexOf("skin5") != -1) {
      return 'fea922';
    }
  };

  /*
    *获取图片绝对路径
    * @param {*} path
  */
  static getAbsolutePath(path) {
    let href = window.location.origin + window.location.pathname + path;
    return href;
  };
  /** 获取默认值 */
  static getDefaultValue(value, def) {
    return this.isEmpty(value) ? def : value;
  };
  /** 时间补零 */
  static Appendzero(obj) {
    if (obj < 10) return "0" + "" + obj;
    else return obj;
  }
  /** 是否全屏 */
  static IsFullScreen() {
    return (document.body.scrollHeight == window.screen.height && document.body.scrollWidth == window.screen.width);
  }

  static  job2="";

  /** 重置状态 */
  static clearAllLayers() {

    //保安亭图标
    engine.Api.MeshInfo.setVisible('DeviceBA', ['baoan_icon1', 'baoan_icon2'], false);

    //停车位标识
    engine.Api.MeshInfo.setVisible('DeviceTCC', ['tingchewei_icon1','tingchewei_icon2'], false);

    //门禁和门禁图标
    engine.Api.MeshInfo.setVisible('DeviceMJ', ['menjin_icon1','menjin_icon2','menjin_icon3','menjin_icon4'], false);
    //巡逻路线
    engine.Api.Navigate.setClear([]);
    //停车场车子
    engine.Api.Layers.showLayer("DeviceCAR",false);

    engine.Api.Layers.showLayer("DeviceSb",false);
    // engine.Api.Layers.showLayer("DeviceICON",false);
    engine.Api.MeshInfo.setVisible("DeviceICON", this.iconList,false);
    //指示牌标志
    // engine.Api.MeshInfo.setVisible('DeviceICON', ['zsp'], false);
    //告警
    engine.Api.Layers.showLayer("SDGJ",false);
    //清除告警弹框
    engine.Api.Pop.clearPop('DeviceICON', ['zsp','dw_model_1','dw_model_2','dw_model_3']);
    engine.Api.MeshInfo.clearAlarm("DeviceMODEL");
    //隐藏红色告警摄像头
    engine.Api.MeshInfo.setVisible('DeviceMODEL','dwred_model_1', false);
    //清楚红色摄像头告警
    if(this.job2!=""){
      window.clearInterval(this.job2);
    }
    //隐藏标签图层
    // engine.Api.Layers.showLayer("DeviceICON",false);
  }
  // 根据图层名称屏蔽图层下所有模型
  static hideAllModel(layerName) {
    engine.Api.Layers.getLayerMeshs(layerName,(a,b)=>{
    // console.log(a,b);
      let meshList = b.split(';');
      engine.Api.MeshInfo.setVisible(layerName,meshList,false);
    })
  }

   // 根据图层名称屏蔽图层下所有模型
   static  iconList="";
   static getIconList() {
    engine.Api.Layers.getLayerMeshs("DeviceICON",(a,b)=>{
    // console.log(a,b);
      let meshList = b.split(';');
      this.iconList=meshList
      engine.Api.MeshInfo.setVisible("DeviceICON", this.iconList,false);
    })
  }

  /** 获取屏幕大小 */
  static getScreenSize() {
    let width = (window.innerWidth) ? window.innerWidth : ((document.body) && (document.body.clientWidth)) ? document.body.clientWidth : 0;
    return width;
  }

  /** 设置动态气泡 */
  static setMovePop(objType, idlist, className) {
    idlist.map((ele) => {
      engine.Api.Pop.setPop(objType, ele.id, function (result) {
        let div = document.createElement('div');
        div.className = 'energyPop';
        let textClass = className ? className : "";
        div.innerHTML = `
      <div class="text ${textClass}">${ele.text}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="line"></div>`;
        result.appendChild(div);
      });
      engine.Api.Pop.display(objType, ele.id);
    });
  }

  /** 飞向对象设置气泡 */
  static setFlyPop(objType, idlist, className) {
    idlist.map((ele) => {
      engine.Api.Camera.flyTo(ele.point, ele.target, 2, () => {
        engine.Api.Pop.setPop(objType, ele.id, function (result) {
          let div = document.createElement('img');
          div.className = className;
          div.src = ele.src;
          div.onclick = () => {
            engine.Api.Pop.clearPop(objType, ele.id)
            if (ele.clickInfo) ele.clickInfo();
          }
          div.style.cssText = `cursor: pointer;
                width: ${ele.popSize}px;
                display:block;
                position: absolute;
                top: ${ele.popTop}px;
                left: ${ele.popLeft}px;`;
          result.appendChild(div);
        });
        engine.Api.Pop.display(objType, ele.id);
      });
    });
  }

  /** 点击飞向对象 */
  static clickToModel(objType, ele, className) {
    engine.Api.Camera.flyTo(ele.point, ele.target, 2, () => {
      engine.Api.Pop.setPop(objType, ele.id, function (result) {
        let div = document.createElement('img');
        div.className = className;
        div.src = ele.src;
        div.style.cssText = `cursor: pointer;
                width: ${ele.popSize}px;
                position: absolute;
                top: ${ele.popTop}px;
                left: ${ele.popLeft}px;`;
        result.appendChild(div);
      });
      engine.Api.Pop.display(objType, ele.id);
    });
  }

  /** 隐藏图层中所有对象 */
  static hideModels(objType) {
    engine.Api.Layers.getLayerMeshs(objType, (a, b) => {
      let list = b.split(";");
      console.log(list);
      list.map((ele) => {
        engine.Api.MeshInfo.setVisible(objType, ele, false);
      })
    });
  }
}
