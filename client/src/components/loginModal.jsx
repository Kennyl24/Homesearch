import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';


class loginModal extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.submitIt = this.submitIt.bind(this);
  }
  submitIt(){
    axios.post('/Vlog', {
      email: this.state.email,
    })
    .then( (response) =>  {
      setTimeout(() => {
      }, 500);
    })
    .catch( (error) => {
      return ('There seems to have been an error');
    });
  }
  render () {
    return (
        <div className="comingsoon-modal">
        <h2 style={{marginTop:'7%', color:'black', textAlign:'left', marginLeft:'2%', textShadow:'none'}}>Log In</h2>
        <div style={{display:'flex', flexDirection: 'column',
    alignItems: 'center'}}>
        <div style={{width:'90%', marginLeft:'5%', marginRight:'5%'}}>
        <TextField
          style={{minWidth: '100%', backgroundColor:'white'}}
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          required={true}
          value={this.state.email}
          onChange={(event) => {
            this.setState({
              email: event.target.value
            });
          }}
        />
            <TextField
          style={{width: '100%', backgroundColor:'white'}}
          id="outlined-email-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="none"
          margin="normal"
          required={true}
          variant="outlined"
          value={this.state.password}
          onChange={(event) => {
            this.setState({
              password: event.target.value
            });
          }}
        />
        </div>
        <div style={{width:'90%', marginLeft:'5%', marginRight:'5%'}}>
        <Button onClick={this.submitIt}variant="contained" style={{marginTop:'10px', marginBottom: '2%', minWidth: '100%', height: '40px', backgroundColor:"#242f6e", color: 'white'}}>
          Log In
      </Button>
      </div>
      
      </div>
      <div style={{height:'50px', backgroundColor:'white', borderTop: '1px solid black'}}>
          <h6>Forgot your Password?</h6>
          <h6>No Account? Sign Up!</h6>
        </div>
        </div>
)
}
};

export default loginModal;