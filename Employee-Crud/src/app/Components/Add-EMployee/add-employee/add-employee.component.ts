import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/Service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  constructor(private _service: EmployeeService, private _route: Router) {}

  submitForm(employee: any) {
    console.log(employee.value);
    this._service.addEmployee(employee.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    this.navigateToDasshboard();
  }

  navigateToDasshboard() {
    this._route.navigate(['/dashboard']);
  }
}
