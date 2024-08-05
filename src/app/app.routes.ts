import { Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NewAppointmentComponent } from './Pages/new-appointment/new-appointment.component';
import { AppointmentListComponent } from './Pages/appointment-list/appointment-list.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { HeaderComponent } from './Pages/header/header.component';
import { DoctorComponent } from './Pages/doctor/doctor.component';

export const routes: Routes = [
    {
        path: 'admin',
        component: HeaderComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'new',
                component: NewAppointmentComponent
            },
            {
                path: 'appointmentList',
                component: AppointmentListComponent
            },
            {
                path: 'addDoctor',
                component: DoctorComponent
            }

        ]
    },
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent
    },
  

    // {
    //     path: 'list',
    //     component: AppointmentListComponent
    // },
];
