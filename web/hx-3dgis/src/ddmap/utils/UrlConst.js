export default class UrlConst {

    static SERVIER = {
        serverIp:'10.10.6.224',
        serverPort:8082
    };


    static SERVIER_URL = {
        GETENERGYTEST:'http://'+UrlConst.SERVIER.serverIp + ':'+ UrlConst.SERVIER.serverPort +'/hx3d/web/home/energytest/getenergytest/',
        GETTEMPERATRUE:'http://'+UrlConst.SERVIER.serverIp + ':'+ UrlConst.SERVIER.serverPort +'/hx3d/web/home/energytest/gettemperatrue/',
        INVOKEMETHOD:'http://'+UrlConst.SERVIER.serverIp + ':'+ UrlConst.SERVIER.serverPort +'/hx3d/web/home/energytest/invokemethod/',
    }

}