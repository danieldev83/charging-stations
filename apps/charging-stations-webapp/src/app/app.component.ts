import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [RouterModule, HttpClientModule],

  selector: 'app-root',
  template: ' <router-outlet></router-outlet>',
  styleUrl: './app.component.less',
})
export class AppComponent {}
