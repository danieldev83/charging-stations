import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';

/**
 * Service, that contain the logic to request the charging stations and the geodata from the APIs
 */

@Injectable()
export class ChargingStationsService {
  // API-Keys
  tomTomAPIKey = 'CjrdFKNpAc9VlCTe4Fdapl7HbogHZlyD';
  openWeatherMapAPIKey = '22204a30a6fbcbd4f137676bd1bd6a21';

  constructor(private httpService: HttpService) {}

  /**
   * Request the charging stations from the TomTom API by a given latitude and longitude
   * Returns the charging stations in a radius of 25km
   * @param lat
   * @param lng
   */
  requestChargingStations(lat: number, lng: number) {
    const apikey = this.tomTomAPIKey;

    const url =
      'https://api.tomtom.com/search/2/categorySearch/.json?key=' +
      apikey +
      '&lat=' +
      lat +
      '&lon=' +
      lng +
      '&radius=25000' +
      '&categorySet=7309';

    return this.httpService.get(url).pipe(map((resp) => resp.data));
  }

  /**
   * Request the geodata from the OpenWeatherMap API by a given post code
   * Returns the latitude and longitude of the given post code
   * @param postCode
   */
  requestGeodataByPostCode(postCode: string): Observable<GeoDataByPostCode> {
    const apikey = this.openWeatherMapAPIKey;
    const url =
      'https://api.openweathermap.org/geo/1.0/zip?zip=' +
      postCode +
      ',DE&appid=' +
      apikey;

    return this.httpService.get(url).pipe(
      map((response) => ({
        lat: response.data.lat,
        lon: response.data.lon,
      }))
    );
  }
}

export interface GeoDataByPostCode {
  lat: number;
  lon: number;
}
