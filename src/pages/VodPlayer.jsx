import React from 'react'
import videojs from 'video.js';
import VideoJS from '../components/VideoJS';
import { useParams, useHistory } from 'react-router-dom';

function VodPlayer() {
  const params = useParams();
  const id = params.id;
  const playerRef = React.useRef(null);
  const vodServer = 'http://192.168.56.103/hls/';
  let title, username;
  switch (id) {
    case 'fallout':
      title = 'Friendship! - (Fallout 4 Parody)';
      username = 'Piemations';
      break;
    case 'mitm':
      title = 'Man in the middle attack';
      username = 'Tony Nguyen';
      break;
    case 'kurz':
      title = 'The Moment Kurzgesagt Changed Forever';
      username = 'Kurzgesagt In a Nutshell';
      break;
    case 'cpu':
      title = 'How to make a CPU';
      username = 'RobertElderSoftware';
      break;
  }

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
            <VideoJS source={vodServer + id +'.m3u8'} onReady={handlePlayerReady} />            
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

export default VodPlayer


// Live stream URL
//<VideoJS source='http://192.168.56.103:80/hls/stream/index.m3u8' onReady={handlePlayerReady} />