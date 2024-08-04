import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';
import '../App.css';

const JobForm = ({ job, onSave, onCancel }) => {
    const formik = useFormik({
        initialValues: {
            title: job?.title || '',
            description: job?.description || '',
            requirements: job?.requirements || '',
            location: job?.location || '',
            salary: job?.salary || '',
            type: job?.type || '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
            requirements: Yup.string().required('Required'),
            location: Yup.string().required('Required'),
            salary: Yup.string().required('Required'),
            type: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            onSave(values);
        },
    });

    return (
        <Container className="container">
            <Typography variant="h5">{job ? 'Edit Job' : 'Add Job'}</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    id="title"
                    name="title"
                    label="Job Title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="description"
                    name="description"
                    label="Description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="requirements"
                    name="requirements"
                    label="Requirements"
                    value={formik.values.requirements}
                    onChange={formik.handleChange}
                    error={formik.touched.requirements && Boolean(formik.errors.requirements)}
                    helperText={formik.touched.requirements && formik.errors.requirements}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="location"
                    name="location"
                    label="Location"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    error={formik.touched.location && Boolean(formik.errors.location)}
                    helperText={formik.touched.location && formik.errors.location}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="salary"
                    name="salary"
                    label="Salary"
                    value={formik.values.salary}
                    onChange={formik.handleChange}
                    error={formik.touched.salary && Boolean(formik.errors.salary)}
                    helperText={formik.touched.salary && formik.errors.salary}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="type"
                    name="type"
                    label="Job Type"
                    value={formik.values.type}
                    onChange={formik.handleChange}
                    error={formik.touched.type && Boolean(formik.errors.type)}
                    helperText={formik.touched.type && formik.errors.type}
                />
                <Button color="primary" variant="contained" type="submit" className="form-button">
                    Save
                </Button>
                <Button color="secondary" variant="outlined" onClick={onCancel} className="form-button">
                    Cancel
                </Button>
            </form>
        </Container>
    );
};

export default JobForm;
