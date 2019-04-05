import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class QuickSearches extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div style={{marginLeft:'10%', marginTop:'2.5%', marginBottom:'30px'}}>
        <h2 style={{color:'black', textAlign:'left'}}>
        Quick Searches
        </h2>
        <ul style={{display:'flex', flexDirection:'row', flexWrap:'wrap', marginRight:'10%'}}>
          <li>Homes for Sale in Napa</li>
          <li> Homes for Sale in Napa Valley</li>
          <li> Homes for Sale in American Canyon</li>
          <li> Homes for Sale in St. Helena</li>
          <li> Homes for Sale in Calistoga</li>
          <li> Homes for Sale in Fairfield</li>
          <li> Homes for Sale in Sonoma</li>
          <li> Homes for Sale in Benicia</li>
          </ul>
    </div>
)
}
};

export default QuickSearches;