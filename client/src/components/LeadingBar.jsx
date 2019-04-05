import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import LoginModal from './LoginModal.jsx';
import SignUpModal from './SignUpModal.jsx';

class LeadingBar extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      signUpModal: false
    }
    this.openSignInModal = this.openSignInModal.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
  }
  openSignInModal(){
    console.log('trying')
    this.setState({
      signUpModal: !this.state.signUpModal
    });
  }
  openLoginModal(){
    this.setState({
      loginModal: !this.state.loginModal
    });
  }

  render () {
    return (
      <div >
      <AppBar position="static" style={{backgroundColor:'white'}}>
        <Toolbar>
      <MenuList style={{display:'flex', flexDirection:'row'}}>
      <MenuItem disableGutters="true" className="menu_item" style={{marginRight:'15px'}} >
      <img style={{height: '40px', width: '155px', cursor:'pointer'}}
    onClick={() => window.location.href = '/'}
    src="https://i.ibb.co/1JqX469/main-logo2-1.png"/>
        </MenuItem >
      </MenuList>
      <div>
        <span className="menu_item" onClick={() => window.location.href = '/'} >Home</span>
        <span className="menu_item" onClick={() => window.location.href = '/search'} >Search Homes</span>
        <span className="menu_item"onClick={() => window.location.href = '/featured'}>Featured Listings</span>
        {/* <span className="menu_item">Notebook</span> */}
        {/* <span className="menu_item">About</span> */}
        <span className="menu_item"onClick={() => window.location.href = '/sellyourhome'}>Sell Your Home</span>
        <span className="menu_item"onClick={() => window.location.href = '/sellyourhome'}>Home Evaluation</span>
        </div>
          <div style={{position:'absolute', right:'5%'}}>
          <Button color="primary" onClick={this.openLoginModal}>Login</Button>
          <Button variant="outlined" color="secondary" onClick={this.openSignInModal}>Sign Up</Button>
          </div>
        </Toolbar>
      </AppBar>
      {this.state.loginModal ? <LoginModal/> : null}
      {this.state.signUpModal ? <SignUpModal/> : null}
    </div>
)
}
};

export default LeadingBar;