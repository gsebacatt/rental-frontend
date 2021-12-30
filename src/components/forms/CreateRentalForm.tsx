import {
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    Grid,
    TextField,
    Button
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useFormik} from 'formik';
import * as yup from 'yup';
import ChipInput from "material-ui-chip-input";

interface FormProps {
    open: boolean,
    setOpenForm: any,
    setNewRental: any,
}

const validationSchema = yup.object({
    city: yup
        .string().required('City is required'),
    address: yup
        .string().required('Address is required'),
    price: yup.number().required('Price is required'),
    rooms: yup.number().required('Rooms is required'),
    extra: yup.array().of(yup.string()),
});


function CreateRentalForm(props: FormProps) {
    const [chips, setChips] = useState<string[]>();

    useEffect(() => {
        props.setOpenForm(props.open);
    }, [props])

    const handleClose = () => {
        formik.resetForm();
        props.setOpenForm(false)
    };

    function handleAddChip(items: string[]) {
        setChips(items);
    }

    function handleDeleteChip(chip: string, index: number) {
        let newChips = chips?.filter((chip, i) => {
                return index !== i
            }
        )
        setChips(newChips);
    }

    const formik = useFormik({
        initialValues: {
            city: "",
            address: "",
            price: "",
            rooms: "",
            extra: [],
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            props.setOpenForm(false);
            props.setNewRental({...values, extra: chips})
            formik.resetForm();
            setChips([]);
        },
    });

    return (
        <Dialog open={props.open} onClose={handleClose}>
            <form onSubmit={formik.handleSubmit}>
                <DialogTitle>New Rental</DialogTitle>
                <DialogContent>

                    <Grid container direction="row" spacing={1}>
                        <Grid item md={6}>
                            <Grid container spacing={1}>
                                <Grid item md={10}>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="city"
                                        label="City"
                                        name="city"
                                        type="string"
                                        fullWidth
                                        variant="standard"
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        error={formik.touched.city && Boolean(formik.errors.city)}
                                        helperText={formik.touched.city && formik.errors.city}
                                    />
                                </Grid>
                                <Grid item md={10}>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="address"
                                        label="Address"
                                        name="address"
                                        type="string"
                                        fullWidth
                                        variant="standard"
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        error={formik.touched.address && Boolean(formik.errors.address)}
                                        helperText={formik.touched.address && formik.errors.address}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <Grid container spacing={1}>
                                <Grid item md={10}>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="price"
                                        label="Price"
                                        name="price"
                                        type="number"
                                        fullWidth
                                        variant="standard"
                                        value={formik.values.price}
                                        onChange={formik.handleChange}
                                        error={formik.touched.price && Boolean(formik.errors.price)}
                                        helperText={formik.touched.price && formik.errors.price}
                                    />
                                </Grid>
                                <Grid item md={10}>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="rooms"
                                        name="rooms"
                                        label="Rooms"
                                        type="number"
                                        fullWidth
                                        variant="standard"
                                        value={formik.values.rooms}
                                        onChange={formik.handleChange}
                                        error={formik.touched.rooms && Boolean(formik.errors.rooms)}
                                        helperText={formik.touched.rooms && formik.errors.rooms}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={12}>
                            <ChipInput
                                label={"extras (Type enter)"}
                                id={"extra"}
                                value={chips}
                                onChange={(chip) => handleAddChip(chip)}
                                onDelete={(chip, index) => handleDeleteChip(chip, index)}
                                error={formik.touched.extra && Boolean(formik.errors.extra)}
                            />
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type={"submit"}>Create</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}


export default CreateRentalForm;
