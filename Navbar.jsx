import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import '../App.css';

const Navbar = () => {
    return (
        <AppBar position="static" className="navbar">
            <Toolbar>
                <Typography variant="h6" className="navbar-title">
                    Job Portal
                </Typography>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
                
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
