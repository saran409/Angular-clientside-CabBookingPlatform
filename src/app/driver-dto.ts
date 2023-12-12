import { ReviewDto } from "./review-dto";

export class DriverDto {
      username : string = '';
	  password : string = '';
	  mobileNumber : string = '';
	  address : string = '';
	  driverId : number = 0;
	  email : string = '';
	  licenseNo : string = '';
	  status : string = '';
	  avgRating: number | undefined;
	  currentLocation: string = '';
	  reviews: ReviewDto[] | undefined;
}
