import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ChargingStationsService } from './api.service';
import {Observable} from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly chargingstationsService: ChargingStationsService) {
  }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('charging-stations')
  getExternalData() {
    return this.chargingstationsService.getExternalData(50.935173,6.953101);
  }

  @Get('/charging-stations/:id')
  async getGeodataByPostcode(@Param('id') id:number){
    const {lat,lon} = await this.chargingstationsService.getGeodataByPostCode(id).toPromise();

    const latitude:number = lat;
    const longitude:number = lon;

    return this.chargingstationsService.getExternalData(latitude,longitude)

  }

}

