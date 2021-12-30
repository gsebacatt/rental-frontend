import {Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Chip} from "@mui/material";
import React, {useContext} from "react";
import {RentalsContext} from "../context/RentalsContext";


function ViewRentalDialog(props: { open: boolean, setOpenView: any }) {
    const rentalContext = useContext(RentalsContext);

    const handleClose = () => {
        props.setOpenView(false);
    };

    return (
        <Dialog
            open={props.open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Rental's Detail
            </DialogTitle>
            <DialogContent>
                <Typography component={'div'}>
                    City: {rentalContext.selectedRental?.city}
                </Typography>
                <Typography component={'div'}>
                    Address: {rentalContext.selectedRental?.address}
                </Typography>
                <Typography component={'div'}>
                    Price: {rentalContext.selectedRental?.price}
                </Typography>
                <Typography component={'div'}>
                    Rooms: {rentalContext.selectedRental?.rooms}
                </Typography>
                <Typography component={'div'}>
                    Extra:
                </Typography>
                {rentalContext.selectedRental?.extra?.map((ext: string, index: number) => {
                    return <Chip color="primary" label={ext} key={index} />
                })}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}


export default ViewRentalDialog;






