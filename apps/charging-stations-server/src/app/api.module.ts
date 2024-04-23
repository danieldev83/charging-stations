import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ChargingStationsService } from './api.service';



@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [ ChargingStationsService ],
  exports : [HttpModule],
})
export class ChargingstationModule {}

