import { Injectable } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { from } from 'rxjs';
import { UrlConstant } from 'src/url-constant/url-constant';
import { HttpParams } from '@angular/common/http';
import { Employee } from '../register-portal/employee';
@Injectable({
  providedIn: 'root'
})
export class ViewPortalService {

  editEmployee: boolean;
  editEmployeeObj: Employee;
  url = UrlConstant.SERVER_PORT;
  constructor(public mainServiceService: MainServiceService) { }

  getEmployeeregisterData() {
    return this.mainServiceService.getObjects(this.url + 'get-employee-info');
  }

  deleteEmployeeRegisterData(employeeId) {
    return this.mainServiceService.deleteObject(this.url + 'delete-employee-detail?employee_id=' + employeeId);
  }
  addEmployeeRegisterDate(employee) {
    return this.mainServiceService.addObject(this.url + 'save-employee-details', JSON.stringify(employee));
  }
}
