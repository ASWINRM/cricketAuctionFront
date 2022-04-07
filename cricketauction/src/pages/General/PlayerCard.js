import React from 'react'
import { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { createTheme } from '@material-ui/core/styles';
import { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@mui/material/Button';

 const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 490,
    maxHeight: 490,

  },
  media: {
    height: 100,
    width: '100%',
    paddingTop: '56.25%', // 16:9
  },

  brandlogo: {
    height: '100%',
    width: '100%',
    borderRadius: "50%"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },

  avatar: {
    backgroundColor: red[500],
  },

}));


const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 15,
  },
}))(Tooltip);
function PlayerCard({player}) {

   const theme = createTheme({
    palette: {
      secondary: {
        main: "#d10f0a"
      },
      primary: {
        main: "#A9A9A9",
      },
    }
   });
    
    const classes = useStyles()
    return (
    <Card className={classes.root}>

      <CardHeader
        title={player.Firstname+" "+player.Lastname}
        subheader={player.carrerbest.substring(0,15)}
      
      />
      <div className="cardmedia">
        <Link to={`/player/${player._id}`} style={{ textDecoration: 'none' }}>
          <CardMedia
            className={classes.media}
            image={player.image}
            title={player.Firstname+" "+player.Lastname}
          />
        </Link>
      </div>

      <CardContent>
        <Link to={`/player/${player._id}`} style={{ textDecoration: 'none' }}>
          <Typography variant="body2" color="textSecondary" component="span">
            
            <div className="Rupee">
              <i className="fas fa-rupee-sign">{player.Basicprice}</i>
            </div>
          </Typography>
        </Link>
      </CardContent>

            <CardContent>
                <Button variant="contained" disabled={player.sold}>
                      {player.sold?"SOLD":"AVAILABLE"}
                 </Button>
         </CardContent>
        
      
      

    
    </Card>
  );
}

export default PlayerCard;