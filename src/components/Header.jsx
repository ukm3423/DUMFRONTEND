import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <AppBar 
      position="sticky" 
      sx={{
        background: '#1E3A8A', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow for AppBar
      }}
    >
      <Toolbar className="flex justify-between items-center px-4 py-2">
        {/* Logo Section */}
        <Box className="flex items-center">
          <Typography variant="h6" className="font-bold text-white text-2xl">
            Umeedey
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Box className="hidden md:flex space-x-8">
          <NavLink to="/" exact className="text-white hover:text-teal-300 transition-all duration-300" activeClassName="text-teal-300">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-teal-300 transition-all duration-300" activeClassName="text-teal-300">
            About
          </NavLink>
          <NavLink to="/courses" className="text-white hover:text-teal-300 transition-all duration-300" activeClassName="text-teal-300">
            Courses
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-teal-300 transition-all duration-300" activeClassName="text-teal-300">
            Contact
          </NavLink>
        </Box>

        {/* Call to Action Button */}
        <Box className="hidden md:block">
          <NavLink to="/register">
            <button
              className="rounded-full px-6 py-2 font-semibold shadow-lg hover:bg-teal-500 transition-all duration-300"
              style={{ backgroundColor: '#2D9CDB', color: '#fff', border: 'none' }}
            >
              Register Now
            </button>
          </NavLink>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          className="md:hidden"
          sx={{ fontSize: '1.5rem' }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            background: '#1E3A8A',
            color: '#fff',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', // Soft shadow for Drawer
          },
        }}
      >
        <List>
          <ListItem button onClick={closeDrawer}>
            <NavLink to="/" className="w-full text-white hover:text-teal-300" activeClassName="text-teal-300">
              Home
            </NavLink>
          </ListItem>
          <ListItem button onClick={closeDrawer}>
            <NavLink to="/about" className="w-full text-white hover:text-teal-300" activeClassName="text-teal-300">
              About
            </NavLink>
          </ListItem>
          <ListItem button onClick={closeDrawer}>
            <NavLink to="/courses" className="w-full text-white hover:text-teal-300" activeClassName="text-teal-300">
              Courses
            </NavLink>
          </ListItem>
          <ListItem button onClick={closeDrawer}>
            <NavLink to="/contact" className="w-full text-white hover:text-teal-300" activeClassName="text-teal-300">
              Contact
            </NavLink>
          </ListItem>
          <ListItem button onClick={closeDrawer}>
            <NavLink to="/register" className="w-full">
              <button
                className="w-full rounded-full py-2 font-semibold shadow-lg hover:bg-teal-500 transition-all duration-300"
                style={{ backgroundColor: '#2D9CDB', color: '#fff', border: 'none' }}
              >
                Register Now
              </button>
            </NavLink>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
