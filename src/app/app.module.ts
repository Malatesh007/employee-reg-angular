import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewPortalComponent } from './view-portal/view-portal.component';
import { RegisterPortalComponent } from './register-portal/register-portal.component';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';
import { MatDatepickerModule, MatNativeDateModule, MatAccordion, MatRadioModule, MatExpansionModule, MatIconModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { UrlConstant } from 'src/url-constant/url-constant';
import { MainServiceService } from './main-service.service';
@NgModule({
  declarations: [
    AppComponent,
    ViewPortalComponent,
    RegisterPortalComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    DataTableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatInputModule
  ],
  providers: [UrlConstant, MainServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
