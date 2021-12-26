import React from 'react-dom';
import LeftMenu from './LeftMenu';
import TopMenu from './TopMenu';





export default function Menus() {
    return (
        <>
        <div className="topMenu">
            
            <TopMenu />
        </div>
        <div className="sideBar">
            <LeftMenu />
        </div>
        

        </>
    )
}
