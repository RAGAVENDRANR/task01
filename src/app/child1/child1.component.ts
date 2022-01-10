import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value="";
  //REACTIVE FORM GROUP 01...
  reactiveform1=new FormGroup({
    firstname : new FormControl ('', Validators.required),
    lastname : new FormControl ('', Validators.required),
    gender : new FormControl ('',Validators.required),
    email : new FormControl ('', Validators.required),
    contactnumber : new FormControl ('', Validators.required),
  })

  //REACTIVE FORM GROUP 02...
  reactiveform2=new FormGroup({
    mark10 : new FormControl ('', Validators.required),
    mark12 : new FormControl ('', Validators.required),
    ugmark : new FormControl ('', Validators.required),
    pgmark : new FormControl ('', Validators.required),
  })

  //REACTIVE FORM GROUP 03...
  reactiveform3=new FormGroup({
    doornumber : new FormControl ('', Validators.required),
    streetname : new FormControl ('', Validators.required),
    areaname : new FormControl ('', Validators.required),
    cityname : new FormControl ('', Validators.required),
    statename : new FormControl ('', Validators.required),
    countryname : new FormControl ('', Validators.required),
    pincode : new FormControl ('', Validators.required),
  })
  //ALERT FUNCTIONALITIES ...
  alerter1(){alert("Data Saved  successfully !!"),this.reactiveform1.reset()}
  alerter2(){alert("Data Saved  successfully !!"),this.reactiveform2.reset()}
  alerter3(){alert("Data Saved  successfully !!"),this.reactiveform3.reset()}
}
