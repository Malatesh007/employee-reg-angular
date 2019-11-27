import { Component, OnInit } from '@angular/core';
import { ViewPortalService } from './view-portal.service';
import { from } from 'rxjs';
import { Employee } from '../register-portal/employee';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-view-portal',
  templateUrl: './view-portal.component.html',
  styleUrls: ['./view-portal.component.css']
})
export class ViewPortalComponent implements OnInit {
  deleteBoolean: boolean;
  employeeDetails: Employee[];
  rowsOnPage: number;
  deleteEmployeeObj: Employee;
  constructor(private viewPortal: ViewPortalService, private appComponent: AppComponent, private router: Router) { }

  ngOnInit() {
    this.rowsOnPage = 5;
    this.getEmployeeeRegisterData();
  }


  getEmployeeeRegisterData() {
    this.viewPortal.getEmployeeregisterData().subscribe(arg => {
      this.deleteBoolean = false;
      this.employeeDetails = arg as Employee[];
    });

  }

  deleteEmployee(employeeObj) {
    this.deleteEmployeeObj = employeeObj;
    $('#deleteEmployeeRegisterDetail').modal('show');
  }

  deleteEmployeeFromDB() {
    this.deleteBoolean = true;
    this.viewPortal.deleteEmployeeRegisterData(this.deleteEmployeeObj.id).subscribe(arg => {
      this.getEmployeeeRegisterData();
      this.appComponent.setSuccessMessage('Employee Details deleted successfully');
    }, errror => {
      this.getEmployeeeRegisterData();
    });
   
  }

  addEmployeeRegister() {
    this.viewPortal.editEmployee = false;
    this.router.navigate(['/register']);
  }

  editEmployee(employeeObj) {
    this.viewPortal.editEmployee = true;
    this.viewPortal.editEmployeeObj = employeeObj;
    this.router.navigate(['/register']);
  }
} 
