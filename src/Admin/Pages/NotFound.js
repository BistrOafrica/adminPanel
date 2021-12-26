import React from 'react-dom';
import notfound from '../../Assets/lost.svg';
import {Link} from "react-router-dom";

function NotFound(){
    return(
        <>

            <div style={{width:'110rem',textAlign:'center', padding:'20px'}}>
                {/*<h1 className='pageTitle' >404 PAGE NOT FOUND</h1>*/}
                <img style={{width:'400px', textAlign:'center',margin:'30px'}} src={notfound} alt="Page Not Found"/>
                <h4 style={{margin:'30px'}}>Oops! This obviously isn't a page you were looking for.</h4>
                <div className='dashLink'>
                    <Link to='/dashboard'
                          style={{
                              width:'50px',
                              padding:'10px 30px',
                              marginTop:'30px!important',
                              textDecoration:'none',
                              fontWeight:900,
                              fontSize:'1.3rem',
                              backgroundColor: '#0054d11f',
                              borderRadius:'7px',
                              color:'#0054d1',
                          }}
                    >Go to Dashboard</Link>
                </div>
            </div>


        </>
    );
}
export default NotFound