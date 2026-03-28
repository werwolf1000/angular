import {Component, ContentChild, ElementRef, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() disabled = false;

  @Output() btnClick: EventEmitter<void> = new EventEmitter<void>();
  @ContentChild('buttonContent') btnRef: ElementRef | undefined;

  onBtnClick(): void {
    this.btnClick.emit();
  }
}
