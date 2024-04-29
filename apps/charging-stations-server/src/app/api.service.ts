import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';


@Injectable()
export class ChargingStationsService {
  constructor(private httpService: HttpService) {}


  getExternalData(lat: number, lng: number) {
    const apikey = "";

    const url = 'https://api.tomtom.com/search/2/poiSearch/Charge_Spot.json?key='+apikey+'&lat='+lat+'&lon='+lng+'&radius=25000'

    return this.httpService.get(url).pipe(map((resp)=>resp.data))
  }
  getGeodataByPostCode(postCode: number) {
    const apikey = ""
    const url = 'https://api.openweathermap.org/geo/1.0/zip?zip=' + postCode + ',DE&appid=' + apikey

    return this.httpService.get(url).pipe(map((response) => ({
      lat: response.data.lat,
      lon: response.data.lon
    })));


  }
}

