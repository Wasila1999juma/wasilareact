import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Badge, Button, Stack } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import AppCard from './AppCard';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function NavAndSidebar() {
  const theme = useTheme();
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
      <Toolbar sx={{backgroundColor:'#ff6699'}}>
            {/* Mwanzo wa Toggle button ya kufungua drawer */}
            {
                auth && (
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleDrawerOpen}
                  >
                    <MenuIcon />
                  </IconButton>
                )
            }
             {/* Mwisho wa Toggle button ya kufungua drawer */}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Project Attendence
          </Typography>

          {/* Mwanzo wa Profile button Ikiwa user amesha login */}
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )
           /* Mwisho wa Profile button Ikiwa user amesha login */
          }
        </Toolbar>
      </AppBar>

       {/* Mwanzo wa Drawer*/}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem disablePadding>
              <ListItemButton onClick={()=>{
                  navigate("/dashboard/")
              }}>
                 {/* <ListItemIcon> 
                 <MailIcon />
                </ListItemIcon> */}
                {/* <ListItemText primary={'Cordinators'} />  */}
              </ListItemButton>
            </ListItem>
        <ListItem disablePadding>
              <ListItemButton onClick={()=>{
                  navigate("/dashboard/supervisor")
              }}>
                <ListItemIcon>
                <MailIcon />
                </ListItemIcon>
                <ListItemText primary={'Supervisors'} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={()=>{
                  navigate("/dashboard/projects")
              }}>
                <ListItemIcon>
                <MailIcon />
                </ListItemIcon>
                <ListItemText primary={'Projects'} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={()=>{
                  navigate("/attendence")
              }}>
                <ListItemIcon>
                <MailIcon />
                </ListItemIcon>
                <ListItemText primary={'Attendence'} />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding>
              <ListItemButton onClick={()=>{
                  navigate("/dashboard/students")
              }}>
                <ListItemIcon>
                <MailIcon />
                </ListItemIcon>
                <ListItemText primary={'Students'} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem  disablePadding>
              <ListItemButton onClick={()=>{
                localStorage.clear();
                navigate("/")
              }}>
                <ListItemIcon>
                   <MailIcon />
                </ListItemIcon>
                <ListItemText primary={'Logout'} />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
       {/* Mwisho wa Drawer */}

      <Main open={open}>
        <DrawerHeader />

       <AppCard>
       <Outlet/>
       </AppCard>
      </Main>
    </Box>
  );
}