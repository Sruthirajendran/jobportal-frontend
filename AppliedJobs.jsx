import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import '../App.css';

const appliedJobs = [
    // Sample applied jobs
    { id: 1, title: 'Software Engineer', location: 'New York', type: 'Full-time', industry: 'Tech', status: 'Applied' },
    { id: 2, title: 'Data Scientist', location: 'San Francisco', type: 'Part-time', industry: 'Tech', status: 'Under Review' },
    // Add more applied jobs here
];

const AppliedJobs = () => {
    return (
        <Container className="container">
            <Typography variant="h4">Applied Jobs</Typography>
            <Grid container spacing={4}>
                {appliedJobs.map(job => (
                    <Grid item key={job.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{job.title}</Typography>
                                <Typography>{job.location}</Typography>
                                <Typography>{job.type}</Typography>
                                <Typography>{job.industry}</Typography>
                                <Typography>Status: {job.status}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default AppliedJobs;
