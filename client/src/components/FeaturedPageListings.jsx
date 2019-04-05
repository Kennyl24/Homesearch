import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Featured from './Featured.jsx';

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
]
class FeaturedPageListings extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div style={{marginTop:'2.5%', marginLeft:'2%', marginRight:'2%'}}>
      <div style={{display: 'flex', flexDirection:'row', flexWrap:'wrap',maxWidth: '100%', justifyContent:'center', marginTop:'2.5%'}}>
        {listings.length > 0 ? listings.map((listing, key) => 
        <Featured listing={listing} key={key} />): null}
      </div>
      </div>
)
}
};

export default FeaturedPageListings;