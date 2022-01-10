import { DataService } from './data.service';
import { Component,OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface datalisttype{
  id:number;
  name:string;
  age:number;
  profession:string;
  location:string;
  check:any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  data: any;
  title='TEDDY';
  dataid:any;
  on=false;
  off=true;
  newid: any;
  check: any;
  newdata: any;
  toogle(){
    this.on=!this.on
  }
  
  ngOnInit(){
    this.Dataser.getdata().subscribe((res:any)=>{
      this.data=res;
      this.checkvalue=this.data.check
      console.log("this is to check the changed value ---"  +this.checkvalue);
      console.log(" first console log of application",this.data)});
      this.checkchange()
  }  
  constructor(private Dataser:DataService){}
  
  // Form Control : 
  dataform=new FormGroup({
    name:new FormControl('',[Validators.required]),
    age:new FormControl('',[Validators.required]),
    profession:new FormControl('',[Validators.required]),
    location:new FormControl('',[Validators.required]),
    check:new FormControl(),
  })

// method to get all the datas from the database.

  getdatas(){
    this.Dataser.getdata().subscribe((res:any)=>{
      this.data=res;
      this.checkvalue=this.data.check
      console.log("this is to check the changed value =" +this.checkvalue);
    })
  }

  //changing the checkvalue 
  
  checkvalue:any="";

  changedvalue:any;
  
  checkchange(){
    console.log("this is the function initialization", this.changedvalue,this.checkvalue)
    if (this.checkvalue.value === "Yes"){
      this.changedvalue.setValue(true)}
      else if(this.checkvalue.value === "No"){
      this.changedvalue.setValue(false)
  }}

// new user creation method is defined here.

  savedata(){

    if(this.dataform.controls['check'].value === true){
      this.dataform.controls['check'].setValue('Yes');
    } else{
      this.dataform.controls['check'].setValue('No');
      console.log(this.dataform.controls['check'].value)
    }

    let save = this.dataform.value

    this.Dataser.postdata(save).subscribe((_ref:any)=>{
      this.getdatas()
      alert("USER DATA IS ADDED TO DATABASE")
      this.dataform.reset()
    })

  }

  // EDIT method is defined here

  editdata(id:any){
    this.Dataser.getDataId(id).subscribe((res:any)=> {
    let newdata=res;

    console.log(newdata)

    this.newid=newdata.id, 

    this.dataform.patchValue({
    name: newdata.name,
    age:newdata.age,
    profession:newdata.profession,
    location:newdata.location,
    check:newdata.check
    })
    if(this.dataform.controls['check'].value === "Yes"){
      this.dataform.controls['check'].setValue(true);
    }else if(this.dataform.controls['check'].value === "No" ){
      this.dataform.controls['check'].setValue(false);
    }

    console.log("FETCHED DATA ID " + this.newid + " the check value is patched as - "+this.check)
    console.log(newdata)  
    })
  }
  
  // update method is defined here.

  updatedata(_newid:any){
    console.log("ID TO BE PASSED TO DB "+this.newid)
    console.log("UPDATAED DATAFORM VALUE ", this.dataform.value)
    console.log(this.dataform.value.check)

    //Passing the check box value to db:

    if(this.dataform.controls['check'].value === true){
      this.dataform.controls['check'].setValue('Yes');
    } else{
      this.dataform.controls['check'].setValue('No');
    }

    console.log("THE CHECK CONDITION IS APPLIED HERE.")
    console.log(this.dataform.value)
     this.Dataser.updatedata(this.newid,this.dataform.value).subscribe((_res:any)=>{

       alert("USER DATA UPDATE SUCESSFULL")
       this.getdatas();
       this.dataform.reset()
    })
  }
  clear(){
    this.dataform.reset();
    console.log("the data is reseted")
    this.getdatas();
  }


  //Method to delete the user data is defined here.

  deletedata(id:any){
   this.Dataser.deleteuser(id).subscribe((ref:any)=>{
     console.log(ref)
    this.getdatas()
    alert("USER DATA IS REMOVED FROM DATABASE")
  })
   }

   //FILTER operation is performed here.
   
   searchstring:any='';
   items!: datalisttype[];

   //Sorting Method is defined here.
   key:any="id";
   reverse:boolean=true;
   sort(key: any){
     this.key = key;
     this.reverse =!this.reverse;
     console.log("reffering the key values",this.key)
     console.log("reffering the key values",this.reverse)
   }

// TOOGLE BUTTON FORMAT:

  Show:boolean =true
  onclick(){
    this.Show=false;;  
    }

  passdata(){
    if (this.Show)
      return this.savedata(),console.log("if condition is applied")

    else {
      return this.updatedata(this.dataform.value),console.log("else  condition is applied"),
      this.Show=!this.Show,
      this.getdatas(),this.dataform.reset()
      }
  
    } 
    close(){
      this.dataform.reset(),
      this.getdatas(),
      console.log("APPLICATION IS RESETED")
    }
  
    value=true
    on1:any
    fun(){
      this.value=false
      console.log("THE DATA IS TO BE RESETED")
    }
  }
  

