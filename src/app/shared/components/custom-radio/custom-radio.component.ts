// custom-radio.component.ts
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss'],
  imports: [
    NgIf
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomRadioComponent),
      multi: true
    }
  ]
})
export class CustomRadioComponent implements ControlValueAccessor {
  @Input() value: any;
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;

  @Input() selectedValue: any;

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelect(): void {
    if (!this.disabled) {
      this.selectedValue = this.value;
      this.onChange(this.value);
      this.onTouched();
    }
  }

  isChecked(): boolean {
    return this.selectedValue === this.value;
  }
}
