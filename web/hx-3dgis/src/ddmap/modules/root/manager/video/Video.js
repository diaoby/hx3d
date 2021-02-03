import React from 'react';

class Video extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            playerInit: "",
            playerUrl:props.playerUrl,
            playerId:props.playerId,
            playerAddress:props.playerAddress,
            playerName:props.playerName,
            playerClassName:props.playerClassName
        }
    }

    videoInit() {
        var flvUrl = this.state.playerUrl;
        var flvId = this.state.playerId;
        var player = videojs(flvId, {
            techOrder: ['html5', 'flvjs'],
            flvjs: {
              mediaDataSource: {
                enableStashBuffer:true,
                isLive: true,
                withCredentials: false,
                cors: true,
                hasAudio:false,
                hasVideo:true,
                stashInitialSize:100
              },
            },
    
            sources: [{
              src: flvUrl,
              type: 'video/x-flv'
            }],
           // poster:"http://vjs.zencdn.net/v/oceans.png",
            controls: true,
            preload: "auto",
            controlBar:{
              fullscreenToggle:true,
              volumePanel:false
            },
           fullscreenToggle:{options: {navigationUI: 'hide'}}
          }, function onPlayerReady() {
                console.log('player onPlayerReady')
            player.on('error', (err) => {
              console.log('first source load fail')
              player.src({
                src: flvUrl,
                type: 'video/x-flv'
              });
              player.ready(function() {
                console.log('player ready')
                player.load();
                player.play();
              });
            })
          });
        this.setState({ playerInit: player});
      }

    componentDidMount() {
        this.videoInit();
    };

    componentWillUnmount() {
        // 销毁
       this.state.playerInit.dispose();
    }

    render() {
        // className="video-js vjs-big-play-centered vjs-fluid"
        // style={{width:"50vw",height:"50vh",margin:"0 auto"}} 
        return (
            <video id={this.state.playerId} className={this.state.playerClassName} muted autoPlay>您的浏览器不支持 video 标签。</video>
        )
    }

}


export default Video;