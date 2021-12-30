export interface CreateRentalDto {
    _id: string;
    city: string;
    address: string;
    rooms: number;
    price: number;
    extra: Array<string>;
}
