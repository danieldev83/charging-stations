import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

/**
 * Service for requesting charging stations from the backend.
 */
@Injectable({
  providedIn: 'root',
})
export class ChargingStationService {
  private chargingStationsUrl = environment.restURL + '/charging-stations';

  constructor(private http: HttpClient) {}

  /**
   * Get charging stations by postal code.
   * Maps the response to a more usable format.
   * @param plz
   */
  getChargingStations(plz: string): Observable<ChargingStationsResponse> {
    return this.http.get(
      `${this.chargingStationsUrl}/${plz}`
    ) as Observable<ChargingStationsResponse>;
  }
}

export interface ChargingStationsResponse {
  summary: {
    numResults: number;
  };
  results: ChargingStationItem[];
}

export interface ChargingStationItem {
  id: string;
  address: ChargingStationItemAddress;
}

export interface ChargingStationItemAddress {
  freeformAddress: string;
}
