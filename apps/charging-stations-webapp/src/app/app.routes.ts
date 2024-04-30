import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'charging-stations',
    pathMatch: 'full',
  },
  {
    path: 'charging-stations',
    loadChildren: () =>
      import(
        './@pages/charging-stations-page/charging-stations-page.module'
      ).then((m) => m.ChargingStationsPageModule),
    canActivate: [],
    data: {},
  },
];
