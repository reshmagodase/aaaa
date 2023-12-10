import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
todolist :any=[]
userform:any=FormGroup;
totalcount:any;
id:any;
    page: number = 1;
  constructor(private serviceobj:HttpserviceService , private fb:FormBuilder) { }
  ngOnInit(): void {

    this.userform=this.fb.group({
      username:['' ,Validators.required],
      email:['' ,[Validators.required, Validators.email]],
      phone:['' ,Validators.required],
    })
    this.getalldata()
  }

  getalldata(){
    this.serviceobj.getuserdata().subscribe((res:any) =>{
      this.todolist =res;
      console.log(this.todolist);
      this.totalcount=res.length;
      // console.log("jdhfdsjf: ",this.totalcount);
    })
  }

  deleterecord(id:any){
    console.log("id :" +id);
    this.serviceobj.deletedata(id).subscribe((res:any) =>{
      alert("data deleted Successfully");
      this.getalldata();
    })
  }

  updatedata(data:any){
     this.id=data.id;
     this.userform.controls['username'].setValue(data.username);
     this.userform.controls['email'].setValue(data.email);
     this.userform.controls['phone'].setValue(data.phone);
  }

  editdata(){
    this.serviceobj.updatedata(this.userform.value,this.id).subscribe((res:any) =>{
      alert("data updated Successfully");
      console.log( JSON.stringify(res));
      this.getalldata();
    }, error =>{
      console.log("something wrong")
    })
  }
  search(){ }
}
