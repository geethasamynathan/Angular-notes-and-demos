import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators ,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formBuilder:FormBuilder)
  {

  }
  ngOnInit()
   {
  //   this.contactForm.get("fname")?.valueChanges.subscribe(selectedValue => {
  //     console.log('firstname value changed')
  //     console.log("selectedvalue ="+selectedValue)
  //     console.log("FirstName using get"+this.contactForm.get("fname")?.value)
  //     console.log("Firstname value"+this.contactForm.value) 
  //   })
 
  //   this.contactForm.get("address")?.valueChanges.subscribe(selectedValue => {
  //     console.log('address changed')
  //     console.log(selectedValue)
  //   })
 
    this.contactForm.valueChanges.subscribe(selectedValue => {
      console.log('form value changed')
      console.log(selectedValue)
    })
  }
  title = 'ReactiveFormDemo';
  //  contactForm =new FormGroup({
  //    fname:new FormControl('Geetha'),
  //    lname:new FormControl({value:'samynathan',disabled:true}),
  //    email:new FormControl(),
  //    gender:new FormControl(),
  //    isMarried :new FormControl(),
  //    country:new FormControl(),
  //    address :new FormGroup({
  //      city:new FormControl(),
  //      pincode:new FormControl()
  //    })
  //  })
  contactForm =this.formBuilder.group({
    fname:['',[Validators.required,Validators.minLength(4)]],
    lname:['',[Validators.pattern("^[a-zA-Z]+$")]],
    email:['',[Validators.required,Validators.email]],
    gender:[''],
    isMarried:[''],
    country:[''],
    address:  this.formBuilder.group({
      city:[''],
      pincode:['']
    })

  })
  get fname()
  {
    return this.contactForm.get('fname');
  }
  get lname()
  {
    return this.contactForm.get('lname');
  }

  get email()
  {
    return this.contactForm.get('email');
  }
  get gender()
  {
    return this.contactForm.get('gender');
  }
  get isMarried()
  {
    return this.contactForm.get('isMarried');
  }
  get counrty()
  {
    return this.contactForm.get('country');
  }
  // get city()
  // {
  //   return this.contactForm.get("address")?.get('city');
  // }
  get pincode()
  {
    return this.contactForm.get('address')?.get('pincode');
  }
   onSubmit()
   {
     
     console.log(this.contactForm.value);
   }
   setDefault() { 
    let contact = {
      fname: "Geetha",
      lname: "Samynathan",
      email: "geetha@gmail.com",
      gender: "female",
      isMarried: true,
      country: "2",
      address: {
        city: "Mumbai",       
        pincode: "400050"
      }
    }
    this.contactForm.setValue(contact);
  }

  setValue() {
 
    let contact = {
      fname: "Rahul",
      lname: "Dravid",
      email: "rahul@gmail.com",
      gender: "male",
      isMarried: true,
      country: "1",
      address: {
        city: "Bangalore",
               pincode: "600070"
      }
    };
    this.contactForm.setValue(contact);
  }
  setAddress() {
 
    let address= {
      city: "Bangalore",     
      pincode: "45070",
    };
 
    this.contactForm.get("address")?.setValue(address);
 
  };
 
  setCountry() {
 
    this.contactForm.get("country")?.setValue("3");
 
  };
  patchAddress() {
 
    let address= {
      city: "Mangalore",      
      pincode: "88888"
      
    };
 
    this.contactForm.get("address")?.patchValue(address);
 
  }
 
  patchName() {
    let contact = {
      fname: "eswar",
      lname: "ram",
    }
 
    this.contactForm.patchValue(contact);
 
  }

  reset() {
    this.contactForm.reset();
  }
}



