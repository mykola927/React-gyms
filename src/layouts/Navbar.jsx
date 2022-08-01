
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { useScrollTrigger } from "@mui/material";

const useStyles = makeStyles({
  root: {
    position: "fixed !important",
    top: "0px",
    zIndex: 9999,
    color: "white",
    padding: "0px 80px",
    boxShadow: 'none !important',
    transition: '.9s'
  },
  menuitems: {
    // backgroundImage: "linear-gradient(to right, #990000 , #cc0000)",
    color: "#aaa",
    '&:hover': {
      color: "white"
    }
  },
  loginbtn: {
    backgroundImage: "linear-gradient(to right, #990000 , #cc0000)",
    color: "#aaa",
    '&:hover': {
      color: "white"
    }
  }
})

const pages = ['Fitness', 'Nutrition', 'Gyms', 'Become WTF Partner', 'About US'];

const Navbar = (props) => {

  function ChangeColorOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      style: { background: trigger ? "black" : "transparent" },
    });
  }
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <ChangeColorOnScroll {...props}>
      <AppBar position="static" className={classes.root}>
        <Toolbar className="flex justify-between">
          <img width="100" height="100" src="./assets/img/logo.png" alt='logo' />
          <div className='flex'>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: 1, color: '#aaa', display: 'block', fontSize: '16px' }}
                  className={classes.menuitems}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Button className={classes.loginbtn} sx={{ my: 2, fontSize: "16px" }}>Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </ChangeColorOnScroll>
  );
};
export default Navbar;
