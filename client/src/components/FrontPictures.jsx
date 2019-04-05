import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import backgroundPhoto from './backgroundPhoto.jpg';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

class FrontPictures extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }

  render () {
    return (
      <div style={{position:'relative', top:'00px', backgroundImage: `url(${backgroundPhoto})`, backgroundRepeat: 'no-repeat', imageRendering: '-webkit-optimize-contrast', backgroundSize:'cover', backgroundPosition: '50% 50%' ,height:'750px', width: '100%', marginBottom:'0px'}}>
   <div style={{paddingTop:'15%'}}>
   <h2> Jerry & Susan Pujals | Coldwell Banker Brokers of the Valley</h2>
     <h1>Find Napa Valley Homes For Sale</h1>
     <h2>Your Move. Our Promise.</h2>
     <div className="search_box">
              <div style={{marginRight:'5px', marginLeft:'4px'}}>
                <SearchIcon />
              </div>
              <InputBase
              style={{width:'100%'}}
                placeholder="Search by city, zip code, or county"
                
              />
              <Button variant="contained" color="primary" style={{position:'absolute', right:0, height:
              '50px'}}>
        Search
      </Button>
            </div>
            <h2 onClick={() => window.location.href = '/sellyourhome'} style={{textDecoration:'underline', cursor:'pointer'}}>I want to Sell My home.</h2>
     </div>
   
   </div>
)
}
};

export default FrontPictures;