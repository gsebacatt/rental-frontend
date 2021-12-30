import React from "react";
import {useFormik} from 'formik';
import * as yup from 'yup';
import {Box, Button, Divider, Grid, Slider, Stack, TextField, Typography} from "@mui/material";

interface searchProps {
    search: any,
}

const validationSchema = yup.object({
    city: yup
        .string(),
    address: yup
        .string(),
    priceMin: yup.number(),
    priceMax: yup.number(),
    rooms: yup.number(),
    extra: yup.array(),
});

function valuetext(value: number) {
    return `${value}`;
}

function SearchForm(props: searchProps) {
    const formik = useFormik({
        initialValues: {
            city: "",
            address: "",
            priceMin: 0,
            priceMax: 1000000,
            rooms: 0,
            extra: []
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            props.search(values);
        },
    });


    function handleReset() {
        formik.resetForm();
        props.search({})
    }

    return (
        <form onSubmit={formik.handleSubmit} onReset={handleReset}>
            <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem/>} m={2}>
                <TextField
                    id="city"
                    label="City"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                />
                <TextField
                    id="address"
                    label="Address"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                />
                <Typography gutterBottom>Price</Typography>
                <Grid container spacing={1}>
                    <Grid item md={6}>
                        <TextField
                            id="priceMin"
                            label="Min"
                            name="priceMin"
                            value={formik.values.priceMin}
                            onChange={formik.handleChange}
                            error={formik.touched.priceMin && Boolean(formik.errors.priceMin)}
                            helperText={formik.touched.priceMin && formik.errors.priceMin}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            id="priceMax"
                            label="Max"
                            name="priceMax"
                            value={formik.values.priceMax}
                            onChange={formik.handleChange}
                            error={formik.touched.priceMax && Boolean(formik.errors.priceMax)}
                            helperText={formik.touched.priceMax && formik.errors.priceMax}
                        />
                    </Grid>
                </Grid>

                <Box sx={{m: 3}}/>
                <Typography gutterBottom>Rooms</Typography>
                <Slider
                    aria-label="Rooms"
                    name="rooms"
                    id="rooms"
                    value={formik.values.rooms}
                    onChange={formik.handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={0}
                    max={10}
                />
            </Stack>
            <Grid container justifyContent="flex-end">
                <Button onClick={handleReset}>Reset</Button>
                <Button type={"submit"}>Search</Button>
            </Grid>
        </form>
    )
}


export default SearchForm;
