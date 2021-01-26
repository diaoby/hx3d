package com.huaxin.hx3d.messageconverter;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;

import java.util.ArrayList;
import java.util.List;

/**
 * @author ：diaoby
 * @date ：Created in 2021/1/14 14:23
 * @description：
 * @modified By：
 */
@Slf4j
public class HxMappingJackson2HttpMessageConverter extends MappingJackson2HttpMessageConverter {
    /**
     *
     */
    public HxMappingJackson2HttpMessageConverter(){
        List<MediaType> mediaTypes = new ArrayList<>();
        mediaTypes.add(MediaType.TEXT_PLAIN);
        mediaTypes.add(MediaType.TEXT_HTML);  //加入text/html类型的支持
        setSupportedMediaTypes(mediaTypes);// tag6
    }

}
