import React, { Component } from 'react'
import Video from './Video'
import style from './VideoMain.less';
import CameraAddressConstant  from './CameraAddressConstant.js'

class VideoMain extends React.Component {
    render() {
        return (
            <div className={style.operInfo}>
                <div className={style.infoVideo}>
                    <ul className={style.videoList}>
                    {
                        CameraAddressConstant.CAMERA_ADDRESS_LIST.map((item,index) =>{
                            return   (<li key={item.playerId + index}>
                                        <Video
                                            playerUrl={item.playerUrl}
                                            playerId={item.playerId}
                                            playerAddress={item.playerAddress}
                                            playerName={item.playerName}
                                        ></Video>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        );
      }
}

export default VideoMain;