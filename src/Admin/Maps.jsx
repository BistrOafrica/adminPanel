import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    
  static defaultProps = {
    center: {
      lat: -1.2917532274184966,
      lng: 36.82254641475028
    },
    zoom: 11,
    mapId: 'fef77ff2bbc70f2b'
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyCVgjHiypXzaU6zFPT2wToqFV4q5RCpq2U' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;