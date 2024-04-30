import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChargingstationModule } from './charging-stations/charging-stations.module';

@Module({
  imports: [ChargingstationModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
