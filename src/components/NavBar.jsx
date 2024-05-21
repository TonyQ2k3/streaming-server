import React from 'react'
import { mmtt, uit} from '../assets'

function NavBar() {
  return (
    <nav className='navbar'>
        <div className='flex items-center'>
            <img src={uit} alt='uit logo' className='h-[25px] xl:h-[45px]'/>
            <img src={mmtt} alt='mmtt logo' className='h-[30px] xl:h-[50px] ml-[15px] md:ml-[30px]'/>
        </div>
        <div className='flex w-1/2 xl:w-1/3 justify-around'>
          <a href="/vod">
            <p>VOD</p>
          </a>
          <a href="/livestream">
            <p>Livestream</p>
          </a>
          <a href="/restream">
            <p>Restream</p>
          </a>
          <a href="#">
            <p>Credits</p>
          </a>
        </div>
    </nav>
  )
}

export default NavBar