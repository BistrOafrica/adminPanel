import React, { useEffect, useState }from 'react';



function Drivers() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [drivers, setdrivers] = useState([]);
  
    
    useEffect(() => {
      fetch("https://api.myride.ke/get_driver_locations/")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);    
            setdrivers(result);
          },
          
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div style={{marginLeft:'350px',marginTop:'130px'}}>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

        
        return(
          drivers
        )   
      
        
      
  }
}


export default Drivers;