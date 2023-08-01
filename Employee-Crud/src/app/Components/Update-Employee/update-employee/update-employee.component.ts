import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent {
  constructor(
    private _service: EmployeeService,
    private _activate: ActivatedRoute,
    private _route: Router
  ) {}

  employee: any = {
    name: '',
    email: '',
    address: '',
    contact: '',
  };

  getEmployeeById() {
    this._service.getEmployeeById(this.id).subscribe(
      (response) => {
        this.employee = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getEmployeeById();
  }

  id: number = this._activate.snapshot.params['empId'];

  submitForm(data: any) {
    this._service.updateEmployee(this.id, data.value).subscribe(
      (response) => {},
      (error) => {
        console.log(error);
      }
    );
    this.navigateToDashboard();
  }

  navigateToDashboard() {
    this._route.navigate(['/dashboard']);
  }
}
