import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';
import '../App.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Dummy authentication logic for demonstration
        if (email === 'admin@example.com' && password === 'admin') {
            navigate('/admin-dashboard');
        } else if (email === 'user@example.com' && password === 'user') {
            navigate('/user-dashboard');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <Container className="container">
            <Typography variant="h4">Login</Typography>
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
            <Button variant="contained" color="primary" onClick={handleLogin}>
                Login
            </Button>
        </Container>
    );
};

export default LoginPage;
