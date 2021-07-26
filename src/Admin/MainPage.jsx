import React from 'react';
import LeftMenu  from './LeftMenu';
import Logo from '../logo.svg';
import Simple from './Maps';
import TopMenu from './TopMenu';


export default function MainPage() {
    return (
        <>
        <div className="sideBar">
            <img src={Logo} alt="myride.ke"/>
            <LeftMenu />
        </div>
        <div className="topMenu">
            <TopMenu />
        </div>
        <div className="map">
            <Simple />
        </div>
        
        </>
    )
}
