import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  root: {
    backgroundImage: "linear-gradient(to right, rgb(204, 0, 0, 0.9) , rgba(0, 0, 0, 0.9))",
    display: "flex",
    justifyContent: "space-around",
    padding: "70px",
    position: 'relative',
  },
  image: {
    height: "80vh",
    zIndex: 2,
  },
  strokeme1: {
    // backgroundImage: 'url(http://i.stack.imgur.com/08Y1e.jpg)',
    position: 'absolute',
    top: '50%',
    left: '38%',
    transform: 'translate(-50%, -50%)',
    fontFamily: "'Nunito', sans-serif",
    textAlign: 'center',
    zIndex: -1,
    // textShadow: '0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black',
  },
  backletter1: {
    fontWeight: 'bolder',
    margin: '0',
    fontSize: '240px',
    color: 'rgba(204, 0, 0)',
    whiteSpace: 'nowrap',
    textShadow: '-5px -5px 0 #000000, 5px -5px 0 #000000, -5px 5px 0 #000000, 5px 5px 0 #000000, -2px 0 0 #ffffff, 2px 0 0 #ffffff, 0 2px 0 #ffffff, 0 -2px 0 #ffffff'
  },
  strokeme2: {
    position: 'absolute',
    right: '10px',
    height: 'fit-content',
    bottom: '30px',
    zIndex: 3,
  },
  backletter2: {
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 'bolder',
    fontSize: '200px',
    color: 'white',
    whiteSpace: 'nowrap',
  }

})
const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div className={classes.strokeme1}>
        <p className={classes.backletter1}>
          Powered
        </p>
      </div>
      <img className={classes.image} src="./assets/img/running_girl.png" />
      <img className={classes.image} src="./assets/img/running_boy.png" />

      <div className={classes.strokeme2}>
        <div className={classes.backletter2}>
          GYM
        </div>
      </div>
    </Box>
  )
}

export default Banner;
