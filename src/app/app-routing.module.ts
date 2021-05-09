import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { InformationComponent } from './information/information.component';


const routes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'login', component: LoginComponent },
  { path: 'information', component: InformationComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
