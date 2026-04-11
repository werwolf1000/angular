import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CustomRadioComponent} from '../../../shared/components/custom-radio/custom-radio.component';
import {IMenu} from '../../../interfaces/imenu';

@Component({
  selector: 'app-menu',
  imports: [
    FormsModule,
    CustomRadioComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  selectedOption = 'val2'; // Значение по умолчанию

  public genres: IMenu[] = [
    {id: 'val1',label: 'Комедия'},
    {id: 'val2',label: 'Мелодрама'},
    {id: 'val3',label: 'Фантастика'} ,
    {id: 'val4',label: 'Боевик'},
    {id: 'val5',label: 'Триллер'},
    {id: 'val6',label: 'Детектив'}
  ];
}
