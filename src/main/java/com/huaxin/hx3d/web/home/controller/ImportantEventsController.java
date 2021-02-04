package com.huaxin.hx3d.web.home.controller;


import com.huaxin.hx3d.web.home.model.ImportantEvents;
import com.huaxin.hx3d.web.home.service.IImportantEventsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  重要事情
 * </p>
 *
 * @author diaoby
 * @since 2021-01-20
 */
@RestController
@RequestMapping("/web/home/importantevents")
@Api(tags = { "重要事情" })
@Slf4j
public class ImportantEventsController {
    /**
     *
     */
    @Autowired
    private IImportantEventsService iImportantEventsService;

    /**
     *
     * @return
     */
    @RequestMapping("/getimportantevents")
    @ApiOperation(value = "重要事情", notes = "重要事情")
    @CrossOrigin
    public ImportantEvents getImportantEvents(){
        return iImportantEventsService.getImportantEvents();
    }
}
