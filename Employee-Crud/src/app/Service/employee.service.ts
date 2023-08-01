import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url : string = 'http://localhost:3002';
  users:any=[];
  
// localStorage.setItem("data","jgsgfddkfg");
 usersData:any=[];
// var flag=localstorage.getItem("data");
  constructor(private _http : HttpClient) { }

  addEmployee(employee:any):Observable<any>{
    var storedUsers = JSON.parse(localStorage['localuserData']);
    if(storedUsers.length>=1){
      this.usersData=storedUsers;
    }
    this.usersData.push(employee);
    localStorage['localuserData'] = JSON.stringify(this.usersData);
    console.log("from service"+JSON.stringify(this.usersData))
    return this._http.post<any>(`${this.url}/employees`,employee);
  }
getEmployeeList(){
 
var storedUsers = JSON.parse(localStorage['localuserData']);
console.log(storedUsers)

   return<any> storedUsers
}
  employeeList():Observable<any>{
    // console.log( localStorage.getItem("localuserData"));
    // return<any> localStorage.getItem("localuserData");
    return this._http.get<any>(`${this.url}/employees`);
  }

  updateEmployee(id:number,employee:any):Observable<any>{
    return this._http.put(`${this.url}/employees/${id}`,employee)
  }

  getEmployeeById(id:number):Observable<any>{
    return this._http.get<any>(`${this.url}/employees/${id}`);
  }
}
