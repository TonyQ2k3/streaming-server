import React from 'react'
import {
  fallout, kurz, mitm, cpu
} from '../assets'

function VodMain() {  

  return (
    <div className='p-4 flex flex-wrap justify-center items-center'>
      <Thumbnail videoId='fallout' src={fallout} title='Friendship! - (Fallout 4 Parody)' username='Piemations'  />
      <Thumbnail videoId='mitm' src={mitm} title='Man in the middle attack' username='Tony Nguyen' />
      <Thumbnail videoId='kurz' src={kurz} title='The Moment Kurzgesagt Changed Forever' username='Kurzgesagt In a Nutshell' />
      <Thumbnail videoId='cpu' src={cpu} title='How to make a CPU' username='RobertElderSoftware' />
    </div>
  )
}

function Thumbnail({ videoId, src=fallout, title='How to survive Fallout How to survive Fallout How to survive Fallout', username='Tony Nguyen'}) {
    return (
        <div className='w-[599px] h-[400px] m-6 overflow-hidden'>
            <img src={src} className='' />
            <a href={`/vod/${videoId}`}>
              <h3 className='vod-title'>
                {
                  title.length <= 50 ? title : title.substring(0, 50) + '...'
                }
              </h3>
            </a>
            <h3 className='text-lg'>{username}</h3>
        </div>
    )
}

export default VodMain