import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, TextField, MenuItem } from '@mui/material';
import '../App.css';

const jobListings = [
    // Sample job listings
    { id: 1, title: 'Software Engineer', location: 'New York', type: 'Full-time', industry: 'Tech' },
    { id: 2, title: 'Data Scientist', location: 'San Francisco', type: 'Part-time', industry: 'Tech' },
    // Add more listings here
];

const BrowseJobs = () => {
    return (
        <Container className="container">
            <Typography variant="h4">Browse Jobs</Typography>
            <TextField label="Search" variant="outlined" fullWidth margin="normal" />
            <TextField label="Location" variant="outlined" fullWidth margin="normal" select>
                <MenuItem value="New York">New York</MenuItem>
                <MenuItem value="San Francisco">San Francisco</MenuItem>
                {/* Add more options here */}
            </TextField>
            <Grid container spacing={4}>
                {jobListings.map(job => (
                    <Grid item key={job.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{job.title}</Typography>
                                <Typography>{job.location}</Typography>
                                <Typography>{job.type}</Typography>
                                <Typography>{job.industry}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained">Apply</Button>
                                <Button size="small" variant="outlined">Save</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default BrowseJobs;
