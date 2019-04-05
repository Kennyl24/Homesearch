import React from 'react';
import config from '../../../config.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Button from '@material-ui/core/Button';

class MapContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showInfoWindow: false,
      activeMarker: {},
      lat: null,
      lng: null,
    }
    this.onMarkerClicked = this.onMarkerClicked.bind(this);
    this.id = 0;
    this.testLocation = this.testLocation.bind(this);
    this.testError = this.testError.bind(this);
  }
  componentDidMount() {
    const options = {
      enableHighAccuracy: false,
      timeout: 8000,
      maximumAge: 0,
    };
    // this.id = navigator.geolocation.getCurrentPosition(this.testLocation, this.testError , options);
  }
  testLocation(pos){
    const crd = pos.coords;
    this.setState({
      lat: crd.latitude,
      lng: crd.longitude,
    })
    const thisLat = crd.latitude;
    const thisLon = crd.longitude;
    console.log(crd)
  }
  testError(){
    console.log('goodbye')
  }

  onMarkerClicked(props, marker, e){
    this.setState({
      showInfoWindow: true,
      activeMarker: marker,
    });
  }
  render() {
    return (
      <div style={{height:'92vh', maxWidth:'50%'}}>
       <Map
       style={{
        width: '50%',
        height: '92vh',
        position: 'none'
       }}
          google={this.props.google}
          initialCenter={{
            lat: 38.335045,
            lng: -122.321649
          }}
          zoom={15}
          // onClick={this.onMapClicked}
       >
       <Marker
    title={'Benchmark Mortgage Napa Valley'}
    name={'Benchmark Mortgage Napa Valley'}
    onClick={this.onMarkerClicked}
    // onMouseover={this.onMarkerClicked}
    position={{lat: 38.335045, lng:-122.321649}} />
    <InfoWindow
    onClick={this.onMarkerClicked}
    visible={this.state.showInfoWindow}
      marker={this.state.activeMarker}>
            <div style={{textAlign:'center'}}>
            <h1 style={{fontSize:'22px'}}>
              Benchmark Mortgage Napa Valley
             </h1> 
             <Button variant="outlined" style={{marginTop:'.5%', marginBottom: '2%',width: '250px', height: '30px', color: 'black'}}>
             <a href="https://www.google.com/maps/dir/4123+Solano+Ave,+Napa,+CA+94558/''/@38.3344478,-122.3566659,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x808500d2af41b48d:0x2760ab5bef29d629!2m2!1d-122.3216465!2d38.334453!1m5!1m1!1s0x808500d2af41b48d:0x2760ab5bef29d629!2m2!1d-122.3216465!2d38.334453" target="_blank" 
             style={{color: 'black'}}
             >Directions</a>
      </Button>
              <br/>
              4123 Solano Avenue
              <br/>
              Napa, Ca 94558
              <br/>
              707-224-5898
            </div>
    </InfoWindow>
    {/* <Marker 
        name={'Current location'} 
        position={{lat: `${this.state.lat}`, lng: `${this.state.lng}`}}/> */}
    </Map>
    </div>
  );
}
};
export default GoogleApiWrapper({
  apiKey: config.GOOGLE_MAPS_API_KEY,
})(MapContainer);
