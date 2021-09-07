import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg='';
  constructor(private routes:Router, private _authservice:AuthService ) {
  //  localStorage.clear();
   }

  ngOnInit(): void {
  }
 checkcredentials(uname:string,pwd:string)
 {
   
    var result= this._authservice.validateUser(uname,pwd);
    console.log("reuslt"+result);
    if(result)
    {    
   this.routes.navigate(["../dashboard"]);
   console.log('redirected');
    }
    
    else{
      this.msg="invalid credentails";
    }
  }
}
