import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUserFriends, faChartPie, faUsersCog, faCogs, faDatabase, faEye, faUserCog, faTh, faCar, faTaxi, faTachometerAlt, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

export const MenuItems=[
    {
        title:'Eagle\'s Eye',
        path:'/LiveMap',
        icon:<FontAwesomeIcon icon={faEye}/>,
        cName:'nav-Link'
    },
    {
        title:'Admin',
        path:'/Admin',
        icon:<FontAwesomeIcon icon={faUserCog}/>,
        cName:'nav-Link'
    },
    {
        title:'Dashboard',
        path:'/',
        icon:<FontAwesomeIcon icon={faTh}/>,
        cName:'nav-Link'
    },
    {
        title:'Drivers',
        path:'/Drivers',
        icon:<FontAwesomeIcon icon={faCar}/>,
        cName:'nav-Link'
    },
    {
        title:'Riders',
        path:'/Riders',
        icon:<FontAwesomeIcon icon={faUserCog}/>,
        cName:'nav-Link'
    },
    {
        title:'Dispatch',
        path:'/Dispatch',
        icon:<FontAwesomeIcon icon={faTaxi}/>,
        cName:'nav-Link'
    },
    {
        title:'Trips',
        path:'/Trips',
        icon:<FontAwesomeIcon icon={faTachometerAlt}/>,
        cName:'nav-Link'
    },
    {
        title:'Corporate',
        path:'/Corporate',
        icon:<FontAwesomeIcon icon={faNetworkWired}/>,
        cName:'nav-Link'
    },
    {
        title:'Referrals',
        path:'/Referrals',
        icon:<FontAwesomeIcon icon={faUserFriends}/>,
        cName:'nav-Link'
    },
    {
        title:'Statistics',
        path:'/Statistics',
        icon:<FontAwesomeIcon icon={faChartPie}/>,
        cName:'nav-Link'
    },
    {
        title:'Customer Care',
        path:'/CustomerCare',
        icon:<FontAwesomeIcon icon={faUsersCog}/>,
        cName:'nav-Link'
    },
    {
        title:'Download Data',
        path:'/Data',
        icon:<FontAwesomeIcon icon={faDatabase}/>,
        cName:'nav-Link'
    },
    {
        title:'Settings',
        path:'/Settings',
        icon:<FontAwesomeIcon icon={faCogs}/>,
        cName:'nav-Link'
    },
]