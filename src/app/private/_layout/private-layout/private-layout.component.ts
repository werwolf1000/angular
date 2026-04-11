import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {SidebarComponent} from '../../sidebar/sidebar.component';
import {IMenu} from '../../../interfaces/imenu';



@Component({
  selector: 'app-private-layout',
  imports: [
    RouterOutlet,
    SidebarComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './private-layout.component.html',
  styleUrl: './private-layout.component.scss'
})
export class PrivateLayoutComponent {
  public menuItems: IMenu[] = [
    {name: 'Главная', src: '/private/home' , icon: 'home.svg'},
    {name: 'Избранное', src: '/private/favorites', icon: 'star.svg'},
  ]
}
