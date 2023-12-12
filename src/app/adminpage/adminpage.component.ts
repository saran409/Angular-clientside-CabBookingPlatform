import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  adminName: string | null= '';
  router: Router;
  viewComplaintList : boolean = false;
  isInsertCab: boolean =false;
  isViewCabs: boolean = false;
  isViewDrivers: boolean = false;
  isLogout:boolean=false;
  isViewRating: boolean = false;
  val : string = '';
  constructor( router: Router) {
    this.router = router;
  }
  admin : string ='admin';

  ngOnInit() {
    this.adminName = localStorage.getItem('Username');
  }
  insertCabs() {
    this.val = "insert";
    this.isInsertCab = true;
    this.isViewCabs = false;
    this.isViewDrivers = false;
    this.viewComplaintList = false;
    this.isViewRating = false;

  }
  viewCabs() {
    this.val = "view";
    this.isInsertCab = false;
    this.isViewCabs = true;
    this.isViewDrivers = false;
    this.viewComplaintList = false;
    this.isViewRating = false;

  }

  viewDrivers() {
    this.val = "driver";
    this.isInsertCab = false;
    this.isViewCabs = false;
    this.isViewDrivers = true;
    this.viewComplaintList = false;
    this.isViewRating = false;

  }
  viewComplaints() {
    this.viewComplaintList = true;
    this.isInsertCab = false;
    this.isViewCabs = false;
    this.isViewDrivers = false;
    this.isViewRating = false;

  }
  viewRating() {
    this.val = "rating";

    this.viewComplaintList = false;
    this.isInsertCab = false;
    this.isViewCabs = false;
    this.isViewDrivers = false;
    this.isViewRating = true;
  }

  doLogout(){
    this.isLogout=true;
    if(this.isLogout){
      this.router.navigate(['']); 
    }
  }
  
}
