import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ChargingstationModule } from './api.module';
import { ChargingStationsService } from './api.service';

@Module({
  imports: [ChargingstationModule],
  controllers: [AppController],
  providers: [AppService,ChargingStationsService],
  exports : [ChargingstationModule],
})
export class AppModule {}


