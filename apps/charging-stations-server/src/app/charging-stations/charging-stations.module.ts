import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ChargingStationsService } from './charging-stations.service';
import { ChargingStationsController } from './charging-stations.controller';

@Module({
  imports: [HttpModule],
  controllers: [ChargingStationsController],
  providers: [ChargingStationsService],
  exports: [],
})
export class ChargingstationModule {}
