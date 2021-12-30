import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import HouseIcon from "@mui/icons-material/House";
import ApartmentIcon from "@mui/icons-material/Apartment";
import {Button, Typography, AppBar} from "@mui/material";

interface barProps {
    setOpenForm: any,
}

export default function AppBarHeader(Props: barProps) {
    return (
        <AppBar position="static">
            <Toolbar>
                <HouseIcon/>
                <ApartmentIcon/>
                <Typography variant="h6" component="span" sx={{flexGrow: 1, marginLeft: '20px'}}>
                    Rentals
                </Typography>
                <Button color="inherit" onClick={Props.setOpenForm}>New Rental</Button>
            </Toolbar>
        </AppBar>
    )
}
