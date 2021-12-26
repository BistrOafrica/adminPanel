import React, { Component} from 'react';
import GoogleMapReact from 'google-map-react';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DummyData } from './MapDummyData';
import { Overlay } from './Overlay';
import city from './CreateCity';
import { Link } from 'react-router-dom';
const Pins = () => <FontAwesomeIcon
      className='animate__animated animate__bounceIn'
      icon={faMapPin}
      style={{color:'#30a800',fontSize:'1.8rem', }}
      />;

const Nairobi= new city('Nairobi','-1.2917532274184966','36.82254641475028','300','65','23','10','34','548932');

let NairobiCity=Nairobi.getCityDetails();
console.log(NairobiCity.ongoing);
      
class Map extends Component {
  
    
  static defaultProps = {
    center: {
      lat: -1.2917532274184966,
      lng: 36.82254641475028
    },
    zoom: 11,
    mapId: 'fef77ff2bbc70f2b',
  };


  render() {
    return (
      <div style={{ height: '100vh', width: '100vw' }}>
        <Overlay />
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyCVgjHiypXzaU6zFPT2wToqFV4q5RCpq2U' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        
        
        {DummyData.map((driver, index)=>(
          
          <Link 
          key={index} 
          to={'/LiveMap/?driver_id='+ driver.idriverid}
          lat={driver.vlatitude}
          lng={driver.vlongitude}
          >
            <Pins/>
          </Link>
        ))}
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;