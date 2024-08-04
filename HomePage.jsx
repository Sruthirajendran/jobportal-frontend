import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import '../App.css'; // Ensure this imports your updated CSS

const HomePage = () => {
    return (
        <div className="home-page">
            <Container className="container">
                <div className="text-content">
                    <Typography 
                        variant="h2" 
                        className="typography-h2" 
                        align="center"
                        gutterBottom
                    >
                        Welcome to Job Portal
                    </Typography>
                    
                </div>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <img src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg" alt="Job Portal" className="sidebar-image" />
                <br /><br /><br /><Button 
                        component={Link} 
                        to="/signup" 
                        variant="outlined" 
                        className="button-secondary"
                    >
                        Register here
                    </Button><br /><br />
            </Container>
        </div>
    );
};

export default HomePage;
