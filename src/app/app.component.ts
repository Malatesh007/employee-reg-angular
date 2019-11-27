import { Component, ElementRef, ViewChild } from '@angular/core';
import { MainServiceService } from './main-service.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employeeregister';
  loading = true;
  successMessage: string;
  errorMessage: string;
  isSuccess: boolean;
  isError: boolean;
  @ViewChild('blurId') input: ElementRef;
  constructor(public mainServiceService: MainServiceService, private element: ElementRef) {
    this.mainServiceService.isLoading.subscribe(data => {
      this.loading = data;
    });
  }
  ngOnInit(): void {
  }

  public setSuccessMessage(message: string) {
    this.successMessage = message;
    this.isSuccess = true;
    setTimeout(() => {
      this.isSuccess = false;
    }, 6000);
  }

  public setErrorMessage(message: string) {
    this.errorMessage = message;
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 6000);
  }
}
