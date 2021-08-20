import React from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'



function LeftMenu() {
    
    
    return (
        <>
        <div className="nav-items">
            <ul>
            {MenuItems.map((item,index)=>{
                return(
                    
                        <Link to={item.path} className="link">
                        <li key={index} className={item.cName} >
                        <div className='a'>
                            <div className="icon">{item.icon}</div>
                            <span className="title">{item.title}</span>
                        </div>
                    </li> 
                    </Link>
                    
                )
            })} 
            </ul>
        </div>
            
        </>
    )
}

export default LeftMenu 
