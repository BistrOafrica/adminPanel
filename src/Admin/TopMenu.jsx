import React from 'react';
import { faSearchLocation, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function TopMenu(){
    return(
        <>
            <div className="topMenuItems">
                <form className="searchBar">
                    <input className="searchBox" type="text" placeholder="Search" aria-label="Search" />
                    <FontAwesomeIcon icon={faSearchLocation} />
                </form>
                <div className="row UserDetails">
                    <div className="col-md-4 UserDp" style={{backgroundImage:'url(https://image.flaticon.com/icons/png/128/3135/3135715.png)',width:'50px',height:'50px',backgroundPosition: 'center',
                    backgroundSize: 'contain'}}>
                    </div>
                    <div className="col-md-8">
                        <span className='UserName'>UserName</span>
                        <span className='UserType'>Operations</span>
                    </div>
                </div>
                <div className="signOut">
                    <a href="/" className="signOutBtn">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span className='signOutTxt'>Sign Out</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default TopMenu