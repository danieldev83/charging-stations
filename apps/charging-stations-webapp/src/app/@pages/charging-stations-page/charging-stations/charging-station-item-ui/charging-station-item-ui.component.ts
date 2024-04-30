import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ChargingStationItem } from '../charging-stations.service';

// todo: add description for component
/**
 * UI COMPONENT
 *
 */
@Component({
  selector: 'app-charging-station-item-ui',
  standalone: true,
  imports: [],
  template: ` <div>{{ item.address.freeformAddress }}</div> `,
  styleUrls: ['./charging-station-item-ui.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChargingStationItemUiComponent implements OnInit {
  @Input() item: ChargingStationItem;
  /**
   * Inject Dependencies (only translation-, icon- responsive- services, etc.)
   * Keep this empty, when possible, as this is a UI-Component
   * @param cdRef   Angular-Service, to manually trigger change detection.
   */
  constructor(private cdRef: ChangeDetectorRef) {}

  /**
   * Will be called on component initialisation.
   */
  ngOnInit(): void {}
}
