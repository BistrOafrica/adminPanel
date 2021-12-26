import React from 'react-dom';
import { faSearchLocation, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../soofaLogo.svg';


function TopMenu(){
    const handleSignOut=(e)=>{
        e.preventDefault();
        localStorage.clear();
        window.location.href = '/login';
    }

    return(
        <>
            <div className="topMenuItems">
                <img src={Logo} alt="quBeans.ke" className="logo"/>
                <form className="searchBar">
                    <input className="searchBox" type="text" placeholder="Search" aria-label="Search" />
                    <FontAwesomeIcon icon={faSearchLocation} />
                </form>
                <div className="row UserDetails">
                    <div className="col-md-2 UserDp">
                        UN
                    </div>
                    <div className="col-md-5 UserName">
                        <span>Joe Benson</span>
                    </div>
                    <div className="col-md-5 signOut">
                        <a href="/" className="signOutBtn" onClick={handleSignOut}>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            <span className='signOutTxt'>Sign Out</span>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopMenu