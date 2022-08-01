import React from 'react';
import { Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Tooltip from '@mui/material/Tooltip';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const useStyles = makeStyles({
  root: {
    color: "white",
    backgroundColor: "rgb(15, 0, 0)",
    fontSize: "20px",
    fontWeight: 700,
    width: "100%",
    padding: "80px 100px 40px"
  },
  btn: {
    display: "flex !important",
    backgroundColor: "#000",
    justifyContent: "left !important",
    fontWeight: "600 !important",
    color: "#bbb !important",
    fontSize: "16px !important",
    textAlign: "left",
    '&:hover': {
      backgroundColor: '#000000 !important',
      color: '#eee',
    }
  },
  muicon: {
    color: "#fff !important",
    marginRight: "10px",
    fontSize: "28px !important"
  },
  footerlogo: {
    textAlign: "center",
  },
  tooltip: {
    backgroundColor: "white",
    color: "#006666",
  },
  tooltipicon: {
    backgroundColor: "white",
    color: "#006666",
    fontSize: "40px !important",
    cursor: 'pointer',
    borderRadius: "50%",
    '&:hover': {
      backgroundColor: '#006666 !important',
      color: 'white',
    }
  },
  tooltipinsticon: {
    backgroundColor: "white",
    color: "#ff1a53",
    fontSize: "40px !important",
    cursor: 'pointer',
    borderRadius: "50%",
    '&:hover': {
      backgroundColor: '#ff1a53 !important',
      color: 'white',
    }
  }
})
export default function Footer() {
  const classes = useStyles();

  const quickLinks = [
    <Button
      key="About"
      onClick={() => {
        console.info("I'm a button.");
      }}
      className={classes.btn}
    >
      About
    </Button>,
    <Button
      key="FAQs"
      onClick={() => {
        console.info("I'm a button.");
      }}
      className={`${classes.btn} ${classes.hover}`}
    >
      FAQs
    </Button>,
    <Button
      key="Privacy Policy"
      onClick={() => {
        console.info("I'm a button.");
      }}
      className={`${classes.btn} ${classes.hover}`}
    >
      Privacy Policy
    </Button>,
    <Button
      key="Terms & Conditions"
      onClick={() => {
        console.info("I'm a button.");
      }}
      className={`${classes.btn} ${classes.hover}`}
    >
      Terms & Conditions
    </Button>,
    <Button
      key="Refund & Cancellation"
      onClick={() => {
        console.info("I'm a button.");
      }}
      className={`${classes.btn} ${classes.hover}`}
    >
      Refund & Cancellation
    </Button>
  ];

  const explore = [
    <Button
      key="About"
      onClick={() => {
        console.info("I'm a button.");
      }}
      className={`${classes.btn} ${classes.hover}`}
    >
      Arenas
    </Button>,
    <Button
      key="FAQs"
      onClick={() => {
        console.info("I'm a button.");
      }}
      className={`${classes.btn} ${classes.hover}`}
    >
      Studios
    </Button>,
    <Button
      key="Privacy Policy"
      onClick={() => {
        console.info("I'm a button.");
      }}
      className={`${classes.btn} ${classes.hover}`}
    >
      Nutrition
    </Button>
  ]

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}
          className={classes.footerlogo}
        >
          <div className='flex justify-center mb-8'>
            <img width="100" height="100" src="./assets/img/logo.png" alt='logo' />
          </div>
          <div className='flex justify-around my-16'>
            <Tooltip title="Instagram" placement="top" arrow>
              <InstagramIcon className={classes.tooltipinsticon} />
            </Tooltip>
            <Tooltip title="Facebook" placement="top" arrow>
              <FacebookRoundedIcon className={classes.tooltipicon} />
            </Tooltip>
            <Tooltip title="LinkedIn" placement="top" arrow>
              <LinkedInIcon className={classes.tooltipicon} />
            </Tooltip>
          </div>
        </Grid>
        <Grid item xs={3}>
          <h1 className='ml-3'>Quick Links</h1>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant=""
          >
            {quickLinks}
          </ButtonGroup>
        </Grid>
        <Grid item xs={3}>
          <h1 className='ml-3'>Explore</h1>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant=""
          >
            {explore}
          </ButtonGroup>

        </Grid>
        <Grid item xs={3}>
          <h1 className='ml-3'>Contact</h1>
          <Button variant=""
            startIcon={<LocationOnIcon className={classes.muicon} />}
            className={`${classes.btn} ${classes.hover}`}
          >
            Ro:S 1502, Amrapali Silicon city, Sector 76, Noida, Uttar Pradesh, India
          </Button>
          <Button variant=""
            startIcon={<LocationOnIcon className={classes.muicon} />}
            className={`${classes.btn} ${classes.hover}`}
          >
            Ho:C-86 B, Ground Floor, Sector 8, Noida, Uttar Pradesh, India
          </Button>
          <Button variant=""
            startIcon={<LocalPhoneIcon className={classes.muicon} />}
            className={`${classes.btn} ${classes.hover}`}
          >
            +919090639005
          </Button>
          <Button variant=""
            startIcon={<EmailIcon className={classes.muicon} />}
            className={`${classes.btn} ${classes.hover}`}
          >
            support@wtfup.com
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
