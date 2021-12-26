import React from 'react-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCog} from "@fortawesome/free-solid-svg-icons";


export const MenuItems=[
    {
        title:'Nairobi',
        center:''
    },
    {
        title:'Admin',
        path:'/Admin',
        icon:<FontAwesomeIcon icon={faUserCog}/>,
        cName:'nav-Link'
    },
]
export default MenuItems