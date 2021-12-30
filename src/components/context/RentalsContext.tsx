import React from "react";
import {CreateRentalDto} from "../../dto/rental";

interface IRentalContext {
    rentals: CreateRentalDto[] | undefined,
    selectedRental: CreateRentalDto | undefined,
    selectRental: any,
}

export const RentalsContext = React.createContext<Partial<IRentalContext>>({});
export const RentalsConsumer = RentalsContext.Consumer;

