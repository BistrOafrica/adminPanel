import React from "react";
import pic from '../../Assets/pic.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog, faEnvelope, faPhoneAlt, faUserCog} from "@fortawesome/free-solid-svg-icons";
import VerticalTabs from './Tabs'




export default function Profile() {


    return(
        <>
            {/*<h1 className='pageTitle' >  My Profile</h1>*/}
            <div className='userHeader'>
                <div className='profilepic'>
                    <img className='pic' src={pic} alt='Profile Pic'/>
                </div>
            </div>
            <div className='profileData'>
                <h4 className='userName'>{localStorage.getItem('userName')!==null? localStorage.getItem('userName'):`Jane Doe Johnson `}</h4>
                <p className='contactData'>
                    <span ><FontAwesomeIcon className='email' icon={faEnvelope}/> {localStorage.getItem('email')!==null? localStorage.getItem('email'):`example@soofa.com`}</span><br/>
                    <span ><FontAwesomeIcon className='phone' icon={faPhoneAlt}/> {localStorage.getItem('phone')!==null? localStorage.getItem('phone'):`+254 712 *** 789 `}</span>
                </p>
            </div>
            <div className='tabsWrapper'>
                <VerticalTabs
                    titleOne="Roles"
                    titleTwo="Settings"
                    icon1={faUserCog}
                    icon2={faCog}
                    Content={localStorage.getItem('Roles')!==null? `NO ROLES SET YET`:`ROLES ONCE SET WILL APPEAR HERE`}
                    ContentTwo="Settings Here"
                />
            </div>

        </>
    )
}