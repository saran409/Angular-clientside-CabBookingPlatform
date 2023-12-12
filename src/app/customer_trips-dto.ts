export class CustomerTripsDto {
    tripBookingId: number = 0;
    customerId: number = 0;
    fromLocation: string = '';
    toLocation: string = '';
    fromDateTime: Date | undefined;
    toDateTime: Date | undefined;
    status: boolean = false;;
    distanceInKm: number = 0;
    bill: string = '';
    drivername: string = '';
    mobileNumber: string = '';
    email: string = '';
    cabRegistrationNumber: string = '';
    carType: string = '';
    ratingDone: boolean = false;
    
}
