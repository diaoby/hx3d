/**
 * 常量类
 */
export default class Const {
    /** 后台服务地址 */
    /** 表单操作类型 */
    static FormAction = {
        Add: 'add',
        Update: 'Update'
    };
    static OperateType = {
        Clear: '清除',
        Save: '保存',
        Delete: '删除',
        Point: 'Point',
        PolyLine: 'PolyLine',
        Polygon: 'Polygon',
        PlotArea: 'PlotArea'
    };
    static ServerType = {
        packages: ''
    };
    static PoiType = {
        baiduPoi: '百度POI'
    };
    static BaseMapType = {
        MapVector:'矢量切片',
        MapImages:'影像切片'
    };
    /** 气泡提示信息*/
    static TipInfo = {
        Click: '单击开始，左键结束',
        RClick: '单击开始，右键结束',
        GetCoordinate: '点击获取坐标点信息',
        GetPoint:'单击标点'
    };
}