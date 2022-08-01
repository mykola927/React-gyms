import React from 'react';
import { Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import WaterDamageIcon from '@mui/icons-material/WaterDamage';
import PanToolIcon from '@mui/icons-material/PanTool';


const useStyles = makeStyles({
  root: {
    color: "white",
    backgroundColor: "#cc0000",
    fontSize: "20px",
    fontWeight: 700,
    width: "100%",
    padding: "10px 80px 0px 130px"
  },
  footerlogo: {
    padding: "0px 40px",
  },
  bannertitle: {
    fontSize: "50px",
    marginBottom: "20px"
  },
  bannerbar: {
    backgroundColor: "#ff6666",
    minWidth: "56px",
    minHeight: "200px"
  },
  bannercontent: {
    fontSize: "34px",
    fontWeight: 200,
    marginLeft: "20px"
  },
  tooltipicon: {
    backgroundColor: "white",
    color: "#006666",
    fontSize: "40px !important",
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
    borderRadius: "50%",
    '&:hover': {
      backgroundColor: '#ff1a53 !important',
      color: 'white',
    }
  },
  cardarea: {
    boxShadow: "0px -10px 30px 5px rgba(0, 0, 0, 0.3) !important",
    margin: "5px 10px",
    borderRadius: "20px !important",
  }
})
export default function Footer() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.root}>
      <Grid container spacing={2} className='flex flex-wrap'>
        <Grid item xs={4}
          className={classes.footerlogo}
        >
          <div>
            <h1 className={classes.bannertitle}>WTF Fitness Experience?</h1>
            <div className='flex'>
              <div className={classes.bannerbar}></div>
              <div className={classes.bannercontent}>@ your regular gym cost?</div>
            </div>
          </div>
        </Grid>
        <Grid item xs={8} className="flex justify-between flex-wrap items-end pb-6">
          <Card sx={{ minWidth: 160, backgroundColor: "rgb(203, 56, 56)", color: "white" }} className={classes.cardarea}>
            <CardActionArea>
              <div className='flex justify-center mt-4'>
                <ImportantDevicesIcon fontSize='large' />
              </div>
              <CardContent className='text-center'>
                <Typography variant="h6" component="div">
                  Moern
                </Typography>
                <Typography variant="h6">
                  Eqipment
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ minWidth: 160, backgroundColor: "rgb(203, 56, 56)", color: "white" }} className={classes.cardarea}>
            <CardActionArea>
              <div className='flex justify-center mt-4'>
                <ReduceCapacityIcon fontSize='large' />
              </div>
              <CardContent className='text-center'>
                <Typography variant="h6" component="div">
                  Skilled
                </Typography>
                <Typography variant="h6">
                  Trainer
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ minWidth: 160, backgroundColor: "rgb(203, 56, 56)", color: "white" }} className={classes.cardarea}>
            <CardActionArea>
              <div className='flex justify-center mt-4'>
                <WaterDamageIcon fontSize='large' />
              </div>
              <CardContent className='text-center'>
                <Typography variant="h6" component="div">
                  Top Class
                </Typography>
                <Typography variant="h6">
                  Ambiance
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ minWidth: 160, backgroundColor: "rgb(203, 56, 56)", color: "white" }} className={classes.cardarea}>
            <CardActionArea>
              <div className='flex justify-center mt-4'>
                <PanToolIcon fontSize='large' />
              </div>
              <CardContent className='text-center'>
                <Typography variant="h6" component="div">
                  Sanitized
                </Typography>
                <Typography variant="h6">
                  CYMS
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
