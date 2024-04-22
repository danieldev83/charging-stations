import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'charging-stations-webapp';



  options =[
    {name : "tesla (High Power)", value : "High Power"},
    {name : "IEC 62196-2 type 2 combo (Mennekes)", value: "IEC 62196-2 type 2 combo (Mennekes)" }

  ];

}
