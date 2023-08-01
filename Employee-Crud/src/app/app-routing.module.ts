import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/Emp-Dashboard/dashboard/dashboard.component';
import { AddEmployeeComponent } from './Components/Add-EMployee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './Components/Update-Employee/update-employee/update-employee.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'add',
    component:AddEmployeeComponent
  },
  {
    path:'update/:empId',
    component:UpdateEmployeeComponent
  },
  {
    path:'*',
    component:AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
