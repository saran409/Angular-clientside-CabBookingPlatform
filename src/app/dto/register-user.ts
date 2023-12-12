export class RegisterUser {
    password: string;
    username: string;
    userrole: string;
    name: string;
    address: string;
    
    email: string;
    mobileNumber: number;
    currentLocation: string;
    licenseNo : string;
    
    constructor(
      password: string,
      username: string,
      userrole: string,
      name: string,
      address: string,
      licenseNo : string,
      email: string,
      mobileNumber: number,
      currentLocation: string,
      
     
    ) {
      
     
      this.email = email;
      this.address = address;
      this.name = name;
      this.licenseNo =licenseNo;
      this.password = password;
      this.mobileNumber = mobileNumber;
      this.currentLocation = currentLocation;
      this.username = username;
      this.userrole = userrole;
    }
  }
  
