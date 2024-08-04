import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';
import '../App.css';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        // Dummy signup logic for demonstration
        if (email && password) {
            // Navigate to login page after successful signup
            navigate('/login');
        } else {
            setError('Please fill in all fields');
        }
    };

    return (
        <Container className="container">
            <Typography variant="h4">Sign Up</Typography>
            <TextField
                fullWidth
                margin="normal"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button variant="contained" color="primary" onClick={handleSignup}>
                Sign Up
            </Button>
        </Container>
    );
};

export default SignupPage;
