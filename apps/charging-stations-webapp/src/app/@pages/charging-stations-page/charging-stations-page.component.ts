import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ChargingStationsPageParams } from './charging-stations-page.routing';

/**
 * PAGE COMPONENT
 * Displays the calendar page with the calendar and the task details section.
 */
@Component({
  selector: 'app-charging-stations-page',
  template: `<app-charging-stations></app-charging-stations>`,
  styleUrls: ['./charging-stations-page.component.less'],
})
export class ChargingStationsPageComponent implements OnInit {
  /**
   * An observable of url-parameters scoped to this route.
   */
  params$: Observable<ChargingStationsPageParams>;

  /**
   * Inject Dependencies (services, objects, etc..)
   * @param cdRef
   * @param router   The Angular router
   * @param activatedRoute   Provides access to information about a route associated with a component
   */
  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.params$ = this.activatedRoute
      .params as Observable<ChargingStationsPageParams>;
  }

  /**
   * Will be called on component initialisation.
   */
  ngOnInit(): void {}
}
