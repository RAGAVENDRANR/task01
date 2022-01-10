import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  ngOnInit(): void {
  }
  
  dataform = new FormGroup ({
    name:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  bye(){
    this.dataform.reset(),
    alert("DATA SUBMITTED")
  }
}
