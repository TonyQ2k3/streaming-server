import React from 'react';
import videojs from 'video.js';
import VideoJS from '../components/VideoJS';
import { useParams, useHistory } from 'react-router-dom';

function Livestream() {
    const params = useParams();
    const playerRef = React.useRef(null);
    const vodServer = 'http://192.168.56.103/hls/live/stream/index.m3u8';
    let title = "Tony Nguyen's livestream";
    let username = 'Tony Nguyen';


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
        <div className='w-[711px] mx-auto'>
            <div className='videoWrapper'>
                <VideoJS source={vodServer} onReady={handlePlayerReady} />            
            </div>
            <h3 className='vod-title'>
            {
                title.length <= 50 ? title : title.substring(0, 50) + '...'
            }
            </h3>
            <h3 className='text-lg'>{username}</h3>
        </div>
    )
}

export default Livestream