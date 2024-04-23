import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class ChargingStationsService {
  constructor(private httpService: HttpService) {}

  getExternalData() {
    const apikey = "mTzed1DEhvMfauNNBhtraB0BvTOgL0yL";
    const latitude= 50.935173;
    const longitude= 6.953101;
    const url = 'https://api.tomtom.com/search/2/poiSearch/Charge_Spot.json?key='+apikey+'&lat='+latitude+'&lon='+longitude+'&radius=10000'

    return this.httpService.get(url).pipe(map((resp)=>resp.data))
  }
}
