import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

function Restream() {
    const params = useParams();
    const playerRef = React.useRef(null);
    let username = 'Tony Nguyen';

    return (
        <main>
            <div className='w-[711px] mx-auto py-4'>
                <iframe
                    width="711"
                    height="399"
                    src={`https://www.youtube.com/embed/zKrBl78poaE`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                
                <h3 className='vod-title'>Tony Nguyen's Youtube Restream</h3>
                <h3 className='text-lg'>{username}</h3>
            </div>
            <div className='w-[711px] mx-auto py-4'>
                <iframe
                    width="711"
                    height="399"
                    src={'https://www.facebook.com/plugins/video.php?href=YOUR_FACEBOOK_LIVE_STREAM_URL&show_text=false&appId=YOUR_APP_ID&width=100%&height=100%&autoplay=true'}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                
                <h3 className='vod-title'>Tony Nguyen's Youtube Restream</h3>
                <h3 className='text-lg'>{username}</h3>
            </div>
        </main>
        
    )
}

export default Restream