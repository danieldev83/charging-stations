import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import axios from 'axios';



@Injectable()
export class ChargingStationsService {
  constructor(private httpService: HttpService) {}

  getExternalData(lat: number, lng: number): Observable<any> {
    const apikey = "";

    const url = 'https://api.tomtom.com/search/2/poiSearch/Charge_Spot.json?key='+apikey+'&lat='+lat+'&lon='+lng+'&radius=25000'

    return this.httpService.get(url).pipe(map((resp)=>resp.data))
  }
  getGeodataByPostCode(postCode: number) {
    const apikey = ""
    const url='https://api.openweathermap.org/geo/1.0/zip?zip='+postCode+',DE&appid='+apikey
    async function getDatalat(postCode: number) {
      axios.get(url)
        .then(response=>{
          console.log(response.data.lat)
          const lat = response.data.lat;
          console.log(response.data.lon)
          const lon = response.data.lon;
        })
    }
    getDatalat(postCode);

    return this.httpService.get(url).pipe(map((resp)=>resp.data));
  }
}

