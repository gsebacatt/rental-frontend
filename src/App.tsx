import React, {useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import {RentalService} from "./services/rental.service";
import {CreateRentalDto} from "./dto/rental";
import CreateRentalForm from "./components/forms/CreateRentalForm";
import DeleteDialog from "./components/dialogs/DeleteDialog";
import AppBarHeader from "./components/Appbar";
import RentalsGrid from "./components/RentalsGrid";
import {RentalsContext} from "./components/context/RentalsContext";
import ViewRentalDialog from "./components/dialogs/ViewRentalDialog";

function App() {
    const [rentals, setRentals] = useState<CreateRentalDto[] | undefined>()
    const [openForm, setOpenForm] = useState<boolean>(false);
    const [openDelete, setOpenDelete] = useState<boolean>(false);
    const [openView, setOpenView] = useState<boolean>(false);

    const [deleteId, setDeleteId] = useState<string>("");
    const [selectedRental, setSelectedRental] = useState<CreateRentalDto | undefined>();

    const [newRental, setNewRental] = useState<any>();

    useEffect(() => {
        RentalService.getRentals().then(data => {
                setRentals(data);
        })
    }, [])

    useEffect(() => {
        newRental && RentalService.createRental(newRental).then(response => {
            RentalService.getRentals().then(data => {
                setRentals(data);
            })
        });
    }, [newRental])

    function deleteRental(id: string) {
        setDeleteId(id)
        setOpenDelete(true);
    }

    function deleteRentalApproved() {
        RentalService.removeRental(deleteId).then(response => {
            RentalService.getRentals().then(data => {
                setRentals(data);
            })
        })
    }

    function selectRental(rental: CreateRentalDto) {
        setOpenView(true);
        setSelectedRental(rental);
    }

    function searchWithFilters(values: object) {
        RentalService.getRentalsByFilter(values).then(response => {
            response = response ? setRentals(response) : setRentals([]);
        })
    }

    return (
        <>
            <RentalsContext.Provider value={{rentals, selectedRental, selectRental}}>
                <Box sx={{flexGrow: 1}}>
                    <AppBarHeader setOpenForm={() => setOpenForm(true)}/>
                </Box>
                <main>
                    <RentalsGrid searchWithFilters={searchWithFilters} deleteRental={deleteRental}
                                 selectRental={selectedRental}/>

                </main>
                <CreateRentalForm open={openForm} setOpenForm={setOpenForm} setNewRental={setNewRental}/>
                <DeleteDialog open={openDelete} setOpenDelete={setOpenDelete} executeDeletion={deleteRentalApproved}/>
                <ViewRentalDialog open={openView} setOpenView={setOpenView}/>
            </RentalsContext.Provider>
        </>
    );
}

export default App;
