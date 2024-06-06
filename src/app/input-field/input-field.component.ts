import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    },
  ],
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() pattern: string = '';
  @Input() helperText: string = '';

  value: any;
  isValid: boolean = true;

  onChange: any = () => {};
  onTouched: any = () => {};

  get isRequired() {
    return this.required ? true : false;
  }

  get inputPattern() {
    return this.pattern ? this.pattern : '';
  }

  writeValue(value: any): void {
    this.value = value;
    this.validate();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onValueChange(event: any): void {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouched();
    this.validate();
  }

  validate() {
    if (this.required && !this.value) {
      this.isValid = false;
    } else if (this.pattern && !new RegExp(this.pattern).test(this.value)) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }
}
