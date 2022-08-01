import React, { useState } from "react";
import Navbar from "./layouts/Navbar.jsx"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./index.css";
import "./App.css";
import Footer from "./layouts/Footer.jsx";
import GymPage from "./pages/gyms/index.jsx";
import FooterBanner from "./components/gyms/FooterBanner.jsx";

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const useStyles = makeStyles({
  dgcontent: {
    backgroundImage: 'url(./assets/img/chatboxbg.jpg)',
    fontSize: '30px',
    fontWeight: 700,
    color: '#000'
  }
})

function App() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <Navbar />
      <GymPage />
      <FooterBanner />
      <Footer />
      <div className="fab" onClick={handleClickOpen} >
        <WhatsAppIcon className="fab-icon" />
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Team WTF
        </BootstrapDialogTitle>
        <DialogContent dividers className={classes.dgcontent}>
          <div>
            <Typography gutterBottom>
              Hi there!
            </Typography>
            <Typography>
              How can we help you?
            </Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Start Chat
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default App;
