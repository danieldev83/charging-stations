import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  ChargingStationItem,
  ChargingStationService,
  ChargingStationsResponse,
} from './charging-stations.service';
import { debounceTime, Observable, switchMap, filter, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChargingStationItemUiComponent } from './charging-station-item-ui/charging-station-item-ui.component';

// todo: add description for component
/**
 * SMART COMPONENT
 *
 */
@Component({
  selector: 'app-charging-stations',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ChargingStationItemUiComponent],
  template: `
    <input [formControl]="plzControl" placeholder="Geben Sie eine PLZ ein.." />

    <ng-container *ngIf="chargingStations$ | async as chargingStations">
      <div class="numResults">
        Gefundene E-Ladestationen: {{ chargingStations.summary.numResults }}
      </div>

      <div class="listTitle">Ergebnisse:</div>
      <div class="list">
        <app-charging-station-item-ui
          *ngFor="let charginStation of chargingStations.results"
          [item]="charginStation"
        ></app-charging-station-item-ui>
      </div>
    </ng-container>
  `,
  styleUrls: ['./charging-stations.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChargingStationsComponent implements OnInit {
  chargingStations$: Observable<ChargingStationsResponse>;
  plzControl = new FormControl('');

  /**
   * Inject Dependencies (services, objects, etc..)
   * @param cdRef   Angular-Service, to manually trigger change detection.
   * @param chargingStationService
   */
  constructor(
    private cdRef: ChangeDetectorRef,
    private chargingStationService: ChargingStationService
  ) {
    // define the observable for the charging stations
    // debounceTime(400) will wait 400ms after the user has stopped typing before sending the request to the backend
    this.chargingStations$ = this.plzControl.valueChanges.pipe(
      filter((plz) => plz !== null && plz.length === 5),
      debounceTime(400),
      switchMap((plz) => this.chargingStationService.getChargingStations(plz))
    );
  }

  /**
   * Will be called on component initialisation.
   */
  ngOnInit(): void {
    this.chargingStations$.subscribe((chargingStations) => {
      console.log('charging stations loaded', chargingStations);
    });
  }
}
