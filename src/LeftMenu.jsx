import React from 'react'
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'



function LeftMenu() {
    return (
        <>
        <div className="nav-items">
            <ul>
            {MenuItems.map((item,index)=>{
                return(
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li> 
                )
            })} 
            </ul>
        </div>
            
        </>
    )
}

export default LeftMenu 
