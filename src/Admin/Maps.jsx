import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Pins = () => <FontAwesomeIcon
      icon={faMapMarkerAlt}
      style={{color:'#4BB543',fontSize:'2.0rem'}}
      />;

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
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyCVgjHiypXzaU6zFPT2wToqFV4q5RCpq2U' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <Pins 
            lat={-1.2917532274184966}
            lng={36.82254641475028}
        />
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;