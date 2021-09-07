import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  validateUser(username:string,password:string)
  {
    console.log ("username from auth service"+username);
    console.log("passowrd from auth service"+password);
    if(username=="admin" && password=="Admin123")
    {     
      localStorage.setItem('username','admin');
      return true;
    }
    else
    {
      console.log('auth service condition false');
      return false;
    }
  
  }
}
 
