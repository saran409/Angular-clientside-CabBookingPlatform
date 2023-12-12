import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CabRegistrationDto } from '../cab-registration-dto';
import { CabServiceService } from '../cab-service.service';
import { DriversComponent } from '../drivers/drivers.component';
import { DriverDto } from '../driver-dto';
import { DriverServiceService } from '../driver-service.service';

@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})
export class CabComponent implements OnInit{
  @Input()
  val: string = ''
  isInsert: boolean = false;
  rating: number = 0;
  isView: boolean = false;
  showDrivers: boolean =false;
  isRating = false;
  constructor(private route:ActivatedRoute,private cabService:CabServiceService,private adminService:DriverServiceService){}
  cabRegistrationDto : CabRegistrationDto = {
    carType: '',
    perKmRate: 0,
    currentLocation: '',
    cabRegistrationNumber: '',
    status: 'Unassigned'
  }
  driverDetails: DriverDto[] =[];
  isDriver : boolean = false;
  isInsertedSuccesfully : boolean =false;
  cabs: CabRegistrationDto[] = [];



    ngOnInit(){
      console.log(this.val)
      if(this.val === 'insert') {
        this.isInsert = true;
        this.isView = false;
        this.isRating = false;

      }
      if(this.val === 'view') {
        this.isInsert = false;
        this.isView = true;
        this.isRating = false;

        this.viewCabs();
      }
      if(this.val === 'driver') {
        this.isInsert = false;
        this.isView = false;
        this.isDriver = true;
        this.isRating = false;
        this.viewDriverDetails();
      }
      if(this.val === 'rating') {
        this.isInsert = false;
        this.isView = false;
        this.isDriver = false;
        this.isRating = true;
      }
  }

  insertCab() {
    this.cabService.insertCab(this.cabRegistrationDto).subscribe(response => {
      console.log(response);
    })
    this.isInsertedSuccesfully = true
  }

  viewCabs() {
    this.cabService.viewCabs().subscribe(response => {
      console.log(response);
      this.cabs = response;
    })
    this.isInsertedSuccesfully = false;
  }
  
  viewDriverDetails() {
    this.cabService.getPendingDrivers().subscribe(response => {
      console.log(response);
      this.driverDetails = response;
    })
    this.isInsertedSuccesfully = false;
  }

  approveDriver(driverId: number) {
    this.cabService.approveDriver(driverId).subscribe(response => {
      console.log(response);
      this.driverDetails.push (response);
    })
    this.isInsertedSuccesfully = false;
  
  }

  viewDriversByRating() {
    this.showDrivers = true;
    this.adminService.driversByRating(this.rating).subscribe(response=> {
      this.driverDetails = response;
    })
  }
}
