import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';
import '../App.css';

const AdminDashboard = () => {
    return (
        <Container className="container">
            <Typography variant="h4">Admin Dashboard</Typography>
            <Box className="dashboard-box">
                <Button component={Link} to="/manage-jobs" variant="contained" className="button-primary">Manage Jobs</Button>
                <Button component={Link} to="/user-applications" variant="contained" className="button-secondary">View User Applications</Button>
                <Button variant="outlined" className="button-secondary">Log Out</Button>
            </Box>
        </Container>
    );
};

export default AdminDashboard;
