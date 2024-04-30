import { Routes } from '@angular/router';
import { ChargingStationsPageComponent } from './charging-stations-page.component';

/**
 * Defines some Routes for ChangeLogPage
 */
export const ChargingStationsPageRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ChargingStationsPageComponent,
        canActivate: [],
        children: [],
      },
    ],
  },
];

/**
 *  Defines the params for this route
 */
export interface ChargingStationsPageParams {
  someParam: string;
}
