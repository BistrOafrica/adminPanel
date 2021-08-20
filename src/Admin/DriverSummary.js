import React from 'react';


const DriverTag = () => (id) => {
    return(
        <div style={{width:'250px',height:'100px',backgroundColor:'#f5f5f5'}}className="markerOverlay">
            <span>Driver ID : {id}</span>  
        </div>
    )

}
export default DriverTag;