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

class HomeEvaluation extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div>
       <LeadingBar/>
      <div style={{position:'relative', top:'00px', backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${homeimage})`, backgroundRepeat: 'no-repeat', imageRendering: '-webkit-optimize-contrast', backgroundSize:'cover', backgroundPosition: '50% 50%' ,height:'750px', width: '100%', marginBottom:'0px'}}>
   <div style={{position:'absolute', top:'160px', left:'80px'}}>
   <h1 style={{textAlign:'left', color:'#3e51b5'}}>
     How much is your home worth?
     </h1>
     <h2 style={{textAlign:'left', color:'#58595d', marginRight:'10%'}}>
     Thinking of selling or are you interested in knowing what someone else's home is worth? 
     </h2>
     <div className="search-box">
              <InputBase
              style={{width:'100%', marginLeft:'5px'}}
                placeholder="Enter your Address"
                
              />
              <Button variant="contained" color="primary" style={{position:'absolute', right:0, height:
              '50px'}}>
        Search
      </Button>
            </div>
    </div>
    </div>
    <BottomNav/>
    </div>
)
}
};

export default HomeEvaluation;