package com.huaxin.hx3d.modbus;

import com.serotonin.modbus4j.BatchRead;
import com.serotonin.modbus4j.BatchResults;
import com.serotonin.modbus4j.ModbusFactory;
import com.serotonin.modbus4j.ModbusMaster;
import com.serotonin.modbus4j.code.DataType;
import com.serotonin.modbus4j.exception.ErrorResponseException;
import com.serotonin.modbus4j.exception.ModbusInitException;
import com.serotonin.modbus4j.exception.ModbusTransportException;
import com.serotonin.modbus4j.ip.IpParameters;
import com.serotonin.modbus4j.locator.BaseLocator;
import com.serotonin.modbus4j.msg.*;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/12 17:46
 * @description：Modbus4jUtils
 * @modified By：
 */
@Slf4j
@Component
public class Modbus4jUtils {
    /**
     * modbus工厂
     */
    static ModbusFactory modbusFactory;

    static {
        if(modbusFactory == null){
            modbusFactory = new ModbusFactory();
        }
    }

    /**
     * 获取master
     * @return
     */
    @SneakyThrows(value=ModbusInitException.class)
    public static ModbusMaster getMaster() {
        IpParameters params = new IpParameters();
        params.setHost("localhost");
        params.setPort(502);
        ModbusMaster master = modbusFactory.createTcpMaster(params, false);//TCP协议
        master.init();
        return master;
    }

    /**
     * 读取[01 Coil Status 0x]类型 开关数据
     * @param slaveId slaveId
     * @param offset 位置
     * @return
     */
    @SneakyThrows(value={ModbusTransportException.class,ErrorResponseException.class})
    public static Boolean readCoilStatus(int slaveId,int offset) {
        BaseLocator<Boolean> loc = BaseLocator.coilStatus(slaveId, offset);
        Boolean value = getMaster().getValue(loc);
        return value;
    }

    /**
     * 读取[02 Input Status 1x]类型 开关数据
     * @param slaveId
     * @param offset
     * @return
     */
    @SneakyThrows(value={ModbusTransportException.class,ErrorResponseException.class})
    public static Boolean readInputStatus(int slaveId, int offset) {
        // 02 Input Status
        BaseLocator<Boolean> loc = BaseLocator.inputStatus(slaveId, offset);
        Boolean value = getMaster().getValue(loc);
        return value;
    }

    /**
     * 读取[03 Holding Register类型 2x]模拟量数据
     * @param slaveId
     * @param offset 位置
     * @param dataType 数据类型,来自com.serotonin.modbus4j.code.DataType
     * @return
     * @throws ModbusTransportException
     * @throws ErrorResponseException
     * @throws ModbusInitException
     */
    @SneakyThrows(value={ModbusTransportException.class,ErrorResponseException.class})
    public static Number readHoldingRegister(int slaveId, int offset, int dataType) {
        // 03 Holding Register类型数据读取
        BaseLocator<Number> loc = BaseLocator.holdingRegister(slaveId, offset, dataType);
        Number value = getMaster().getValue(loc);
        return value;
    }

    /**
     * 读取[04 Input Registers 3x]类型 模拟量数据
     * @param slaveId
     * @param offset 位置
     * @param dataType  数据类型,来自com.serotonin.modbus4j.code.DataType
     * @return
     */
    @SneakyThrows(value={ModbusTransportException.class,ErrorResponseException.class})
    public static Number readInputRegisters(int slaveId, int offset, int dataType) {
        // 04 Input Registers类型数据读取
        BaseLocator<Number> loc = BaseLocator.inputRegister(slaveId, offset, dataType);
        Number value = getMaster().getValue(loc);
        return value;
    }

    /**
     * 批量读取使用方法
     * @throws ModbusTransportException
     * @throws ErrorResponseException
     * @throws ModbusInitException
     */
    @SneakyThrows(value={ModbusTransportException.class,ErrorResponseException.class})
    public static void batchRead(){
        BatchRead<Integer> batch = new BatchRead<Integer>();
        batch.addLocator(0, BaseLocator.holdingRegister(1, 1, DataType.FOUR_BYTE_FLOAT));
        batch.addLocator(1, BaseLocator.inputStatus(1, 0));
        ModbusMaster master = getMaster();
        batch.setContiguousRequests(false);
        BatchResults<Integer> results = master.send(batch);
        log.info(results.getValue(0).toString());
        log.info(results.getValue(1).toString());
    }

    /**
     * 写 [01 Coil Status(0x)]写一个 function ID = 5
     * @param slaveId slave的ID
     * @param writeOffset 位置
     * @param writeValue 值
     * @return 是否写入成功
     * @throws ModbusTransportException
     * @throws ModbusInitException
     */
    @SneakyThrows(ModbusTransportException.class)
    public static boolean writeCoil(int slaveId, int writeOffset, boolean writeValue) {
        // 获取master
        ModbusMaster tcpMaster = getMaster();
        // 创建请求
        WriteCoilRequest request = new WriteCoilRequest(slaveId, writeOffset, writeValue);
        // 发送请求并获取响应对象
        WriteCoilResponse response = (WriteCoilResponse) tcpMaster.send(request);
        if (response.isException()) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * 写[01 Coil Status(0x)] 写多个 function ID = 15
     * @param slaveId
     * @param startOffset
     * @param bdata
     * @return
     * @throws ModbusTransportException
     */
    @SneakyThrows(ModbusTransportException.class)
    public static boolean writeCoils(int slaveId, int startOffset, boolean[] bdata){
        // 获取master
        ModbusMaster tcpMaster = getMaster();
        // 创建请求
        WriteCoilsRequest request = new WriteCoilsRequest(slaveId, startOffset, bdata);
        // 发送请求并获取响应对象
        WriteCoilsResponse response = (WriteCoilsResponse) tcpMaster.send(request);
        if (response.isException()) {
            return false;
        } else {
            return true;
        }
    }

    /***
     * 写[03 Holding Register(4x)] 写一个 function ID = 6
     *
     * @param slaveId
     * @param writeOffset
     * @param writeValue
     * @return
     * @throws ModbusTransportException
     */
    @SneakyThrows(ModbusTransportException.class)
    public static boolean writeRegister(int slaveId, int writeOffset, short writeValue)  {
        // 获取master
        ModbusMaster tcpMaster = getMaster();
        // 创建请求对象
        WriteRegisterRequest request = new WriteRegisterRequest(slaveId, writeOffset, writeValue);
        WriteRegisterResponse response = (WriteRegisterResponse) tcpMaster.send(request);
        if (response.isException()) {
            log.error(response.getExceptionMessage());
            return false;
        } else {
            return true;
        }
    }

    /**
     *
     * 写入[03 Holding Register(4x)]写多个 function ID=16
     *
     * @param slaveId
     *            modbus的slaveID
     * @param startOffset
     *            起始位置偏移量值
     * @param sdata
     *            写入的数据
     * @return 返回是否写入成功
     * @throws ModbusTransportException
     */
    @SneakyThrows(ModbusTransportException.class)
    public static boolean writeRegisters(int slaveId, int startOffset, short[] sdata) {
        // 获取master
        ModbusMaster tcpMaster = getMaster();
        // 创建请求对象
        WriteRegistersRequest request = new WriteRegistersRequest(slaveId, startOffset, sdata);
        // 发送请求并获取响应对象
        ModbusResponse response = tcpMaster.send(request);
        if (response.isException()) {
            log.error(response.getExceptionMessage());
            return false;
        } else {
            return true;
        }
    }

    /**
     * 写入数字类型的模拟量（如:写入Float类型的模拟量、Double类型模拟量、整数类型Short、Integer、Long）
     *
     * @param slaveId
     * @param offset
     * @param value
     *            写入值,Number的子类,例如写入Float浮点类型,Double双精度类型,以及整型short,int,long
     *            ,com.serotonin.modbus4j.code.DataType
     * @throws ModbusTransportException
     * @throws ErrorResponseException
     */
    @SneakyThrows(value={ModbusTransportException.class,ErrorResponseException.class})
    public static void writeHoldingRegister(int slaveId, int offset, Number value, int dataType) {
        // 获取master
        ModbusMaster tcpMaster = getMaster();
        // 类型
        BaseLocator<Number> locator = BaseLocator.holdingRegister(slaveId, offset, dataType);
        tcpMaster.setValue(locator, value);
    }




    /**
     * 测试
     *
     * @param args
     */
    @SneakyThrows(Exception.class)
    public static void main(String[] args) {
        // 01测试
        int count = 0;
//        while(count<10){
//            Boolean v1 = readCoilStatus(1, count);
//            log.info("ID=1:F=01:Alias={},value={}",count,v1);
//            count++;
//        }
        //02测试
//        count = 0;
//        while(count<10){
//            Boolean v2 = readInputStatus(1, count);
//            log.info("ID=1:F=02:Alias={},value={}",count,v2);
//            count++;
//        }


        count = 0;
        while(count<10){
            Number v3 = readHoldingRegister(1, count, DataType.FOUR_BYTE_FLOAT);
            log.info("ID=1:F=03:Alias={},value={}",count,v3);
            count++;
        }

//        // 04测试
//        Number v041 = readInputRegisters(1, 0, DataType.FOUR_BYTE_FLOAT);//
//        Number v042 = readInputRegisters(1, 2, DataType.FOUR_BYTE_FLOAT);//
//        log.info("v041:{}",v041);
//        log.info("v042:{}",v042);
//        // 批量读取
//        batchRead();




        //			boolean t01 = writeCoil(1, 0, true);
//			log.info("T01:{}",t01);

        // 测试02
//			boolean t02 = writeCoils(1, 0, new boolean[] { true, false, true });
//			log.info("T02:{}",t02);

        // 测试03
//			short v = -3;
//			boolean t03 = writeRegister(1, 1, v);
//			log.info("T03:{}" , t03);
        // 测试04
//			boolean t04 = writeRegisters(1, 0, new short[] { -3, 3, 9 });
//			log.info("t04:{}" ,t04);
        //写模拟量
//        writeHoldingRegister(1,0, 2, DataType.FOUR_BYTE_FLOAT);
    }
}
