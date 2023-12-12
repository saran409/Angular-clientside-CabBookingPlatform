import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverServiceService } from '../driver-service.service';
import { CustomerTripsDto } from '../customer_trips-dto';
import { DriverDto } from '../driver-dto';
import { ReviewDto } from '../review-dto';
import { DriverTripDto } from '../driver-trip-dto';

@Component({
  selector: 'app-driverpage',
  templateUrl: './driverpage.component.html',
  styleUrls: ['./driverpage.component.css']
})
export class DriverpageComponent  implements OnInit {
  driverName: string | null= '';
  isLogout:boolean=false;
driverDetails: DriverDto ={
  username: '',
  password: '',
  mobileNumber: '',
  address: '',
  driverId: 0,
  email: '',
  licenseNo: '',
  status: '',
  avgRating: undefined,
  currentLocation: '',
  reviews: undefined
}
  viewComplaintDetails: boolean = false;
  viewReviewDetials: boolean = false;
  viewProfile: boolean = false;
  viewOngoingTripDetails: boolean = false;
  isViewReviews = false;
  reviewDto:ReviewDto[]= [];
  driverDetailsDto: DriverDto = {
    username: '',
    password: '',
    mobileNumber: '',
    address: '',
    driverId: 0,
    email: '',
    licenseNo: '',
    status: '',
    avgRating: undefined,
    currentLocation: '',
    reviews: [] as ReviewDto[]
  }
  driverId = 0;
  mode: string = '';
  router: Router;
  viewComplaintsList: boolean = false;

  onGoingTripsDetails : DriverTripDto = {
    tripBookingId: 0,
    customerId: 0,
    fromLocation: '',
    toLocation: '',
    fromDateTime: undefined,
    toDateTime: undefined,
    status: false,
    distanceInKm: 0,
    bill: '',
    customername: '',
    mobileNumber: '',
     
  }


  constructor( router: Router,private driverService: DriverServiceService) {
    this.router = router;
  }
  ngOnInit() {
    this.viewOngoingTripDetails = true;
    this.driverName = localStorage.getItem('Username');
    this.driverService.profileDetails(this.driverName).subscribe(response=>{
      this.driverDetails = response;
      this.driverId = this.driverDetails.driverId
    })
  }
  onGoingTrips() {
    this.driverService.onGoinTrip(this.driverName).subscribe(response=>{
      this.onGoingTripsDetails = response;

    })
    this.viewComplaintsList = false;
    this.viewOngoingTripDetails = true;
  }

  doLogout(){
    this.isLogout=true;
    if(this.isLogout){
      this.router.navigate(['']); 
    }
  }

  endTrip(tripId: number) {
    this.driverService.endTrip(tripId).subscribe(response=>{
      console.log(response);
    })

  }

  viewComplaints() {
    this.viewComplaintsList = true;
    this.mode = 'view';
    this.viewOngoingTripDetails = false;
    this.viewProfile = false;
    this.isViewReviews = false;

  }

  viewProfileDetails() {
    this.driverService.profileDetails(this.driverName).subscribe(response=>{
        this.driverDetailsDto = response;
    })
    this.viewProfile = true;
    this.viewOngoingTripDetails = false;
    this.viewComplaintsList = false;
    this.isViewReviews = false;

  }

  viewReivews() {
    this.driverService.profileDetails(this.driverName).subscribe(response=>{
      this.driverDetails = response;
    })

    console.log(this.driverDetails)
    this.driverService.reviews(this.driverDetails.driverId).subscribe(response=>{
      this.reviewDto = response;
  })
    this.viewProfile = false;
    this.viewOngoingTripDetails = false;
    this.viewComplaintsList = false;
    this.isViewReviews = true;
  }

}
