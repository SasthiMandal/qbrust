import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Navbar/navbar/navbar.component';
import { DashboardComponent } from './Components/Emp-Dashboard/dashboard/dashboard.component';
import { AddEmployeeComponent } from './Components/Add-EMployee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './Components/Update-Employee/update-employee/update-employee.component';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ParentComponent } from './Components/Parent/parent/parent.component';
import { ChildComponent } from './Components/Child/child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
