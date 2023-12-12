import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerTripsDto } from './customer_trips-dto';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) { }


  viewBookingHistory(customerName: string | null): Observable<any> {
    const endpoint = 'http://localhost:6754/customer/allTrips/'+customerName;
    return this.http.get(endpoint);
  }

  createTripBooking(customerTrip: CustomerTripsDto): Observable<any> {
    const endpoint = 'http://localhost:6754/customer/trip/';
    return this.http.post(endpoint,customerTrip);
  }


  onGoingTrips(customerId:number): Observable<any> {
    const endpoint = 'http://localhost:6754/customer/tripDetails/'+customerId;
    return this.http.get(endpoint);
  }

  customerDetials(customerName:string | null): Observable<any> {
    const endpoint = 'http://localhost:6754/customer/customerbyName/'+ customerName;
    return this.http.get(endpoint);
  }



}
