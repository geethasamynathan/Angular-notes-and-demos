import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateref',
  templateUrl: './templateref.component.html',
  styleUrls: ['./templateref.component.css']
})
export class TemplaterefComponent implements OnInit {
title='Template Reference';
email_address:string='sample@gmail.com';
website_url='';
  constructor() { }

  ngOnInit(): void {
  console.log(this.email_address);
  console.log(this.title);
  }
 changeTitile(inputElement:any)
 {
   inputElement.value="Welcome to CGI";   
  // inputElement.focus();   
 }   
 onSubmit(form:any)
 {
   console.log(" submit is working")

this.email_address=form.value.email;
this.website_url=form.value.web;
console.log(this.email_address);
console.log(this.website_url);
 }

}
