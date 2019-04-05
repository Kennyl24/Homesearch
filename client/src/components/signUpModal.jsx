import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';


class signUpModal extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
      <div className="modal-background">
        <div className="comingsoon-modal">
        <h2 className="homepage-header"style={{marginTop:'7%'}}>Login</h2>
        <p className="blog-text" style={{textAlign:'center'}}>Our vlog is close to launching<br/>
        Be the first to know, subscribe below!
        </p>
        <div style={{display:'flex', flexDirection: 'column',
    alignItems: 'center'}}>
        <div>
        <TextField
          style={{width: '100%', height: '50px'}}
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          value={this.state.email}
          onChange={(event) => {
            this.setState({
              email: event.target.value
            });
          }}
        />
        </div>
        <div>
        <Button onClick={this.submitIt}variant="contained" style={{marginTop:'.5%', marginBottom: '2%',width: '100%', height: '50px', backgroundColor:"#242f6e", color: 'white'}}>
          Notify Me
      </Button>
      </div>
      </div>
        </div>
        </div>
)
}
};

export default signUpModal;