import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ChargingStationsService } from './api.service';

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
    return this.chargingstationsService.getExternalData();
  }
}

