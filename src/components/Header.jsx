import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(135deg,rgb(105, 70, 229), #3B82F6)', boxShadow: 'none' }}>
      <Toolbar className="flex justify-between items-center px-2 py-1">{/* Reduced padding */}
        {/* Logo Section */}
        <Box className="flex items-center">
          <Typography variant="h6" className="font-bold text-white text-xl"> {/* Smaller font size */}
            Umeedey
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Box className="hidden md:flex space-x-6"> {/* Reduced space between items */}
          <NavLink to="/" exact className="text-white hover:text-yellow-400 transition-all duration-300" activeClassName="text-yellow-400">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-yellow-400 transition-all duration-300" activeClassName="text-yellow-400">
            About
          </NavLink>
          <NavLink to="/courses" className="text-white hover:text-yellow-400 transition-all duration-300" activeClassName="text-yellow-400">
            Courses
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-yellow-400 transition-all duration-300" activeClassName="text-yellow-400">
            Contact
          </NavLink>
        </Box>

        {/* Call to Action Button */}
        <Box className="hidden md:block">
          <NavLink to="/register">
            <button
              className="rounded-full px-6 py-2 font-semibold shadow-lg hover:bg-green-700 transition-all duration-300"
              style={{ backgroundColor: '#4CAF50', color: '#fff', border: 'none' }}
            >
              Register Now
            </button>
          </NavLink>
        </Box>

        {/* Mobile Menu Icon - Visible only on mobile (md:hidden) */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          className="md:hidden"
          sx={{ fontSize: '1.5rem' }} // Smaller icon
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
            background: '#3B82F6',
            color: '#fff',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        <List>
          <ListItem button onClick={closeDrawer}>
            <NavLink to="/" className="w-full text-white hover:text-yellow-400" activeClassName="text-yellow-400">
              Home
            </NavLink>
          </ListItem>
          <ListItem button onClick={closeDrawer}>
            <NavLink to="/about" className="w-full text-white hover:text-yellow-400" activeClassName="text-yellow-400">
              About
            </NavLink>
          </ListItem>
          <ListItem button onClick={closeDrawer}>
            <NavLink to="/courses" className="w-full text-white hover:text-yellow-400" activeClassName="text-yellow-400">
              Courses
            </NavLink>
          </ListItem>
          <ListItem button onClick={closeDrawer}>
            <NavLink to="/contact" className="w-full text-white hover:text-yellow-400" activeClassName="text-yellow-400">
              Contact
            </NavLink>
          </ListItem>
          <ListItem button onClick={closeDrawer}>
            <NavLink to="/get-started" className="w-full">
              <button
                className="w-full rounded-full py-2 font-semibold shadow-lg hover:bg-green-700 transition-all duration-300"
                style={{ backgroundColor: '#4CAF50', color: '#fff', border: 'none' }}
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
