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
  },
  small: {
    height:30,
    width:60
  }
};

function Featured (props) {
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
        <div style={{display:'flex', flexDirection:'row'}}>
        <p>{props.listing.bed} Beds &nbsp; </p>
        <p>{props.listing.bath} Bath</p>
        </div>
        </div>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.listing.address}
          </Typography>
          <div style={{alignItems:'center', marginLeft:'40%', marginTop:'5%'}}>
          <CardMedia
          className={classes.small}
          image='https://s-static.cinccdn.com/images/icons/mls/BAREIS.png'
          title="Contemplative Reptile"
        />
        </div>
        <h5 style={{textAlign:'center', color:'grey'}}>Listings provided by The Pujals Team, Coldwell Bankers Brokers of the Valley</h5>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Featured.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Featured);