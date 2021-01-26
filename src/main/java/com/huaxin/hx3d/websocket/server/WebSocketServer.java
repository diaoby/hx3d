package com.huaxin.hx3d.websocket.server;

import lombok.SneakyThrows;
import lombok.Synchronized;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/6 10:06
 * @description：websocket服务类
 * @modified By：
 */
@ServerEndpoint("/webSocket/{sid}")
@Component
@Slf4j
public class WebSocketServer {

    /**
     * 记录当前在线连接数
     */
    private static AtomicInteger onlineNum = new AtomicInteger();
    /**
     * 每个客户端对应的WebSocketServer 对象
     */
    private static ConcurrentHashMap<String, Session> sessionPools = new ConcurrentHashMap<String, Session>();

    /**
     * 发送消息
     * @param session
     * @param message
     */
    @Synchronized
    public void sendMessage(Session session,String message) throws IOException {
        if(null  != session){
            log.info("发送消息"+message);
            session.getBasicRemote().sendText(message);
        }
    }

    /**
     *
     * 发送给制定用户消息
     * @param userName
     * @param message
     */
    @SneakyThrows(value = IOException.class)
    public void sendInfo(String userName,String message){
        Session session = sessionPools.get(userName);
        sendMessage(session,message);
    }

    /**
     * 建立连接
     * @param session
     * @param userName
     */
    @OnOpen
    public void onOpen(Session session,@PathParam(value="sid")String userName) {
        sessionPools.put(userName,session);
        addOnlineCount();
        log.info(userName+"加入websocket连接！当前人数为"+onlineNum);
    }

    @OnClose
    public void onColse(@PathParam(value="sid")String userName){
        sessionPools.remove(userName);
        subOblineCount();
        log.info(userName+"断开websocket连接！当前人数为"+onlineNum);
    }

    /**
     * 收到客户端信息
     * @param message
     */
    @OnMessage
    public void onMsessage(String message){
        message ="客户端："+message+",已收到";
        log.info(message);
        for(Session session:sessionPools.values()){
            try {
                sendMessage(session,message);
            } catch (IOException e) {
                e.printStackTrace();
                continue;
            }
        }
    }

    /**
     * 错误调用
     * @param session
     * @param throwable
     */
    @OnError
    public void onError(Session session,Throwable throwable){
        log.info("发送错误"+throwable.getMessage());
        throwable.printStackTrace();
    }


    /**
     * 计数减1
     */
    private void subOblineCount() {
        onlineNum.decrementAndGet();
    }


    /**
     *计数加1
     */
    private void addOnlineCount() {
        onlineNum.incrementAndGet();
    }
}
