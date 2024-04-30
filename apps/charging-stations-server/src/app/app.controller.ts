import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Main controller of the application
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
