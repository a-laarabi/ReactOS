import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, } from "framer-motion";
import launchpad from '../assets/dock/launchpad-icon.png'
import photos from '../assets/dock/Potos.svg'
import FaceTime from '../assets/dock/FaceTime.png'

import systemPreferences from '../assets/dock/SoftwareUpdate.png'
import Finder from '../assets/dock/FinderIcon.png'
import DownloadsFolder from '../assets/dock/DownloadsFolder.png'
import FullTrashIcon from '../assets/dock/FullTrashIcon.png'
import TrashIcon from '../assets/dock/TrashIcon.png'

const icons = [
    {
        name: 'Finder',
        icon: Finder
    },
    {
        name: 'Launchpad',
        icon: launchpad
    },
    {
        name: 'Photos',
        icon: photos
    },
    {
        name: 'FaceTime',
        icon: FaceTime
    },
    {
        name: 'System Preferences',
        icon: systemPreferences
    },
    {
        name: 'Downloads',
        icon: DownloadsFolder
    },
    {
        name: 'Trash',
        icon: TrashIcon
    }
];

const DockIcon = ({ mouseX, icon }) => {
    let ref = useRef(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [50, 90, 50]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
        >
            <img src={icon.icon} alt={icon.name} className='w-full' />
        </motion.div>
    );

}

const Dock = () => {
    let mouseX = useMotionValue(0)

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className='fixed bottom-[20px] left-[50%] translate-x-[-50%] rounded-3xl max-h-16 bg-white bg-opacity-10 backdrop-blur-xl flex gap-4 justify-between items-end px-8 pb-2 pt-1 shadow-xl'
        >
            {icons.map((icon, i) => (
                <DockIcon icon={icon} mouseX={mouseX} key={i} />
            ))}
        </motion.div>
    )
}

export default Dock