import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: '30%',
    minWidth: 300,
    marginRight:'3%',
    marginBottom: '2%',
  },
  media: {
    height: 250,
    linearGradient: '(rgba(255,255,255,0.5), rgba(255,255,255,0.5))',
  },
  small: {
    height: 20,
    width: 40
  }
};

function HomeSearchLayout (props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.listing.image}
          title="Contemplative Reptile"
        >
        <div>
        <span 
        style={{
          paddingTop:'2%',
          marginLeft:'2%',
          textAlign:'center',
          width:'45px',
          height:'30px',
          color:'white',
          backgroundColor:'green',
          textTransform:'uppercase'
        }}
        >
          {props.listing.status}
          </span>
        </div>
        <div style={{position:'absolute', top:'140px', left:'10px'}}>
        <h2>${props.listing.price}</h2>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
        <Typography  style={{color:'white', paddingBottom:0, fontWeight:'600'}}>
          {props.listing.address}  &nbsp; &nbsp;
        </Typography>
        <p>{props.listing.bed} Beds &nbsp; </p>
        <p>{props.listing.bath} Bath</p>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
          <div style={{alignItems:'left', marginLeft:'4%', marginTop:'1%'}}>
          <CardMedia
          className={classes.small}
          image='https://s-static.cinccdn.com/images/icons/mls/BAREIS.png'
          title="Contemplative Reptile"
        />
        </div>
        <h5 style={{ margin: 0, marginLeft:'5px', color:'white', fontWeight:'100', fontSize:'10px', textAlign:'none'}}>Listings provided by The Pujals Team, Codwell Bankers Brokers of the Valley</h5>
        </div>
        </div>
        </CardMedia>
      </CardActionArea>
    </Card>
  );
}

HomeSearchLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeSearchLayout);