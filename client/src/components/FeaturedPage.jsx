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
import FeaturedPageListings from './FeaturedPageListings.jsx';

class FeaturedPage extends React.Component { 
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
        <h1 style={{alignItems:'center', paddingTop:'20px'}}>Featured Listings</h1>
      
      </div>
      <FeaturedPageListings/>
    <BottomNav/>
    </div>
)
}
};

export default FeaturedPage;