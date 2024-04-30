import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChargingStationsPageComponent } from './charging-stations-page.component';
import { Router, RouterModule } from '@angular/router';
import { ChargingStationsPageRoutes } from './charging-stations-page.routing';
import { ChargingStationsComponent } from './charging-stations/charging-stations.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChargingStationsPageRoutes),
    ChargingStationsComponent,
    HttpClientModule,
  ],
  declarations: [ChargingStationsPageComponent],
  providers: [],
  exports: [ChargingStationsPageComponent, HttpClientModule],
})
export class ChargingStationsPageModule {
  constructor(private router: Router) {}
}
