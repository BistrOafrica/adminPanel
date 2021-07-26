import React from 'react'
import { MenuItems } from './MenuItems'



function LeftMenu() {
    
    
    return (
        <>
        <div className="nav-items">
            <ul>
            {MenuItems.map((item,index)=>{
                return(
                    <li key={index} className={item.cName} >
                        <a href={item.path}>
                            <div className="icon">{item.icon}</div>
                            <span className="title">{item.title}</span>
                        </a>
                    </li> 
                )
            })} 
            </ul>
        </div>
            
        </>
    )
}

export default LeftMenu 
