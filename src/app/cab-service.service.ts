import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CabRegistrationDto } from './cab-registration-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabServiceService {

  constructor(private http: HttpClient) { }


  insertCab(cabRegistrationDto: CabRegistrationDto): Observable<any> {
    console.log('Reached service class');
    const endpoint = 'http://localhost:6754/admin/register/cab';
    console.log(endpoint);
    return this.http.post(endpoint, cabRegistrationDto);
  }

  viewCabs(): Observable<any> {
    const endpoint = 'http://localhost:6754/admin/allcabs';
    console.log(endpoint);
    return this.http.get(endpoint);
  }

  getPendingDrivers(): Observable<any> {
    const endpoint = 'http://localhost:6754/admin/newreq/Pending';
    console.log(endpoint);
    return this.http.get(endpoint);
  }

  approveDriver(driverId: number): Observable<any> {
    const endpoint = 'http://localhost:6754/admin/update/status/'+driverId;
    let params = new HttpParams();

    return this.http.put(endpoint,null, {params});
  }

  rejectDriver(): Observable<any> {
    const endpoint = 'http://localhost:6754/admin/get/newreq/dr/Pending';
    console.log(endpoint);
    return this.http.get(endpoint);
  }
}
