import React from 'react'
import Finder from '../assets/dock/FinderOSX.png'
import launchpad from '../assets/dock/launchpad-icon.png'
import photos from '../assets/dock/Potos.svg'
import FaceTime from '../assets/dock/FaceTime.png'
import systemPreferences from '../assets/dock/System_Preferences_icon.png'
import trash from '../assets/dock/trash-icon-mac-os-x-recycle.png'


const Dock = () => {
    return (
        <div className='fixed bottom-[20px] left-[50%] translate-x-[-50%] rounded-3xl w-[80%] max-h-16 bg-transparent backdrop-blur-2xl flex justify-between items-center px-8 pb-2 pt-1 shadow-xl'>
            <div className='flex gap-3'>
                <img src={Finder} alt='finde' className='h-14' />
                <img src={launchpad} alt='launchpad' className='h-14' />
                <img src={photos} alt='launchpad' className='h-14' />
                <img src={FaceTime} alt='launchpad' className='h-14' />
                <img src={systemPreferences} alt='launchpad' className='h-14' />
                <div className='h-[56px] w-[1px] bg-white' />

            </div>
            <div className='flex gap-3'>
                <div className='h-[56px] w-[1px] bg-white' />
                <img src={trash} alt='trash' className='h-14' />
            </div>

        </div>
    )
}

export default Dock