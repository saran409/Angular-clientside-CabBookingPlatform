import { Component, Input, OnInit } from '@angular/core';
import { ComplaintService } from '../complaint.service';
import { ComplaintDto } from '../complaint-dto';
import { UpdateComplaint } from '../update-complaint';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
  complaintDto: ComplaintDto = {
    comment: '',
    customerId: 0,
    driverId: 0,
    email: '',
    status: '',
    resolution: '',
    complaintId: 0
  };
  successMessage: string | null = null;
  isSubmitted: boolean = false;

  @Input()
 customerId :number = 0;
  @Input()
  driverId: number  =0;
  @Input()
  type: string = '';
  @Input()
  mode:  string = '';

  isView: boolean = false;
  viewComplaints: boolean = false;
  createComplaints: boolean = false;
  updateComplaintForm: boolean = false;
  
  updateComplaintDetails:UpdateComplaint = {
    status: '',
    resolution: ''
  }
 
  complaintDtoList: ComplaintDto[] =[];
  constructor(private comaplintService:ComplaintService) {}
  ngOnInit(): void {
    this.isSubmitted = false;
    this.viewComplaints = false;
    this.createComplaints = false;

    this.isView = false;
    if(this.type === 'admin')
    this.allComplaints();

    if(this.mode !='' && this.mode == 'create') {
      this.createComplaints = true;
    }
    if(this.mode !='' && this.mode == 'view') {
      this.viewComplaints = true;
    }
      if(this.customerId != 0)
    this.complaintByCustomerId();
    if(this.driverId !=0)
    this.complaintByDriverId();
  }
  
 
  submitComplaint(): void {
    this.isSubmitted = true;
    console.log(this.complaintDto)
    this.comaplintService.saveComplaint(this.complaintDto).subscribe()
  }

  complaintByCustomerId() {
    this.comaplintService.complaintByCustomerId(this.customerId).subscribe(response=>{
      this.complaintDtoList = response;
      this.isView = true;
    })
  }

  complaintByDriverId() {
    this.comaplintService.complaintByDriverId(this.driverId).subscribe(response=>{
      this.complaintDtoList = response;
      this.isView = true;

    })
  }

  allComplaints() {
    this.comaplintService.allComplaints().subscribe(response=>{
      this.complaintDtoList = response;
      this.isView = true;
this.viewComplaints = true;
    })
  }

  updateComplaint() {
    this.updateComplaintForm = true;
  }
  submittedUpdatedComplaint(status:string,resolution:string,complaintId: number) {
    this.complaintDto.resolution = resolution;
    this.complaintDto.status = status;
    this.complaintDto.complaintId = complaintId;
    this.complaintDtoList.forEach(complaint=>{
      if(complaint.complaintId === complaintId) {
        complaint.status = this.updateComplaintDetails.status;
      }
    })
    this.comaplintService.updateComplaint(this.complaintDto).subscribe(response=>{
      console.log(response);
    });
    this.updateComplaintForm = false;
  }
}
