import { Component } from '@angular/core';
import {CustomRadioComponent} from '../../shared/components/custom-radio/custom-radio.component';
import {SearchComponent} from '../../shared/components/search/search.component';
import {MenuComponent} from '../../parivate/components/menu/menu.component';


@Component({
  selector: 'app-sidebar',
  imports: [

    SearchComponent,
    MenuComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {


}
