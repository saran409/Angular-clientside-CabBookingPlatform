export class DriverTripDto {
    tripBookingId: number = 0;
    customerId: number = 0;
    fromLocation: string = '';
    toLocation: string = '';
    fromDateTime: Date | undefined;
    toDateTime: Date | undefined;
    status: boolean = false;;
    distanceInKm: number = 0;
    bill: string = '';
    customername: string = '';
    mobileNumber: string = '';
     
    
}

