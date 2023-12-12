import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ComplaintDto } from './complaint-dto';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:6754/customer';
  saveComplaint(complaint: ComplaintDto): Observable<any> {
    console.log('Reached service class');
    const endpoint = 'http://localhost:6754/customer/complaint/save';
    console.log(endpoint);
    return this.http.post(endpoint, complaint);
  
}
complaintByCustomerId(customerId: number): Observable<any> {
  console.log('Reached service class');
  const endpoint = 'http://localhost:6754/customer/complaintByCustomer/'+customerId;
  console.log(endpoint);
  return this.http.get(endpoint);

}

complaintByDriverId(driverId: number): Observable<any> {
  console.log('Reached service class');
  const endpoint = 'http://localhost:6754/driver/complaintOnDriver/'+driverId;
  console.log(endpoint);
  return this.http.get(endpoint);

}

allComplaints(): Observable<any> {
  console.log('Reached service class');
  const endpoint = 'http://localhost:6754/admin/complaints/all';
  console.log(endpoint);
  return this.http.get(endpoint);

}

updateComplaint(updateComplaint: ComplaintDto): Observable<any> {
  console.log('Reached service class');
  const endpoint = 'http://localhost:6754/admin/complaints/update';
  console.log(endpoint);
  return this.http.put(endpoint,updateComplaint);



}
}
