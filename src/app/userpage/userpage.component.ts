import { Component, OnInit } from '@angular/core';

import { CustomerServiceService } from '../customer-service.service';
import { CustomerTripsDto } from '../customer_trips-dto';
import { Router } from '@angular/router';
import { ReviewDto } from '../review-dto';
import { ReviewService } from '../review.service';
import { DriverServiceService } from '../driver-service.service';
import { DriverDto } from '../driver-dto';
import { CustomerDto } from '../customer-dto';
 

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit{

  customerId = 0;
  isHome:boolean=false;
  mode: string = '';
  viewHistory: boolean = false;
  ongoingtripDetails: boolean = false;
  profileView: boolean = false;
 isLogout:boolean=false;
  createComplaint: boolean = false;
  viewComplaintsList: boolean = false;
  customerName: string | null ='';
  createTrip: CustomerTripsDto = {
    tripBookingId: 0,
    customerId: 0,
    fromLocation: '',
    toLocation: '',
    fromDateTime: undefined,
    toDateTime: undefined,
    status: false,
    distanceInKm: 0,
    bill: '',
    drivername: '',
    mobileNumber: '',
    email: '',
    cabRegistrationNumber: '',
    carType: '',
    ratingDone: false
  }

  customerDto : CustomerDto ={
    username: '',
    password: '',
    address: '',
    mobileNumber: '',
    email: '',
    customerId: 0
  }
  onGoingTripsDetails: CustomerTripsDto = {
    tripBookingId: 0,
    customerId: 0,
    fromLocation: '',
    toLocation: '',
    fromDateTime: undefined,
    toDateTime: undefined,
    status: false,
    distanceInKm: 0,
    bill: '',
    drivername: '',
    mobileNumber: '',
    email: '',
    cabRegistrationNumber: '',
    carType: '',
    ratingDone: false
  };

  reviewDto: ReviewDto = {
    rating: 0,
    comment: ''
  }

  bookedCab: boolean = false

  driver: DriverDto ={
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
  
 router:Router;

  constructor(private customerService: CustomerServiceService, router:Router ,private driverService:DriverServiceService, private reviewService:ReviewService){  
    this.router=router;
  
  }
  tripsList: CustomerTripsDto[] = [];
  ngOnInit(): void {
    this.customerName = localStorage.getItem('Username');
    this.customerService.customerDetials(this.customerName).subscribe(response=>{
      this.customerId = response.customerId;
      this.customerDto = response;
      this.createTrip.customerId = this.customerId;
      localStorage.setItem('customerId', this.customerId+'');
          
    })
   
  }

  viewBookingHistory() {
      this.customerService.viewBookingHistory(this.customerName).subscribe(response=>{
        console.log(response);
        this.tripsList = response;
      })
      this.viewHistory = true;
      this.viewComplaintsList = false;
      this.ongoingtripDetails = false;
      this.createComplaint = false;
      this.profileView = false;
  }
  doLogout(){
    this.isLogout=true;
    if(this.isLogout){
      this.router.navigate(['']); 
    }


  }
  createTripBooking() {
    this.customerService.createTripBooking(this.createTrip).
      subscribe(response=>{
        console.log(response);
    },
    err=>{
      
    });
    this.bookedCab = true
}

 
onGoingTrips() {
  this.ongoingtripDetails = true;
this.viewComplaintsList = false;
this.createComplaint = false;
this.viewHistory = false;
  this.customerService.onGoingTrips(this.customerDto.customerId).subscribe(response=>{
    console.log(response);
    this.onGoingTripsDetails = response;
});

}
createComplaintForm() {
  this.createComplaint = true;
  this.viewComplaintsList = false;
  this.ongoingtripDetails = false;
  this.viewHistory = false;
  this.profileView = false;
  this.mode = 'create'
}
viewComplaints() {
  this.viewComplaintsList = true;
  this.ongoingtripDetails = false;
  this.createComplaint = false;
  this.viewHistory = false;
  this.profileView = false;
  this.mode = 'view';
}

submittedReviewTrip(rating:number , comment:string,driverName: string,tripBookingId:number) {

     this.driverService.profileDetails(driverName).subscribe(response=>{
      this.driver= response;
      });

      this.reviewDto.comment = comment;
      this.reviewDto.rating = rating;

      this.reviewService.giveReview(this.reviewDto,this.driver.driverId).subscribe(response=>{
        this.tripsList.forEach(trip=>{
          if(trip.tripBookingId === tripBookingId)
          trip.ratingDone = true;
        })})

        this.reviewService.addReviewToTrip(tripBookingId).subscribe(response=>{

        });
      }
   
      viewProfile() {
        this.viewComplaintsList = false;
        this.ongoingtripDetails = false;
        this.createComplaint = false;
        this.viewHistory = false;
        this.profileView = true;
      }
      viewHome(){
        this.ongoingtripDetails = true;
       this.viewComplaintsList = false;
        this.ongoingtripDetails = false;
       this.viewHistory = false;
       this.profileView = false;
       this.mode = 'create'

      }
    }
   


