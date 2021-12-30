import {CreateRentalDto} from "../dto/rental";
import {serialize} from "../utils/utils";

export const RentalService  = {
    getRentals,
    getRentalsByFilter,
    getRental,
    createRental,
    removeRental
}

const API_URL = "http://localhost:4000/rental"



async function getRentals() {
    const requestOptions = {
        method: "GET",
        Mode: 'cors',
        headers: {
            "Content-Type": "application/json",
        },
    };

    return fetch(`${API_URL}`, requestOptions)
        .then((data) => {
            return data.text().then(text => {
                return JSON.parse(text);
            })
        });
}

async function getRentalsByFilter(query : any) {
    const requestOptions = {
        method: "GET",
        Mode: 'cors',
        headers: {
            "Content-Type": "application/json",
        },
    };

    let searchQuery  = serialize(query);

    return fetch(`${API_URL}/findByFilter?${searchQuery}`, requestOptions)
        .then((data) => {
            return data.text().then(text => {
                return JSON.parse(text);
            })
        });
}


async function getRental(id : string) {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    return fetch(`${API_URL}/${id}`, requestOptions)
        .then((data) => {
            return data.text().then(text => {
                return JSON.parse(text);
            })
        });
}


async function createRental(payload: CreateRentalDto) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...payload,
        }),
    };

    return fetch(`${API_URL}`, requestOptions)
        .then((data) => {
            return data.text().then(text => {
                return JSON.parse(text);
            })
        });
}

async function removeRental(id: string){
    const requestOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };

    return fetch(`${API_URL}/${id}`, requestOptions)
        .then((data) => {
            return data;
        });
}
