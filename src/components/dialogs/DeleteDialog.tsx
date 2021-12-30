import {Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button} from "@mui/material";
import React, {useEffect} from "react";


function DeleteDialog(props: {executeDeletion: any, open: boolean, setOpenDelete: any}) {
    useEffect(() => {
        props.setOpenDelete(props.open);
    }, [props])

    const handleAgree = () => {
        props.executeDeletion();
        props.setOpenDelete(false);
    };

    const handleClose = () => {
        props.setOpenDelete(false);
    };

    return (
        <Dialog
            open={props.open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
               Remove Rental
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    This rental will be removed, are you sure?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAgree} autoFocus>
                    Remove
                </Button>
            </DialogActions>
        </Dialog>
    )
}


export default DeleteDialog;






