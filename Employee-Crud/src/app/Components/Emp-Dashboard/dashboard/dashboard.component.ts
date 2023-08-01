import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  employees:any= [];
  employees1:any= [];
  constructor(private _service: EmployeeService) {}
  ngOnInit(): void {
    this.getEmploeeLists();
  }

  getEmploeeLists() {
    this.employees=this._service.getEmployeeList();
    console.log("from component"+JSON.stringify(this.employees))
    // this._service.employeeList().subscribe(
    //   (response) => {
    //     this.employees = response;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
