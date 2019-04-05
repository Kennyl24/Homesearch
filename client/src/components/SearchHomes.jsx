import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LeadingBar from './LeadingBar.jsx';
import homeimage from './homeimage.jpg';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import BottomNav from './BottomNav.jsx';
import MapContainer from './MapContainer.jsx';
import HomeSearchLayout from './HomeSearchLayout.jsx';


const listings = [
  {
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    bed: 2, 
    bath: 2, 
    price: '1,000,000',
    status:'active',
    address: '4107 Pinot Drive Napa, CA'
  },
  {
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    bed: 2, 
    bath: 2, 
    price: '1,000,000',
    status:'active',
    address: '4107 Pinot Drive Napa, CA'
  },
  {
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    bed: 2, 
    bath: 2, 
    price: '1,000,000',
    status:'active',
    address: '4107 Pinot Drive Napa, CA'
  },
  {
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    bed: 2, 
    bath: 2, 
    price: '1,000,000',
    status:'active',
    address: '4107 Pinot Drive Napa, CA'
  },
  {
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    bed: 2, 
    bath: 2, 
    price: '1,000,000',
    status:'active',
    address: '4107 Pinot Drive Napa, CA'
  },
  {
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    bed: 2, 
    bath: 2, 
    price: '1,000,000',
    status:'active',
    address: '4107 Pinot Drive Napa, CA'
  },
]
class SearchHomes extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div>
       <LeadingBar/>
       <div style={{height:'120px', backgroundColor:'#3f51b5' }}>
        <h1 style={{alignItems:'center', paddingTop:'20px'}}>Home Search</h1>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <div style={{display:'flex', flexDirection:'column', width:'50%'}}>
        <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
        <div className="searchbox">
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
            <div style={{position:'absolute', color:'grey', cursor:'pointer', left:'42%', marginTop:'12px'}}>
              FILTERS
            </div>
            </div>
            <div style={{display: 'flex', flexDirection:'row', height:'650px',overflow:'scroll', flexWrap:'wrap',maxWidth: '100%', justifyContent:'center', marginTop:'8.5%'}}>
            {listings.length > 0 ? listings.map((listing, key) => 
        <HomeSearchLayout listing={listing} key={key} />): null}
              </div>
            </div>
    {/* </div> */}
        <MapContainer/>
        </div>
        
    <BottomNav/>
    </div>
)
}
};

export default SearchHomes;