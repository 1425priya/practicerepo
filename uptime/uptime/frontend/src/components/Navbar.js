import React from 'react'
import './navbar.css'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

import Avatar from '@mui/material/Avatar';

import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import { Stack} from '@mui/material';
import{Drawer}  from '@mui/material';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';





 

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  }
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [loading, setLoading] = useState(false);

  const [progress, setProgress] = useState(0);
  
  const handleClickpro = () => {
    setLoading(true);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setLoading(false);
          clearInterval(timer);
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);
  };
  





return (
    <div className="navbar">
       {loading && <LinearProgress variant="determinate" value={progress} sx={{height:'2px'}} color="error"/>}
      <AppBar position='static'sx={{backgroundColor:'black'}}>
        
        <Toolbar>
        <div className="text">
            <Typography  variant="h4"
            noWrap
            sx={{
              mr: 2,
              textDecoration:"bold",
              display: { xs:'marginTop{{20px}}' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'white',

            }}
          >
            .UpTime

            </Typography>
            <div className="menu">
        <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          </div>
            </div>
            <div className="links">
            <Stack direction='row' spacing={2} sx={{ display:'flex', gap:'50px'}}>
               <Link to='/home'><Button sx={{color:'white', '&:hover':{color:'#3bd671'} }} onClick={handleClickpro}>Mointoring</Button>
               
               </Link>
                <Button sx={{color:'#3bd671'}}>Integrations</Button>
                <Button sx={{color:'white', '&:hover':{color:'#3bd671'} }}>Status Page</Button>
                <Button sx={{color:'white', '&:hover':{color:'#3bd671'} }}>Pricing</Button>
            </Stack>
            
            <div className="login-reg">
                <Button sx={{color:'white', '&:hover':{color:'#3bd671'} }}>Login</Button>
                <Link to='/'>Register for free</Link>
            </div>
            </div>
            <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}>
        
          
            <div className="login-reg">
                <Button sx={{color:'white', '&:hover':{color:'#3bd671'} }}>Login</Button>
                <Link to="/">Register for free</Link>
            </div>
            
      
      </Drawer>
      <span className="account-login">
      <Tooltip title="Account settings" >
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      </span> 
        </Toolbar>
        
      </AppBar>
   
      
    </div>
  )
}
