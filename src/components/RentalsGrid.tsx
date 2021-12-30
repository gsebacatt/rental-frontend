import React, {useContext} from 'react';
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import SearchForm from "./forms/SearchForm";
import Container from "@mui/material/Container";
import {CreateRentalDto} from "../dto/rental";
import {RentalsContext} from "./context/RentalsContext";
import {Chip} from "@mui/material";

interface rentalProps {
    searchWithFilters: any,
    deleteRental: any,
    selectRental: any,
}

export default function RentalsGrid(props: rentalProps) {

    const rentalsContext = useContext(RentalsContext);

    return (
        <>
            <Container sx={{py: 8}} maxWidth="md">
                <Grid container spacing={2} direction="row">
                    <Grid item xs={3} sm={3} md={3}>
                        <SearchForm search={props.searchWithFilters}/>
                    </Grid>

                    <Grid item xs={9} sm={9} md={9}>
                        <Grid container spacing={4}>
                            {rentalsContext?.rentals?.map((rental: CreateRentalDto, index: number) => (
                                <Grid item key={index} xs={12} sm={6} md={4}>
                                    <Card
                                        sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                                    >
                                        <CardContent sx={{flexGrow: 1}}>
                                            <Typography component={'div'}>
                                                City: {rental.city}
                                            </Typography>
                                            <Typography component={'div'}>
                                                Address: {rental.address}
                                            </Typography>
                                            <Typography component={'div'}>
                                                Price: {rental.price}
                                            </Typography>
                                            <Typography component={'div'}>
                                                Rooms: {rental.rooms}
                                            </Typography>
                                            <Typography component={'div'}>
                                                Extras:
                                            </Typography>
                                                {rental.extra?.map((ext, index) => {
                                                return <Chip color="primary" label={ext} key={index} />
                                            })}


                                        </CardContent>
                                        <CardActions>
                                            <Button size="small"
                                                    onClick={() => rentalsContext.selectRental(rental)}>View</Button>
                                            <Button size="small"
                                                    onClick={() => props.deleteRental(rental._id)}>Delete</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                            {rentalsContext?.rentals?.length === 0 && (
                                <Grid container justifyContent="center">
                                    <Typography>No matching rentals</Typography>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
