import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardActions, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import '../App.css';

const initialJobs = [
    // Sample job listings
    { id: 1, title: 'Software Engineer', description: 'Develop software solutions', requirements: 'Bachelor\'s degree in CS', location: 'New York', salary: '$100k', type: 'Full-time' },
    { id: 2, title: 'Data Scientist', description: 'Analyze data trends', requirements: 'Bachelor\'s degree in DS', location: 'San Francisco', salary: '$120k', type: 'Part-time' },
    // Add more listings here
];

const ManageJobs = () => {
    const [jobs, setJobs] = useState(initialJobs);
    const [open, setOpen] = useState(false);
    const [currentJob, setCurrentJob] = useState(null);

    const handleOpen = (job) => {
        setCurrentJob(job);
        setOpen(true);
    };

    const handleClose = () => {
        setCurrentJob(null);
        setOpen(false);
    };

    const handleDelete = (id) => {
        setJobs(jobs.filter(job => job.id !== id));
    };

    return (
        <Container className="container">
            <Typography variant="h4">Manage Jobs</Typography>
            <Button variant="contained" onClick={() => handleOpen(null)}>Add Job</Button>
            <Grid container spacing={4}>
                {jobs.map(job => (
                    <Grid item key={job.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{job.title}</Typography>
                                <Typography>{job.description}</Typography>
                                <Typography>{job.requirements}</Typography>
                                <Typography>{job.location}</Typography>
                                <Typography>{job.salary}</Typography>
                                <Typography>{job.type}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" onClick={() => handleOpen(job)}>Edit</Button>
                                <Button size="small" variant="outlined" onClick={() => handleDelete(job.id)}>Delete</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{currentJob ? 'Edit Job' : 'Add Job'}</DialogTitle>
                <DialogContent>
                    <TextField margin="dense" label="Job Title" fullWidth />
                    <TextField margin="dense" label="Description" fullWidth />
                    <TextField margin="dense" label="Requirements" fullWidth />
                    <TextField margin="dense" label="Location" fullWidth />
                    <TextField margin="dense" label="Salary" fullWidth />
                    <TextField margin="dense" label="Job Type" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="primary">Save</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default ManageJobs;
