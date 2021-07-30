import React from 'react';
import LeftMenu from './LeftMenu';
import TopMenu from './TopMenu';
import Logo from '../logo.svg';




export default function Menus() {
    return (
        <>
        
        <div className="sideBar">
            <img src={Logo} alt="myride.ke"/>
            <LeftMenu />
        </div>
        <div className="topMenu">
            <TopMenu />
        </div>

        </>
    )
}
