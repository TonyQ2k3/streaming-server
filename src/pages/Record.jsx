import React from 'react'
import videojs from 'video.js';
import VideoJS from '../components/VideoJS';
import { useParams, useHistory } from 'react-router-dom';

function Record() {
  const params = useParams();
  let videos = [
    'stream_360-1716606174',
    'stream-1716566947'
  ];
  const playerRef = React.useRef(null);
  const vodServer = 'http://192.168.56.103/hls/live/';

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };
  return (
        <main>
            {
                videos.map((id) => (
                    <div className='w-[711px] mx-auto'>
                        <div className='videoWrapper'>
                            <VideoJS mode='mp4' source={vodServer + id +'.mp4'} onReady={handlePlayerReady} />            
                        </div>
                        <h3 className='vod-title'>{id}</h3>
                    </div>
                ))
            }
        </main>
    )        
}

export default Record


// Live stream URL
//<VideoJS source='http://192.168.56.103:80/hls/stream/index.m3u8' onReady={handlePlayerReady} />