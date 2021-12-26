import React from 'react-dom';
import { Link } from 'react-router-dom';
import {Admin, Accounting, Management, Controls} from './MenuItems';
import CustomizedAccordions from './Accordion';
import 'boxicons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const menu1= Admin.map((item,index)=>{
    return(

        <Link key={index} to={item.path} className="link">
            <li  className="nav-Link" >
                <div className='a'>
                    <div className="icon"><box-icon color='lightseagreen' name={item.iconName} type={item.iconType} ></box-icon></div>
                    <div className="title">{item.title}</div>
                </div>
            </li>
        </Link>

    )
})
const menu2= Accounting.map((item,index)=>{
    return(

        <Link key={index} to={item.path} className="link">
            <li  className="nav-Link" >
                <div className='a'>
                    <div className="icon"><box-icon color='lightseagreen' name={item.iconName} type={item.iconType} ></box-icon></div>
                    <div className="title">{item.title}</div>
                </div>
            </li>
        </Link>

    )
})
const menu3= Management.map((item,index)=>{
    return(

        <Link key={index} to={item.path} className="link">
            <li  className="nav-Link" >
                <div className='a'>
                    <div className="icon"><box-icon color='lightseagreen' name={item.iconName} type={item.iconType} ></box-icon></div>
                    <div className="title">{item.title}</div>
                </div>
            </li>
        </Link>

    )
})

const controls=Controls.map((item,index)=>{
    return(

        <Link key={index} to={item.path} className={`link`}>
            <li  className={`nav-Link ${item.cname}`} >
                <div className='a'>
                    <div className="icon"><FontAwesomeIcon icon={item.iconName} /></div>
                    <div className="title">{item.title}</div>
                </div>
            </li>
        </Link>

    )
})



function LeftMenu() {
    
    
    return (
        <>
        <div className="nav-items">
            <p className='titledMenu'>CONTROLS</p>
            <ul>
                {controls}
            </ul>
            <p className='titledMenu'>DATA</p>
            <CustomizedAccordions menu1={menu1} menu2={menu2} menu3={menu3} />
        </div>
            
        </>
    )
}

export default LeftMenu 
