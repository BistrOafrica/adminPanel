import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

export const MenuItems=[
    {
        title:'Live Map',
        path:'/liveMap',
        icon:<FontAwesomeIcon icon={faMapMarkerAlt}/>,
        cName:'nav-Link'
    },
    {
        title:'Data',
        path:'/data',
        icon:<FontAwesomeIcon icon={faDatabase}/>,
        cName:'nav-Link'
    },
]