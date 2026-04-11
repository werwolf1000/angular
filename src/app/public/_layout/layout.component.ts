import { Component } from '@angular/core';
import {LogInComponent} from '../pages/log-in/log-in.component';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-layout',
  imports: [
    LogInComponent,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
