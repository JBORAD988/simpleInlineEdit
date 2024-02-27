import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'simpleInlineEdit';

  EmpArray: any [] = [];
  oldUserData: any

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loadEMP()
  }

  loadEMP(){
    this.http.get('https://localhost:7009/api/Employees').subscribe((res:any)=>{
      this.EmpArray = res
    })
  }

  onEdit(userObj: any){
    this.oldUserData= JSON.stringify(userObj)
    this.EmpArray.forEach(e=>{
      e.isEdit = false
    })
    userObj.isEdit = true
  }

  Savedata(emp: any){
    this.EmpArray.forEach(e=>{
      e.isEdit = false
    })
     console.log(emp)
  }

  OnCancel(obj:any){
    const oldData = JSON.parse(this.oldUserData)
    obj.name = oldData.name;
    obj.email = oldData.email;
    obj.phone = oldData.phone
    obj.salary = oldData.salary
    obj.isEdit = false

  }

  OnDelete(id:any){
console.log(id)
  }


}
