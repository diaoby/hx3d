/**
 * 飞行
 */
export default class Request{

    /**
     * 
     */
   static init(){
    this.getAllLayers();
   }

    /**
     * 飞行定位
     */
   static flyTo() {
        //东南角高空视角
        let point = new engine.Api.Type.Vector3(120.20669415447036, 30.188404529774438, 230.73451232910156, "4326");
        let target = new engine.Api.Type.Vector3(120.20574194273635, 30.189995879676502, 59.388153076171875, "4326");
        engine.Api.Camera.flyTo(point, target, 4,null);
    }
    /**
     * 获取当前相机点位
     */i
    static info(){
        engine.Api.Camera.info((a,b) => {
            console.log(b)
        })
    }
    /**
     * 地图旋转--有问题
     */
    static startRoate(){s
        console.log('carmerStartRoate')
        engine.Api.Camera.startRoate(10);
    }
    /**
     * 地图停止旋转
     */
    static stopRoate(){
        console.log('stopRoate')
        engine.Api.Camera.stopRoate();
    }

    /**
     * 获取屏幕中心点
     */
    static centerInfo(){
        engine.Api.Camera.CenterInfo((a,b)=>{console.log(b)})
    }
    /**
     * 相机重置
     */
    static restCamera(){
        console.log('restCamera')
        engine.Api.Camera.RestCamera();
    }
   /**
     * 相机重置
     */
    static setLookDistance(){
        console.log('setLookDistance')
        engine.Api.Camera.setLookDistance(3, 700)   //调整滚轮缩放
    }

    /**
     * 地图绕中心点旋转
     */
    static startRoateByTarget(){
        console.log('startRoateByTarget')
        engine.Api.Camera.startRoateByTarget();
        // engine.Api.Camera.startRoateByTarget(false);    //取消旋转
    }

    /**
     * 地图缩放
     */
    static zoom(){
        console.log('zoom')
        engine.Api.Camera.zoom()
    }

    /**
     * 获取所有图层
     */
    static getAllLayers(){
        engine.Api.Layers.getAllLayers((a,b)=>{console.log(a,b)})
    }

}