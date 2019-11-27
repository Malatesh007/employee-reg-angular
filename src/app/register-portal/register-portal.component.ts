import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { ViewPortalService } from '../view-portal/view-portal.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { getElementDepthCount } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-register-portal',
  templateUrl: './register-portal.component.html',
  styleUrls: ['./register-portal.component.css']
})
export class RegisterPortalComponent implements OnInit {

  employeeObj: Employee;
  today: Date;
  constructor(private viewPortal: ViewPortalService, private appComponent: AppComponent, private router: Router) { }
  genderArray: string[] = ['Male', 'Female', 'Other'];
  ngOnInit() {
    this.employeeObj = new Employee();
    this.today = new Date();
    if (this.viewPortal.editEmployee) {
      this.employeeObj = this.viewPortal.editEmployeeObj;
      console.log(this.employeeObj);
    }
  }


  onSubmit() {
    this.employeeObj.dateOfBirth = new Date(this.employeeObj.dateOfBirth);
    this.viewPortal.addEmployeeRegisterDate(this.employeeObj).subscribe(data => {
      this.router.navigate(['/view-register-portal']);
    }, error => {
      this.router.navigate(['/view-register-portal']);
    });
  }

}
