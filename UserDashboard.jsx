import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';
import '../App.css';

const UserDashboard = () => {
    return (
        <Container className="container">
            <Typography variant="h4">User Dashboard</Typography>
            <Box className="dashboard-box">
                <Button component={Link} to="/browse-jobs" variant="contained" className="button-primary">Browse Jobs</Button>
                <Button component={Link} to="/applied-jobs" variant="contained" className="button-secondary">View Applied Jobs</Button>
                <Button variant="outlined" className="button-secondary">Log Out</Button>
            </Box>
        </Container>
    );
};

export default UserDashboard;
