import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';
import { provideHotToastConfig } from '@ngneat/hot-toast';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideToastr(),provideHotToastConfig()]
};


// export const appConfig: ApplicationConfig = {
//   providers: [provideHotToastConfig({ ... })],
// };