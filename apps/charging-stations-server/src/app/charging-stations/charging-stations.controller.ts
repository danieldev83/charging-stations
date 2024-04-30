import { Controller, Get, Param } from '@nestjs/common';
import { ChargingStationsService } from './charging-stations.service';
import { firstValueFrom } from 'rxjs';

/**
 * Main controller of the application
 */
@Controller()
export class ChargingStationsController {
  constructor(
    private readonly chargingstationsService: ChargingStationsService
  ) {}

  /**
   * Endpoint to get charging stations by a given post code
   * Uses the OpenWeatherMap API to get the latitude and longitude of the given post code and then requests the charging stations
   * @param zipcode
   */
  @Get('/charging-stations/:zipcode')
  async getGeodataByPostcode(@Param('zipcode') zipcode: string) {
    const { lat, lon } = await firstValueFrom(
      this.chargingstationsService.requestGeodataByPostCode(zipcode)
    );

    // Get the charging stations from the latitude and longitude
    return this.chargingstationsService.requestChargingStations(lat, lon);
  }

  /**
   * Endpoint to get charging stations with a fixed latitude and longitude
   * For demonstration purposes
   */
  @Get('charging-stations')
  getChargingStations() {
    return this.chargingstationsService.requestChargingStations(
      50.935173,
      6.953101
    );
  }
}
