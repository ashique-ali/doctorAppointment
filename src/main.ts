import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { DashboardComponent } from './app/Pages/dashboard/dashboard.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



  


  // bootstrapApplication(DashboardComponent)
  // .catch((err) => console.error(err));