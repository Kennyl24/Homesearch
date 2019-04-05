import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {isMobile} from 'react-device-detect';

class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
    this.submitted = this.submitted.bind(this);
  }
  submitted(){
    axios.post('/Email', {
      email: this.state.email,
    })
    .then( (response) =>  {
      setTimeout(() => {
      }, 500);
    })
    .catch( (error) => {
      return ('There seems to have been an error');
    });
    this.setState({
      email:'',
    })
  }

  render() {
    return (
      <Paper zDepth={1} style={{height:'auto', verticalAlign:'middle', paddingBottom:'5%', backgroundColor:'#cccccc'}}>
    <div style={{display:'flex', flexDirection:'row'}}>
    <div style={{marginLeft:'10%', paddingTop:'4%', width:'40%'}}>
     <img style={{height: '40px', width: '155px', cursor:'pointer'}}
    onClick={() => window.location.href = '/'}
    src="https://i.ibb.co/1JqX469/main-logo2-1.png"/>
    <h3>Jerry & Susan Pujals | Coldwell Banker Brokers of the Valley</h3>
    <h3>1775 Lincoln Avenue</h3>
    <h3>Napa, CA 94558</h3>
    <h3>707-249-0518</h3>
    <h3>DRE# </h3>
    </div>
    <div style={{ marginLeft:'10%', paddingTop:'4%', width:'40%', textDecoration:'underline', color:'white'}}>
      MENU
      <h3 style={{cursor:'pointer'}}>Home</h3>
    <h3 style={{cursor:'pointer'}}>Featured Listings</h3>
    <h3 style={{cursor:'pointer'}}>Search</h3>
    <h3 style={{cursor:'pointer'}}>Home Evaluation</h3>
    <h3 style={{cursor:'pointer'}}>Sell your Home </h3>
    <h3 style={{cursor:'pointer'}}>About </h3>

      </div>
    </div>
      </Paper>
    );
  }
}

export default BottomNav;