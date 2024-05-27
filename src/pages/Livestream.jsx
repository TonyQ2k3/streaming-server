import React, {useState} from 'react';
import videojs from 'video.js';
import VideoJS from '../components/VideoJS';
import { useParams, useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player/file';

function Livestream() {
    const params = useParams();
    const playerRef = React.useRef(null);
    const [vodServer, setVodServer] = useState('http://192.168.56.103/hls/live/stream/index.m3u8');
    let title = "Tony Nguyen's livestream";


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
            <h3 className=' mt-4 text-lg'>Quality Setting</h3>
            <button className='btn btn-primary p-2 border-2' onClick={() => {
                setVodServer('http://192.168.56.103/hls/live/stream/index.m3u8')
            }}>
                AUTO
            </button>
            <button className='btn btn-primary p-2 border-2' onClick={() => {
                setVodServer('http://192.168.56.103/hls/live/stream_low/index.m3u8')
            }}>
                LOW
            </button>
            <button className='btn btn-primary p-2 border-2' onClick={() => {
                setVodServer('http://192.168.56.103/hls/live/stream_mid/index.m3u8')
            }}>
                MEDIUM
            </button>
            <button className='btn btn-primary p-2 border-2' onClick={() => {
                setVodServer('http://192.168.56.103/hls/live/stream/index.m3u8')
            }}>
                HIGH
            </button>
        </div>
    )
}

export default Livestream