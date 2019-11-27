import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPortalComponent } from './view-portal/view-portal.component';
import { RegisterPortalComponent } from './register-portal/register-portal.component';

const routes: Routes = [
  {
    path: '',
    component: ViewPortalComponent
  },
  {
    path: 'view-register-portal',
    component: ViewPortalComponent
  },
  {
    path: 'register',
    component: RegisterPortalComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
