import { Component } from '@angular/core';
import {LogInComponent} from '../page/log-in/log-in.component';

@Component({
  selector: 'app-layout',
  imports: [
    LogInComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
