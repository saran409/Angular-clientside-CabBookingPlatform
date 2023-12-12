import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewDto } from './review-dto';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  giveReview(reviewDto:ReviewDto,driverId: number|null): Observable<any> {

    const endpoint = 'http://localhost:6754/customer/giveReview/' + driverId;
    return this.http.post(endpoint,reviewDto);


  }


  addReviewToTrip(tripBooking: number|null): Observable<any> {

    const endpoint = 'http://localhost:6754/customer/giveReview/' + tripBooking;
    return this.http.get(endpoint);


  }
}
