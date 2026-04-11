import { Component } from '@angular/core';
import {CustomRadioComponent} from '../../shared/components/custom-radio/custom-radio.component';
import {SearchComponent} from '../../shared/components/search/search.component';
import { FormsModule } from '@angular/forms';  // 👈 импортируем

@Component({
  selector: 'app-sidebar',
  imports: [
    CustomRadioComponent,
    SearchComponent,
    FormsModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  selectedOption = 'val2'; // Значение по умолчанию

  public genres: {id: string,label: string}[] = [
    {id: 'val1',label: 'Комедия'},
    {id: 'val2',label: 'Мелодрама'},
    {id: 'val3',label: 'Фантастика'} ,
    {id: 'val4',label: 'Боевик'},
    {id: 'val5',label: 'Триллер'},
    {id: 'val6',label: 'Детектив'}
  ];
}
