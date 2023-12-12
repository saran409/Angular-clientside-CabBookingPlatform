import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverServiceService {

  constructor(private http:HttpClient) { }

  onGoinTrip(driverName: string|null): Observable<any> {
    const endpoint = 'http://localhost:6754/driver/booking/'+ driverName;

    return this.http.get(endpoint);
  }
  endTrip(tripId: number): Observable<any> {
    const endpoint = 'http://localhost:6754/driver/endTrip/'+tripId;
    let params = new HttpParams();

    return this.http.put(endpoint,null, {params});
  }
  profileDetails(driverName: string | null): Observable<any> {
    const endpoint = 'http://localhost:6754/driver/driverDetails/'+driverName;
    let params = new HttpParams();

    return this.http.get(endpoint);
  }

  reviews(driverId: number | null): Observable<any> {
    const endpoint = 'http://localhost:6754/driver/fetchReviews/'+driverId;
    let params = new HttpParams();

    return this.http.get(endpoint);
  }

  driversByRating(rating: number): Observable<any> {
    const endpoint = 'http://localhost:6754/admin/driverByratings/'+rating;
    return this.http.get(endpoint);

  }

  
}
